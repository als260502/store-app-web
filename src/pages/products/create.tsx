import { NextPage } from "next";
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useProduct, ProductProps } from "../../context/ProductContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CircleNotch } from "phosphor-react";

import { Input } from "../../components/FormComponents/Input";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import {
  useGetCategoryByIdQuery,
  useGetColorByIdQuery,
  useGetSizeByIdQuery,
} from "../../graphql/generated";

const createProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  price: yup.string().required("Preço do produto e obrigatório"),
  quantity: yup.string().required("Informe a quantidade em estoque"),
});

const Create: NextPage = () => {
  const { addProduct, product, loading } = useProduct();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductProps>({
    resolver: yupResolver(createProductFormSchema),
  });

  const { data: categoryData } = useGetCategoryByIdQuery({
    variables: {
      id: product.categories,
    },
  });

  const { data: sizeData } = useGetSizeByIdQuery({
    variables: {
      id: product.size,
    },
  });

  const { data: colorData } = useGetColorByIdQuery({
    variables: {
      id: product.color,
    },
  });

  const navigation = useRouter();

  const handleResetForm = useCallback(() => {
    reset();
  }, [reset]);

  const handleCreateProduct: SubmitHandler<ProductProps> = useCallback(
    async values => {
      const newProduct = {
        name: values.name,
        slug: "",
        description: values.description,
        price: values.price,
        quantity: values.quantity,
        categories: String(categoryData?.category?.id),
        color: String(colorData?.productColorVariant?.id),
        size: String(sizeData?.productSizeVariant?.id),
      };

      const response = await addProduct(newProduct);

      reset();

      return response;
    },
    [
      addProduct,
      categoryData?.category?.id,
      colorData?.productColorVariant?.id,
      reset,
      sizeData?.productSizeVariant?.id,
    ]
  );

  const handleGoBack = () => {
    navigation.back();
  };

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
                  <Header title="Adicionar produto" loading={loading} />
                  <div className="flex flex-col justify-center  mt-4 px-8 gap-2 font-semibold">
                    <span className="text-gray-500 flex flex-row items-center ">
                      Categoria:
                      {categoryData ? (
                        <strong className="text-gray-900 shadow-sm shadow-blue-200 ml-2">
                          {` ${categoryData?.category?.name}`}
                        </strong>
                      ) : (
                        <CircleNotch size={20} className="animate-spin ml-2" />
                      )}
                    </span>
                    <span className="text-gray-500">
                      Variante:
                      {colorData || sizeData ? (
                        <strong className="text-gray-900 shadow-sm shadow-blue-200">
                          {` ${colorData?.productColorVariant?.name} - ${sizeData?.productSizeVariant?.name}`}
                        </strong>
                      ) : (
                        <CircleNotch size={20} className="animate-spin ml-2" />
                      )}
                    </span>
                  </div>
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
                      disabled={loading}
                    >
                      Adicionar
                    </Button>

                    <Button
                      type="button"
                      onClick={handleResetForm}
                      className="btn btn-outline btn-sm w-24"
                    >
                      Cancelar
                    </Button>

                    <Button
                      type="button"
                      onClick={handleGoBack}
                      className="btn btn-outline btn-sm w-24"
                    >
                      Voltar
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
