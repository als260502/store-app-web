import { NextPage } from "next";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../../components/FormComponents/Input";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import { useCallback, useState } from "react";
import { Product } from "../../graphql/generated";
import { Button } from "../../components/Button";

import toast, { Toaster } from "react-hot-toast";
import { useProduct } from "../../context/ProductContext";
import { useRouter } from "next/router";

const createProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  price: yup.string().required("Preço do produto e obrigatório"),
  quantity: yup.string().required("Informe a quantidade em estoque"),
});

const Create: NextPage = () => {
  const { addProduct, product } = useProduct();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(createProductFormSchema),
  });

  const navigate = useRouter();

  const handleResetForm = useCallback(() => {
    reset();
  }, [reset]);

  const handleCreateProduct: SubmitHandler<Product> = useCallback(values => {
    const result = addProduct(values);
    navigate.push("/category/create");
    console.log(product);
  }, []);

  return (
    <>
      <div className="w-full h-full items-center mt-20 justify-center ">
        <div className="flex w-[900px] mx-auto flex-row p-4">
          <Sidebar />

          <main className="h-full w-full w-min[600px]">
            <Search />
            <div className="bg-gray-200 h-full">
              <div className="p-8">
                <div>
                  <Header title="Novo produto" />
                </div>
                <form
                  className="mt-8 w-[550px] flex flex-col gap-4"
                  onSubmit={handleSubmit(handleCreateProduct)}
                >
                  <Input
                    {...register("name")}
                    error={errors.name}
                    name="name"
                    label="Nome"
                    type="text"
                    placeholder="Nike Air Max"
                    className="input input-text"
                  />

                  <Input
                    {...register("description")}
                    error={errors.description}
                    name="description"
                    label="Descrição"
                    type="text"
                    placeholder="Calçado leve e confortável"
                    className="input input-text"
                  />

                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-[2.41rem] left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">R$</span>
                    </div>
                    <Input
                      {...register("price")}
                      error={errors.price}
                      name="price"
                      label="Valor unitário"
                      type="text"
                      placeholder="0,00"
                      className="input input-price"
                    />
                  </div>
                  <Input
                    {...register("quantity")}
                    error={errors.quantity}
                    name="quantity"
                    label="Quantidade de pares ou unidades"
                    type="number"
                    placeholder="10"
                    className="input input-text"
                  />
                  <div className="flex flex-row gap-8 mt-4">
                    <Button
                      className="btn btn-primary btn-md w-24 "
                      type="submit"
                    >
                      Próximo
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

export default Create;
