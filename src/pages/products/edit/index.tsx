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
import { useCallback, useState } from "react";
import { ProductSidebar } from "../../../components/Sidebar/product";
import {
  useUpdateOrderByIdMutation,
  useUpdateProductByIdMutation,
} from "../../../graphql/generated";

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

const Edit: NextPage = () => {
  const [productId, setProductId] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProductProps>({
    resolver: yupResolver(createProductFormSchema),
  });

  const handleResetForm = () => {
    reset();
  };

  const [updateProduct, { loading }] = useUpdateProductByIdMutation();

  const handleEditProduct: SubmitHandler<ProductProps> = useCallback(
    async product => {
      const newProduct = {
        id: productId,
        name: product.name,
        descriprion: product.description,
        price: product.price,
        sellPrice: product.sellPrice,
        quantity: product.quantity,
      };

      try {
        await updateProduct({
          variables: newProduct,
        });
        toast.success("Produto atualizado com sucesso!");
      } catch (error) {
        toast.error("Erro ao atualizar prduto!");
      }
    },
    [productId, updateProduct]
  );

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

  return (
    <>
      <div className="w-full h-full items-center mt-20 justify-center ">
        <div className="flex w-[900px] mx-auto flex-row p-4">
          <ProductSidebar />

          <main className="h-full w-full w-min[600px]">
            <SearchProduct setSearchData={handleSetProduct} />
            <div className="bg-gray-200 min-h-[65vh]">
              <div className="p-8">
                <div>
                  <Header title="Adicionar produto" loading={loading} />
                </div>
                <form
                  className="mt-8 w-[550px] flex flex-col gap-4"
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
                  <div className="flex flex-row gap-8 mt-4">
                    <Button
                      className="btn btn-primary btn-md w-24 "
                      type="submit"
                      disabled={loading}
                    >
                      Atualizar
                    </Button>

                    <Button
                      type="button"
                      onClick={handleResetForm}
                      className="btn btn-outline btn-sm w-24"
                    >
                      Cancelar
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

export default Edit;
