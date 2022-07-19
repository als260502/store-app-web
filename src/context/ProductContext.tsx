import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";
import {
  Product,
  useCreateCategoryMutation,
  useCreateProductMutation,
} from "../graphql/generated";
import { formatSlug } from "../utils/formatSlug";

interface ProductProviderProps {
  children: ReactNode;
}

type Category = {
  name: string;
  slug: string;
  description: string;
};

interface ProductContextData {
  product: Product;
  addProduct: (product: Product) => Product;
  addProductCategory: (category: Category) => Promise<Category>;
}

const ProductContext = createContext({} as ProductContextData);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState({} as Product);

  const addProduct = useCallback(
    (productData: Product): Product => {
      try {
        const formattedSlug = formatSlug(String(productData.name));

        const formattedPrice = parseFloat(String(productData.price));
        const formattedQtd = parseInt(String(productData.quantity));

        const newProduct = {
          ...productData,
          slug: formattedSlug,
          price: formattedPrice,
          quantity: formattedQtd,
        };

        setProduct(newProduct);
      } catch (error) {
        console.log(error);
        toast.success("Erro:\nErro ao salvar produto!", {
          duration: 6000,
          icon: "😒",
        });
      }
      return product;
    },
    [product]
  );

  const [createProduct, { loading }] = useCreateProductMutation();

  const createNewProduct = useCallback(
    async (data: Product) => {
      try {
        const result = await createProduct({
          variables: data,
        });

        toast.success("Sucesso:\nProduto cadastrado com sucesso!", {
          duration: 6000,
          icon: "👍",
        });
        console.log(result);
      } catch (error) {
        console.log(error);
        toast.error("Erro:\nErro ao cadastrar produto!", {
          duration: 6000,
          icon: "😒",
        });
      }
    },
    [createProduct]
  );

  const addProductCategory = useCallback((category: Category): void => {
    console.log(category);
  }, []);

  return (
    <ProductContext.Provider
      value={{ product, addProduct, addProductCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
