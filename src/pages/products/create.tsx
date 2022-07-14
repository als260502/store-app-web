import { NextPage } from "next";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "../../components/FormComponents/Input";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Select } from "../../components/FormComponents/Select";

interface CreateProductFormData {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}

const createProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Decrição obrigatória"),
  price: yup.number().required("Preço do produto e obrigatorio"),
  quantity: yup.number().required("Informe a quantidade em estoque"),
  category: yup.string().required("Informe a categoria"),
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

  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar />

        <main className="h-full w-full w-min[600px]">
          <Search />
          <div className="bg-gray-200 h-full">
            <div className="p-8">
              <Header title="Novo produto" />
              <form className="mt-8 w-[550px] flex flex-col gap-4" action="#">
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
                  error={errors.price}
                  name="quantity"
                  label="Quantidade de pares ou unidades"
                  type="number"
                  placeholder="10"
                  className="input input-text"
                />
                <Select
                  {...register("category")}
                  error={errors.category}
                  label="Categoria"
                  options={["Tenis", "Camisetas"]}
                  className="input"
                />
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Create;
