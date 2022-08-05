/* eslint-disable no-unused-vars */
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";
import {
  useCreateProductMutation,
  useCreateProductVariantMutation,
} from "../graphql/generated";
import { formatSlug } from "../utils/formatSlug";

interface ProductProviderProps {
  children: ReactNode;
}

export type CategoryVariant = {
  color: string;
  size: string;
};

type Variant = {
  id: string | undefined;
  name: string | undefined;
};

export type ProductVariant = {
  color: Variant;
  size: Variant;
};

export type ProductProps = {
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  categories: string;
  color: string;
  size: string;
};

interface ProductContextData {
  product: ProductProps;
  productVariant: ProductVariant;
  loading: boolean;
  addProduct: (product: ProductProps) => Promise<ProductProps>;
  addProductVariant: (values: CategoryVariant) => Promise<void>;
  populateProduct: (product: ProductProps) => Promise<void>;
}

const ProductContext = createContext({} as ProductContextData);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const [productVariant, setProductVariant] = useState<ProductVariant>(
    {} as ProductVariant
  );
  const [loading, setLoading] = useState(false);

  const [createProduct, { loading: load }] = useCreateProductMutation();

  const createNewProduct = useCallback(
    async (data: ProductProps) => {
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
    [createProduct, load, loading]
  );

  const addProduct = useCallback(
    async (productData: ProductProps): Promise<ProductProps> => {
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
          size: productData.size,
          color: productData.color,
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

  const [createProductVariant, { loading: loadVariant }] =
    useCreateProductVariantMutation();

  const addProductVariant = useCallback(
    async (values: CategoryVariant): Promise<void> => {
      const response = await createProductVariant({
        variables: values,
      });

      const productVariant = {
        color: {
          id: response.data?.createProductColorVariant?.id,
          name: response.data?.createProductColorVariant?.name,
        },
        size: {
          id: response.data?.createProductSizeVariant?.id,
          name: response.data?.createProductSizeVariant?.name,
        },
      };

      setProductVariant(productVariant);
      setLoading(loadVariant);
    },
    [createProductVariant, loadVariant]
  );

  const populateProduct = useCallback(
    async (productData: ProductProps) => {
      setLoading(true);

      const newProduct = Object.assign(product, productData);
      setProduct(newProduct);

      setLoading(false);
    },
    [product]
  );

  return (
    <ProductContext.Provider
      value={{
        product,
        addProduct,
        addProductVariant,
        productVariant,
        loading,
        populateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
