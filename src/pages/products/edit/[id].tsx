/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextPage } from "next";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../../../components/FormComponents/Input";
import { Header } from "../../../components/Header";
import { SearchProduct } from "../../../components/Search/SearchProduct";
import { Button } from "../../../components/Button";

import toast, { Toaster } from "react-hot-toast";
import { useCallback, useEffect, useState } from "react";
import { ProductSidebar } from "../../../components/Sidebar/product";
import {
  useRemoveProductByIdMutation,
  useUpdateProductByIdMutation,
} from "../../../graphql/generated";
import { CustomError, catchError } from "../../../utils/errorHandle";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useOrder } from "@context/OrderContext";

const createProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  price: yup
    .number()
    .typeError("Valor do produto é obrigatório")
    .min(1)
    .positive(),
  sellPrice: yup
    .number()
    .typeError("Preço de venda do produto é obrigatório")
    .min(1)
    .positive(),
  quantity: yup.number().typeError("quantidade em estoque").min(1).positive(),
});
export type ProductProps = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  sellPrice: number;
  quantity: number;
};

const EditProduct: NextPage = () => {
  const [productId, setProductId] = useState("");
  const [loading, setLoading] = useState(false);

  const { products } = useOrder();

  const router = useRouter();

  const { id } = router.query;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProductProps>({
    resolver: yupResolver(createProductFormSchema),
  });

  const handleSetProduct = useCallback(
    (product: ProductProps) => {
      setProductId(productId => product.id);
      setValue("name", product.name);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("sellPrice", product.sellPrice);
      setValue("quantity", product.quantity);
    },
    [setValue]
  );

  useEffect(() => {
    if (id) {
      const product = products?.find(p => id === p.id) as ProductProps;
      setProductId(productId => product?.id);
      setValue("name", product?.name);
      setValue("description", product?.description);
      setValue("price", product?.price);
      setValue("sellPrice", product?.sellPrice);
      setValue("quantity", product?.quantity);
    }
  }, [handleSetProduct, id, products, setValue]);

  const handleResetForm = useCallback(() => {
    reset();
    setProductId("");
    setLoading(false);
  }, [reset]);

  const [updateProduct] = useUpdateProductByIdMutation();

  const handleEditProduct: SubmitHandler<ProductProps> = useCallback(
    async product => {
      setLoading(true);
      const newProduct = {
        id: productId,
        name: product.name,
        descriprion: product.description,
        price: product.price,
        sellPrice: product.sellPrice,
        quantity: product.quantity,
      };

      try {
        if (!productId) {
          throw new CustomError("Selecione um producto para excluir");
        }

        await updateProduct({
          variables: newProduct,
        });
        toast.success("Produto atualizado com sucesso!");
      } catch (error) {
        toast.error("Erro ao atualizar prduto!");
      } finally {
        handleResetForm();
      }
    },
    [handleResetForm, productId, updateProduct]
  );

  const [removeProduct] = useRemoveProductByIdMutation();
  const handleRemoveProduct = useCallback(async () => {
    setLoading(true);
    try {
      if (!productId) {
        throw new CustomError("Selecione um producto para excluir");
      }
      await removeProduct({ variables: { id: productId } });
    } catch (error) {
      const err = catchError(error);

      toast.error(String(err?.message));
    } finally {
      handleResetForm();
    }
  }, [handleResetForm, productId, removeProduct]);

  return (
    <>
      <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
        <div className="flex md:w-[900px] mx-auto flex-row px-1 md:p-4">
          <ProductSidebar />
          <main className="w-full bg-gray-200">
            <SearchProduct setSearchData={handleSetProduct} />

            <div className="h-[100vh] md:h-[40rem]">
              <div className="p-8">
                <div>
                  <Header title="Adicionar produto" loading={loading} />
                </div>
                <form
                  className="mt-8 flex flex-col gap-4"
                  onSubmit={handleSubmit(handleEditProduct)}
                >
                  <Input
                    {...register("name")}
                    error={errors.name}
                    name="name"
                    label="Nome"
                    type="text"
                    placeholder="Nome do produto"
                    className="input input-text"
                  />

                  <Input
                    {...register("description")}
                    error={errors.description}
                    name="description"
                    label="Descrição"
                    type="text"
                    placeholder="Descrição do produto"
                    className="input input-text"
                  />

                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-[2.41rem] left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400 text-xs font-bold">
                        R$
                      </span>
                    </div>
                    <Input
                      {...register("price")}
                      error={errors.price}
                      name="price"
                      label="Valor unitário"
                      type="number"
                      placeholder="0,00"
                      className="input input-price"
                      step="0.01"
                      min="0"
                    />
                  </div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-[2.41rem] left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400 text-xs font-bold">
                        R$
                      </span>
                    </div>
                    <Input
                      {...register("sellPrice")}
                      error={errors.sellPrice}
                      name="sellPrice"
                      label="Preço de venda"
                      type="number"
                      placeholder="19,90"
                      className="input input-price"
                      step="0.01"
                      min="0"
                    />
                  </div>
                  <Input
                    {...register("quantity")}
                    error={errors.quantity}
                    name="quantity"
                    label="Pares ou unidades em estoque"
                    type="number"
                    placeholder="10"
                    className="input input-text"
                  />
                  <div className="flex flex-col md:flex-row  gap-2  md:gap-8 mt-1 md:mt-4">
                    <Button
                      className="btn btn-primary btn-sm w-28"
                      type="submit"
                      disabled={loading}
                    >
                      Editar produto
                    </Button>

                    <Button
                      type="button"
                      onClick={handleResetForm}
                      className="btn btn-outline btn-sm w-28"
                    >
                      Cancelar
                    </Button>

                    <Button
                      type="button"
                      onClick={handleRemoveProduct}
                      className={classNames("btn btn-outline btn-sm w-28", {})}
                    >
                      Excluir produto
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default EditProduct;
