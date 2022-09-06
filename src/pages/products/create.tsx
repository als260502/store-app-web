import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useProduct, ProductProps } from "../../context/ProductContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../components/FormComponents/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import {
  GetCategoriesQuery,
  GetColorVariantQuery,
  GetSizeVariantQuery,
  useGetCategoriesLazyQuery,
  useGetColorVariantLazyQuery,
  useGetSizeVariantLazyQuery,
} from "../../graphql/generated";
import { ProductSidebar } from "../../components/Sidebar/product";
import { Select } from "../../components/FormComponents/Select";
import { Search } from "../../components/Search";

const createProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  price: yup.string().required("Preço do produto é obrigatório"),
  sellPrice: yup.string().required("Preço de venda do produto é obrigatório"),
  quantity: yup.string().required("Informe a quantidade em estoque"),
  categories: yup.string().not(["Selecione"], "selecione uma categoria"),
  size: yup.string().not(["Selecione"], "selecione um tamanho"),
  color: yup.string().not(["Selecione"], "selecione uma cor"),
});
const Create: NextPage = () => {
  const { addProduct, loading } = useProduct();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductProps>({
    resolver: yupResolver(createProductFormSchema),
  });

  const [categories, setCategories] = useState<GetCategoriesQuery>();
  const [size, setSize] = useState<GetSizeVariantQuery>();
  const [color, setColor] = useState<GetColorVariantQuery>();

  const [, { refetch: getCategories }] = useGetCategoriesLazyQuery();

  const [, { refetch: getSize }] = useGetSizeVariantLazyQuery();

  const [, { refetch: getColor }] = useGetColorVariantLazyQuery();

  useEffect(() => {
    const getVaraints = async () => {
      const responseColor = await getColor();
      const responseSize = await getSize();
      const responseCategories = await getCategories();

      setColor(responseColor.data);
      setSize(responseSize.data);
      setCategories(responseCategories.data);
    };

    getVaraints();
  }, [getCategories, getColor, getSize]);

  const navigation = useRouter();

  const handleResetForm = useCallback(() => {
    reset({
      name: "",
      description: "",
      quantity: parseInt(""),
      price: parseInt(""),
      sellPrice: parseInt(""),
    });
  }, [reset]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  const handleCreateProduct: SubmitHandler<ProductProps> = useCallback(
    async values => {
      const newProduct = {
        name: values.name,
        slug: "",
        description: values.description,
        price: values.price,
        sellPrice: values.sellPrice,
        quantity: values.quantity,
        categories: values.categories,
        color: values.color,
        size: values.size,
      };

      try {
        await addProduct(newProduct);

        handleResetForm();

        return;
      } catch (error) {
        console.error("erro ao adicionar produto", error);
      }
    },
    [addProduct, handleResetForm]
  );

  const handleGoBack = () => {
    navigation.back();
  };

  return (
    <>
      <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
        <div className="flex md:w-[900px] mx-auto flex-row px-1 md:p-4">
          <ProductSidebar />
          <main className="w-full ">
            <Search />
            <div className="bg-gray-200 h-[100vh] md:h-[40rem]">
              <div className="p-8">
                <div>
                  <Header title="Adicionar produto" loading={loading} />
                </div>
                <form
                  className="mt-8  flex flex-col gap-4"
                  onSubmit={handleSubmit(handleCreateProduct)}
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
                      <span className="text-gray-500 sm:text-sm">R$</span>
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
                      <span className="text-gray-500 sm:text-sm">R$</span>
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
                    label="Quantidade de pares ou unidades"
                    type="number"
                    placeholder="10"
                    className="input input-text"
                  />
                  <div>
                    <div className="flex flex-col md:flex-row md:gap-4  ">
                      <Select
                        {...register("categories")}
                        error={errors.categories}
                        name="categories"
                        label="Categoria"
                        className="input "
                        options={categories?.categories}
                      />
                      <Select
                        {...register("size")}
                        error={errors.size}
                        name="size"
                        label="Tamanho"
                        className="input "
                        options={size?.productSizeVariants}
                      />
                      <Select
                        {...register("color")}
                        error={errors.color}
                        name="color"
                        label="Cor"
                        className="input "
                        options={color?.productColorVariants}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row  gap-4 md:gap-8 mt-4">
                    <Button
                      className="btn btn-primary btn-md w-20 md:w-24"
                      type="submit"
                      disabled={loading}
                    >
                      Adicionar
                    </Button>

                    <Button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-outline btn-sm w-20 md:w-24"
                    >
                      Cancelar
                    </Button>

                    <Button
                      type="button"
                      onClick={handleGoBack}
                      className="btn btn-outline btn-sm w-20 md:w-24"
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
