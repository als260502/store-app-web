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
  useCreateProductColorMutation,
  useCreateProductSizeMutation,
} from "../graphql/generated";
import { CustomError } from "../utils/errorHandle";
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
  sellPrice: number;
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
  addProductSize: (size: string) => Promise<void>;
  addProductColor: (color: string) => Promise<void>;
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

  const [createProduct] = useCreateProductMutation();

  const createNewProduct = useCallback(
    async (data: ProductProps) => {
      try {
        setLoading(true);
        const response = await createProduct({
          variables: data,
        });

        return response.data;
      } catch (error) {
        console.log(error);
        toast.error("Erro:\nErro ao cadastrar produto!", {
          duration: 6000,
          icon: "😒",
        });
      } finally {
        setLoading(false);
      }
    },
    [createProduct]
  );

  const addProduct = useCallback(
    async (productData: ProductProps): Promise<ProductProps> => {
      setLoading(loading => !loading);
      try {
        const formattedSlug = formatSlug(String(productData.name));

        const formattedPrice = parseFloat(String(productData.price));
        const formattedSellPrice = parseFloat(String(productData.sellPrice));
        const formattedQtd = parseInt(String(productData.quantity));

        const newProduct = {
          name: productData.name,
          slug: formattedSlug,
          description: productData.description,
          price: formattedPrice,
          sellPrice: formattedSellPrice,
          quantity: formattedQtd,
          categories: productData.categories,
          size: productData.size,
          color: productData.color,
        };

        setProduct(newProduct);

        const response = await createNewProduct(newProduct);
        if (!response?.createProduct?.id) {
          throw new CustomError("Falha ao adicionar produto");
        }
        return newProduct;
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [createNewProduct]
  );

  const [createProductVariant, { loading: loadVariant }] =
    useCreateProductVariantMutation();

  const [creareProductColor] = useCreateProductColorMutation();
  const [creareProductSize] = useCreateProductSizeMutation();

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

  const addProductColor = useCallback(
    async (color: string) => {
      try {
        setLoading(loading => !loading);
        const response = await creareProductColor({
          variables: {
            color,
          },
        });

        const productColorVariant = {
          color: {
            id: response.data?.createProductColorVariant?.id,
            name: response.data?.createProductColorVariant?.name,
          },
        };
        setProductVariant(Object.assign(productVariant, productColorVariant));
      } catch (error) {
        console.error("adicionar cor", error);
      } finally {
        setLoading(false);
      }
    },
    [creareProductColor, productVariant]
  );

  const addProductSize = useCallback(
    async (size: string) => {
      try {
        setLoading(loading => !loading);
        const response = await creareProductSize({
          variables: {
            size,
          },
        });

        const productSizeVariant = {
          size: {
            id: response.data?.createProductSizeVariant?.id,
            name: response.data?.createProductSizeVariant?.name,
          },
        };
        setProductVariant(Object.assign(productVariant, productSizeVariant));
      } catch (error) {
        console.error("adicionar cor", error);
      } finally {
        setLoading(false);
      }
    },
    [creareProductSize, productVariant]
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
        addProductSize,
        addProductColor,
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
