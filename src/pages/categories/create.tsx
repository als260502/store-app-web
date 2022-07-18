import { NextPage } from "next";
import { useProduct } from "../../context/ProductContext";
import { Toaster } from "react-hot-toast";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { Product } from "../../graphql/generated";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Sidebar } from "../../components/Sidebar";
import { Select } from "../../components/FormComponents/Select";

const createCategoryFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
});

const Create: NextPage = () => {
  const { addProduct, product } = useProduct();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(createCategoryFormSchema),
  });

  const handleCreateCategory = () => {};
  return (
    <>
      <div className="w-full h-full items-center mt-20 justify-center ">
        <div className="flex w-[900px] mx-auto flex-row p-4">
          <Sidebar />

          <main className="w-full h-full min-w-[600px]">
            <Search />
            <div className="bg-gray-200 min-h-[60vh] ">
              <div className="p-8">
                <div>
                  <Header title="Categoria" />
                </div>
              </div>

              <div className="px-8">
                <select
                  className="input focus:outline-0 selection:rig-none"
                  name="category"
                >
                  <option>Camisetas</option>
                  <option>Calçados</option>
                </select>
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
