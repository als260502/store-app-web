import { NextPage } from "next";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../../components/FormComponents/Input";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import { useCallback } from "react";
import { useCreateProductMutation } from "../../graphql/generated";
import { Button } from "../../components/Button";

import toast, { Toaster } from "react-hot-toast";

interface CreateProductFormData {
  name: string;
  description: string;
  price: string;
  quantity: string;
}

const createProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Decrição obrigatória"),
  price: yup.string().required("Preço do produto e obrigatorio"),
  quantity: yup.string().required("Informe a quantidade em estoque"),
});

const Create: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: yupResolver(createProductFormSchema),
  });
  const handleResetForm = useCallback(() => {
    reset();
  }, [reset]);

  const [createProduct, { loading }] = useCreateProductMutation();

  const handleCreateProduct: SubmitHandler<
    CreateProductFormData
  > = async values => {
    try {
      const formatedSlug = values.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "-")
        .toLocaleLowerCase();

      const formatedPrice = parseFloat(values.price);
      const formatedQtd = parseInt(values.quantity);

      const formData = {
        ...values,
        slug: formatedSlug,
        price: formatedPrice,
        quantity: formatedQtd,
      };

      const result = await createProduct({
        variables: formData,
      });

      toast.success("Sucesso:\nProduto cadastrado com sucesso!", {
        duration: 6000,
        icon: "👍",
      });
      console.log(result);
    } catch (error) {
      console.log(error);
      toast.success("Erro:\nErro ao cadastrar produto!", {
        duration: 6000,
        icon: "😒",
      });
    }
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
                  <Header title="Novo produto" loading={loading} />
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
                    placeholder="tenis nike air max"
                    className="input input-text"
                  />

                  <Input
                    {...register("description")}
                    error={errors.description}
                    name="description"
                    label="Descrição"
                    type="text"
                    placeholder="calçado leve e confortavel"
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
                      disabled={loading}
                      className="btn btn-primary btn-md "
                      type="submit"
                    >
                      Adicionar categoria
                    </Button>

                    <Button
                      type="button"
                      onClick={handleResetForm}
                      className="btn btn-outline btn-sm w-36"
                      disabled={loading}
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
