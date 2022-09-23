/* eslint-disable no-unused-vars */
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import toast from "react-hot-toast";
import { catchError, CustomError } from "@utils/errorHandle";
import {
  ActionTypes,
  Cart,
  Category,
  initialState,
  orderReducer,
  Product,
} from "@hooks/orderReducer";
import { useGetProductsByCategoryLazyQuery } from "@graphql/generated";

type ContextProps = {
  cart?: Cart[];
  categories?: Category[];
  products?: Product[];
  handleAddRemoveProductToCart: (product: Product) => void;
  handleProductQuantityAdd: (product: Product) => void;
  handleProductQuantitySub: (product: Product) => void;
  filterProducts: (categoryId: string) => Promise<void>;
};

const OrderContext = createContext({} as ContextProps);

type Props = {
  children: ReactNode;
};

export const OrderProvider = ({ children }: Props) => {
  const [{ products, cart, categories }, dispatch] = useReducer(
    orderReducer,
    initialState
  );

  const [getDataFromApi] = useGetProductsByCategoryLazyQuery();

  useEffect(() => {
    const getData = async () => {
      const result = await getDataFromApi();

      const categories = result.data?.categories.map(c => ({
        id: c.id,
        name: c.name,
      }));

      const product = [] as Product[];

      result.data?.categories?.map(c =>
        c.products.map(p => {
          const myProduct = {
            ...p,
            qtd: 0,
            checked: false,
          };

          product.push(myProduct);
        })
      );

      dispatch({ type: ActionTypes.getCategories, payload: categories });
      dispatch({ type: ActionTypes.getProducts, payload: product });
    };

    getData();
  }, [getDataFromApi]);

  const filterProducts = useCallback(
    async (categoryId: string) => {
      const result = await getDataFromApi();

      const filteredCategory = result.data?.categories.filter(
        category => category.id === categoryId
      );
      if (filteredCategory) {
        const filteredProduct = filteredCategory[0].products.map(product => ({
          ...product,
          qtd: 0,
        }));
        dispatch({
          type: ActionTypes.filterProducts,
          payload: filteredProduct,
        });
      }
    },
    [getDataFromApi]
  );

  const handleAddRemoveProductToCart = useCallback(
    (product: Product) => {
      if (cart?.find(p => p.id === product.id)) {
        const newCart = cart.filter(cart => cart.id !== product.id);
        dispatch({
          type: ActionTypes.addOrRemoveProductToCart,
          payload: newCart,
        });

        const productsFiltered = products?.map(p => {
          if (product.id === p.id) {
            return {
              ...p,
              qtd: 0,
              checked: false,
            };
          }
          return p;
        });
        dispatch({ type: ActionTypes.getProducts, payload: productsFiltered });
        return;
      }
      const newProduct = {
        ...product,
      };

      const newCart = [...cart, newProduct];
      dispatch({
        type: ActionTypes.addOrRemoveProductToCart,
        payload: Object.assign(newCart),
      });

      const productsFiltered = products?.map(p => {
        if (product.id === p.id) {
          return {
            ...p,
            checked: true,
          };
        }
        return p;
      });
      dispatch({ type: ActionTypes.getProducts, payload: productsFiltered });
    },
    [cart, products]
  );

  const handleProductQuantityAdd = useCallback(
    (product: Product) => {
      try {
        const findProduct = cart?.find(prod => prod.id === product.id);

        if (!findProduct) {
          throw new CustomError("Produto não selecionado!");
        }

        products?.map(p => {
          if (product.id === p.id && p.qtd < p.quantity) {
            return {
              ...p,
              qtd: (p.qtd += 1),
              checked: true,
            };
          }
          return p;
        }) as Product[];

        const newProductCart = cart.map(p => {
          if (product.id === p.id && p.qtd < p.quantity) {
            return {
              ...p,
              qtd: (p.qtd += 1),
              checked: true,
            };
          }
          return p;
        }) as Product[];

        dispatch({
          type: ActionTypes.incrementCartProduct,
          payload: newProductCart,
        });
      } catch (error) {
        toast.error(String(catchError(error)?.message));
      }
    },
    [cart, products]
  );

  const handleProductQuantitySub = useCallback(
    (product: Product) => {
      const newProduct = products?.map(p => {
        if (product.id === p.id && p.qtd > 0) {
          const quantityUpdated = {
            ...p,
            qtd: (p.qtd -= 1),
          };

          if (quantityUpdated.qtd === 0) {
            quantityUpdated.checked = false;
          }
          return quantityUpdated;
        }
        return p;
      });

      dispatch({
        type: ActionTypes.getProducts,
        payload: newProduct,
      });

      cart.map(p => {
        if (product.id === p.id && p.qtd > 0) {
          return {
            ...p,
            qtd: (p.qtd -= 1),
          };
        }
        return p;
      });

      dispatch({
        type: ActionTypes.getProducts,
        payload: newProduct,
      });

      const newCart = cart.filter(f => f.qtd > 0);

      dispatch({
        type: ActionTypes.decrementCartProduct,
        payload: newCart,
      });
    },
    [cart, products]
  );

  return (
    <OrderContext.Provider
      value={{
        cart,
        categories,
        products,
        handleAddRemoveProductToCart,
        handleProductQuantityAdd,
        handleProductQuantitySub,
        filterProducts,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
