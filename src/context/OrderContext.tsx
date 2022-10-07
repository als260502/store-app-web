/* eslint-disable no-unused-vars */
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { v4 as uuid } from "uuid";

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
import {
  OrderItemCreateInput,
  useCreateCompleteOrderMutation,
  useGetAllProductsLazyQuery,
  useGetProductsByCategoryLazyQuery,
  useUpdateProductByIdMutation,
} from "@graphql/generated";

type ContextProps = {
  cart?: Cart[];
  categories?: Category[];
  products?: Product[];
  parcel: number;
  paymentType: string;
  totalOrder: number;
  handleAddRemoveProductToCart: (product: Product) => void;
  handleProductQuantityAdd: (product: Product) => void;
  handleProductQuantitySub: (product: Product) => void;
  filterProducts: (categoryId: string) => Promise<void>;
  setProducts: (product?: Product[]) => void;
  getProducts: () => Promise<void>;
  updateCartProductPrice: (product: Product, value: number) => void;
  updatePaymentTax: (product: Product, tax: number) => void;
  handleSetParcelNumber: (value: number) => void;
  handleSetPaymentType: (value: string) => void;
  closeOrder: (parcel: number, paymentType: string) => Promise<void>;
  handleClearCart: () => void;
  resetOrder: () => void;
};

const OrderContext = createContext({} as ContextProps);

type Props = {
  children: ReactNode;
};

export const OrderProvider = ({ children }: Props) => {
  const [
    { products, cart, categories, parcel, paymentType, totalOrder },
    dispatch,
  ] = useReducer(orderReducer, initialState);

  const [getDataFromApi] = useGetProductsByCategoryLazyQuery();
  const [getAllProducts, { refetch }] = useGetAllProductsLazyQuery();
  const [createOrder] = useCreateCompleteOrderMutation();
  const [updateProduct] = useUpdateProductByIdMutation();

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
      dispatch({
        type: ActionTypes.getProducts,
        payload: product.filter(p => p.quantity > 0),
      });
    };

    getData();
  }, [getDataFromApi]);

  const setProducts = useCallback((product?: Product[]) => {
    dispatch({
      type: ActionTypes.getProducts,
      payload: product?.filter(p => p.quantity > 0),
    });
  }, []);

  const getProducts = useCallback(async () => {
    const result = await getAllProducts();

    const products = result.data?.products.map(product => {
      return {
        ...product,
        qtd: 0,
      };
    });

    if (products) {
      dispatch({ type: ActionTypes.getProducts, payload: products });
    }
  }, [getAllProducts]);

  const filterProducts = useCallback(
    async (categoryId: string) => {
      if (categoryId === "todos") {
        const result = await getAllProducts();

        const allProducts = result.data?.products
          .map(p => {
            const cartProduct = cart.find(c => c.id === p.id);
            if (cartProduct) {
              return {
                ...p,
                qtd: cartProduct.qtd,
                checked: true,
              };
            }
            return p;
          })
          .filter(p => p.quantity > 0) as Product[];
        dispatch({ type: ActionTypes.getProducts, payload: allProducts });
        return;
      }

      const result = await getDataFromApi();

      const filteredCategory = result.data?.categories.filter(
        category => category.id === categoryId
      );

      if (filteredCategory) {
        const filteredProduct = filteredCategory[0].products.map(product => ({
          ...product,
          qtd: 0,
        }));

        const newProduct = filteredProduct.map(p => {
          const cartProduct = cart.find(c => c.id === p.id);

          if (cartProduct) {
            return {
              ...p,
              qtd: cartProduct.qtd,
              checked: true,
            };
          }
          return p;
        }) as Product[];

        dispatch({
          type: ActionTypes.filterProducts,
          payload: newProduct,
        });
      }
    },
    [cart, getDataFromApi]
  );

  const handleAddRemoveProductToCart = useCallback(
    (product: Product) => {
      const myCart = cart as Cart[];
      if (myCart?.find(p => p.id === product.id)) {
        const newCart = myCart.filter(cart => cart.id !== product.id);
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
        total: product.sellPrice,
        tax: 0,
        qtd: 1,
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
            qtd: 1,
          };
        }
        return p;
      });
      dispatch({ type: ActionTypes.getProducts, payload: productsFiltered });
    },
    [cart, products]
  );

  const updateProductProfit = useCallback((cartProducts: Cart[]) => {
    const updatedProfit = cartProducts.map(p => {
      const productProfitCalc = p.sellPrice * p.qtd - p.price * p.qtd;

      return {
        ...p,
        profit: productProfitCalc,
      };
    });

    dispatch({
      type: ActionTypes.updateProductProfit,
      payload: updatedProfit,
    });
  }, []);

  const setTotalOrder = useCallback(
    (cartProducts: Cart[]) => {
      const total = cartProducts?.reduce((prev, acc) => prev + acc?.total, 0);
      dispatch({ type: ActionTypes.updateTotalOrder, payload: total });

      updateProductProfit(cartProducts);

      return totalOrder;
    },
    [totalOrder, updateProductProfit]
  );

  const handleProductQuantityAdd = useCallback(
    (product: Product) => {
      const myCart = cart as Cart[];
      try {
        const findProduct = myCart?.find(prod => prod.id === product.id);

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
              total: p.sellPrice * p.qtd,
            };
          }
          return p;
        });

        dispatch({
          type: ActionTypes.incrementCartProduct,
          payload: newProductCart,
        });

        setTotalOrder(newProductCart);
      } catch (error) {
        toast.error(String(catchError(error)?.message));
      }
    },
    [cart, products, setTotalOrder]
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

      const newCartSub = cart.map(p => {
        if (product.id === p.id && p.qtd > 0) {
          return {
            ...p,
            qtd: (p.qtd -= 1),
            total: p.sellPrice * p.qtd,
          };
        }
        return p;
      });

      dispatch({
        type: ActionTypes.getProducts,
        payload: newProduct,
      });

      setTotalOrder(newCartSub);
      const newCart = cart.filter(f => f.qtd > 0);

      dispatch({
        type: ActionTypes.decrementCartProduct,
        payload: newCart,
      });
    },
    [cart, products, setTotalOrder]
  );

  const updateCartProductPrice = useCallback(
    (product: Product, newPrice: number) => {
      const myCart: Cart[] = cart;
      const productPrice = products?.find(
        pro => pro.id === product.id
      ) as Product;
      const productTotal = myCart.find(c => c.id === product.id) as Cart;

      const oldSellPrice = productPrice?.sellPrice as number;
      const total = newPrice * productTotal.qtd;

      const cartUpdatted = myCart.map(p => {
        if (p.id === product.id) {
          console.log(total);
          return {
            ...p,
            sellPrice: newPrice ? newPrice : oldSellPrice,
            total: total,
            tax: 0,
          };
        }
        return p;
      }) as Cart[];

      dispatch({
        type: ActionTypes.updateCartProductPrice,
        payload: cartUpdatted,
      });

      setTotalOrder(cartUpdatted);
    },
    [cart, products, setTotalOrder]
  );

  const updatePaymentTax = useCallback(
    (product: Product, tax: number) => {
      const cartUpdatted = cart.map((p: Cart) => {
        const productProfitCalc = p.sellPrice * p.qtd - p.price * p.qtd;
        const taxedProfit = (productProfitCalc * tax) / 100;
        const productProfit = productProfitCalc - taxedProfit;

        if (p.id === product.id) {
          if (tax) {
            return {
              ...p,
              tax: tax,
              profit: productProfit,
            };
          } else {
            return {
              ...p,
              tax: 0,
              profit: productProfitCalc,
            };
          }
        }
        return p;
      });

      dispatch({
        type: ActionTypes.updateCartProductPrice,
        payload: cartUpdatted,
      });
    },
    [cart]
  );

  const handleClearCart = useCallback(() => {
    const myCart = cart as Cart[];
    const newCart = myCart.filter(c => c.id === "123");
    dispatch({
      type: ActionTypes.clearCart,
      payload: newCart,
    });

    const newProducts = products?.map(product => {
      return {
        ...product,
        qtd: 0,
        checked: false,
      };
    });
    dispatch({ type: ActionTypes.getProducts, payload: newProducts });
  }, [cart, products]);

  const handleSetPaymentType = useCallback((paymentType: string) => {
    dispatch({
      type: ActionTypes.updatePaymentType,
      payload: paymentType,
    });
  }, []);

  const handleSetParcelNumber = useCallback((value: number) => {
    dispatch({
      type: ActionTypes.updateParcel,
      payload: value,
    });
  }, []);

  const closeOrder = useCallback(
    async (parcel: number, paymentType: string) => {
      const orderItems = cart?.map(item => {
        return {
          quantity: item.qtd,
          total: item.total,
          profit: item.profit,
          tax: item.tax,
          product: { connect: { id: item.id } },
        };
      }) as OrderItemCreateInput[];

      const order = {
        orderTotal: totalOrder,
        orderValue: totalOrder,
        stripeCheckoutId: uuid(),
        parcel,
        paymentType,
        items: orderItems,
      };

      await createOrder({
        variables: order,
      });

      cart?.map(async c => {
        const newObject = {
          id: c.id,
          quantity: c.quantity - c.qtd,
        };
        await updateProduct({
          variables: newObject,
        });
      });

      const response = await refetch();
      const allProducts = response.data.products
        .map(p => {
          return {
            ...p,
            qtd: 0,
          };
        })
        .filter(p => p.quantity > 0);

      console.log(products);

      dispatch({
        type: ActionTypes.getProducts,
        payload: allProducts,
      });
    },
    [cart, createOrder, refetch, totalOrder, updateProduct, products]
  );

  const resetOrder = useCallback(() => {
    dispatch({
      type: ActionTypes.resetOrder,
    });
  }, []);

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
        setProducts,
        getProducts,
        updateCartProductPrice,
        handleClearCart,
        resetOrder,
        updatePaymentTax,
        handleSetPaymentType,
        handleSetParcelNumber,
        parcel,
        paymentType,
        totalOrder,
        closeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
