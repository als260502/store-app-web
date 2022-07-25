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

type ProductCategoryVariant = {
  categories: {
    id: string;
    name: string;
  };
  variant: {
    id: string;
    name: string;
  };
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
  product: CreateProductProps;
  categoryVariant: ProductCategoryVariant;
  loading: boolean;
  addProduct: (product: CreateProductProps) => Promise<CreateProductProps>;
  addProductCategoryVariant: (values: CategoryVariant) => Promise<void>;
};

const ProductContext = createContext({} as ProductContextData);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<CreateProductProps>(
    {} as CreateProductProps
  );
  const [categoryVariant, setCategoryVariant] =
    useState<ProductCategoryVariant>({} as ProductCategoryVariant);

  const [loading, setLoading] = useState(false);

  const [createProduct, { loading: load }] = useCreateProductMutation();

  const createNewProduct = useCallback(
    async (data: CreateProductProps) => {
      try {
        setLoading(load);
        const response = await createProduct({
          variables: data,
        });

        toast.success("Sucesso:\nProduto cadastrado com sucesso!", {
          duration: 6000,
          icon: "👍",
        });
        console.log(response.data);

        setLoading(loading);
        return response.data;
      } catch (error) {
        console.log(error);
        toast.error("Erro:\nErro ao cadastrar produto!", {
          duration: 6000,
          icon: "😒",
        });
      }
    },
    [createProduct, load]
  );

  const addProduct = useCallback(
    async (productData: CreateProductProps): Promise<CreateProductProps> => {
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
          categories: productData.categories,
          variants: productData.variants,
        };

        setProduct(newProduct);

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
    async (values: CategoryVariant): Promise<void> => {
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
      setCategoryVariant(newProductCategoryVariant);
    },
    []
  );

  return (
    <ProductContext.Provider
      value={{
        product,
        addProduct,
        addProductCategoryVariant,
        categoryVariant,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
