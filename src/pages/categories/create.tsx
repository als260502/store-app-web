import { NextPage } from "next";

import toast, { Toaster } from "react-hot-toast";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useRemoveCategoryMutation,
} from "../../graphql/generated";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Input } from "../../components/FormComponents/Input";
import { formatSlug } from "../../utils/formatSlug";
import { ProductSidebar } from "../../components/Sidebar/product";
import { useCallback, useRef, useState } from "react";

const createCategoryFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
});

type Props = {
  name: string;
  description: string;
};

const Create: NextPage = () => {
  const [isRemovingCategory, setIsRemovingCategory] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Props>({
    resolver: yupResolver(createCategoryFormSchema),
  });

  const [createCategory] = useCreateCategoryMutation();
  const { data, refetch } = useGetCategoriesQuery();

  const handleCreateCategory: SubmitHandler<Props> = async values => {
    const newCategory = {
      ...values,
      slug: formatSlug(values.name),
    };

    setLoading(loading => !loading);

    try {
      const response = await createCategory({
        variables: newCategory,
      });
      toast.success("Sucesso:\nNova categoria cadastrada com sucesso!", {
        duration: 6000,
        icon: "👍",
      });

      reset();
      return response.data;
    } catch (error) {
      toast.error(
        "Erro:\nErro ao cadastrar categoria,\nCategoria já cadastrada",
        {
          duration: 6000,
          icon: "😒",
        }
      );
    } finally {
      setLoading(loading => !loading);
    }
  };

  const [deleteCategory] = useRemoveCategoryMutation();
  const handleRemoveCaregory = useCallback(async () => {
    setLoading(loading => !loading);
    try {
      console.log(String(selectRef.current?.value));
      await deleteCategory({
        variables: {
          id: String(selectRef.current?.value),
        },
      });
      toast.success("Categoria removida com sucesso!");
      refetch();
    } catch (error) {
      console.error("erro ao remover categoria", error);
    } finally {
      setLoading(loading => !loading);
    }
  }, [deleteCategory, refetch]);

  const handleReset = () => {
    reset();
  };
  return (
    <>
      <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
        <div className="flex md:w-[900px] mx-auto flex-row px-1 md:p-4">
          <ProductSidebar />

          <main className="w-full">
            <Search />
            <div className="bg-gray-200  h-[100vh] md:h-[40rem] ">
              <div className="p-8">
                <div>
                  <Header title="Categoria" loading={loading} />
                </div>
              </div>
              <div className="px-8 flex flex-col gap-4">
                <form
                  onSubmit={handleSubmit(handleCreateCategory)}
                  className="mt=4 flex flex-col gap-2"
                >
                  <Input
                    {...register("name")}
                    error={errors.name}
                    name="name"
                    label="Nome"
                    type="text"
                    placeholder="Nome da categoria"
                    className="input input-text"
                  />
                  <Input
                    {...register("description")}
                    error={errors.description}
                    name="description"
                    label="Descrição"
                    type="text"
                    placeholder="Descrição da categoria"
                    className="input input-text"
                  />
                  <div className="flex gap-8 mt-4">
                    <Button
                      type="submit"
                      className="btn btn-primary btn-md w-24"
                      disabled={loading}
                    >
                      Adicionar
                    </Button>

                    <Button
                      type="submit"
                      className="btn btn-outline btn-md w-24"
                      onClick={handleReset}
                      disabled={loading}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
                <div className="mt-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="text-2xl w-4 h-4 "
                      onChange={() =>
                        setIsRemovingCategory(
                          isRemovingCategory => !isRemovingCategory
                        )
                      }
                    />
                    <span>Remover categoria</span>
                  </div>
                  {isRemovingCategory && (
                    <>
                      <select
                        className="mt-4
                         rounded-md h-8"
                        ref={selectRef}
                      >
                        {data?.categories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <Button
                        className="btn btn-primary btn-md mt-4 w-24"
                        onClick={handleRemoveCaregory}
                      >
                        Remover
                      </Button>
                    </>
                  )}
                </div>
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
