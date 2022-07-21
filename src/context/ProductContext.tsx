import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";
import {
  CreateProductMutation,
  ProductSizeColorVariant,
  useCreateProductMutation,
} from "../graphql/generated";
import { formatSlug } from "../utils/formatSlug";

interface ProductProviderProps {
  children: ReactNode;
}

export type CategoryVariant = {
  category: string;
  variant: string;
};

export type Product = {
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  categories: {
    id: string;
    name: string;
  };
  variant: ProductSizeColorVariant;
};

export type CreateProductProps = {
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  categories: string;
  variants: string;
};

type ProductContextData = {
  product: Product | undefined;
  addProduct: (product: CreateProductProps) => Promise<CreateProductProps>;
  addProductCategoryVariant: (values: CategoryVariant) => void;
};

const ProductContext = createContext({} as ProductContextData);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<Product>();

  const [createProduct] = useCreateProductMutation();

  const createNewProduct = useCallback(
    async (data: CreateProductProps) => {
      try {
        const response = await createProduct({
          variables: data,
        });

        toast.success("Sucesso:\nProduto cadastrado com sucesso!", {
          duration: 6000,
          icon: "👍",
        });
        console.log(response.data);

        return response.data;
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

  const addProduct = useCallback(
    async (productData: Product): Promise<CreateProductProps> => {
      try {
        const formattedSlug = formatSlug(String(productData.name));

        const formattedPrice = parseFloat(String(productData.price));
        const formattedQtd = parseInt(String(productData.quantity));

        const newProduct = {
          name: productData.name,
          slug: formattedSlug,
          description: productData.description,
          price: formattedPrice,
          quantity: formattedQtd,
          categories: productData.categories.id,
          variants: productData.variant.id,
        };

        await createNewProduct(newProduct);

        return newProduct;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    [createNewProduct]
  );

  const addProductCategoryVariant = useCallback(
    (values: CategoryVariant): void => {
      const { category, variant } = values;

      const categories = category.split(",");
      const variants = variant.split(",");

      const newProductCategoryVariant = {
        categories: {
          id: categories[0],
          name: categories[1],
        },
        variant: {
          id: variants[0],
          name: variants[1],
        },
      };
      setProduct(newProductCategoryVariant);
    },
    []
  );

  return (
    <ProductContext.Provider
      value={{ product, addProduct, addProductCategoryVariant }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
