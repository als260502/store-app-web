import { NextPage } from "next";

import toast, { Toaster } from "react-hot-toast";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateCategoryMutation } from "../../graphql/generated";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Input } from "../../components/FormComponents/Input";
import { formatSlug } from "../../utils/formatSlug";
import { ProductSidebar } from "../../components/Sidebar/product";

const createCategoryFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
});

type Props = {
  name: string;
  description: string;
};

const Create: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Props>({
    resolver: yupResolver(createCategoryFormSchema),
  });

  const [createCategory, { loading }] = useCreateCategoryMutation();

  const handleCreateCategory: SubmitHandler<Props> = async values => {
    const newCategory = {
      ...values,
      slug: formatSlug(values.name),
    };

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
    }
  };

  const handleReset = () => {
    reset();
  };
  return (
    <>
      <div className="w-full h-full items-center mt-20 justify-center ">
        <div className="flex w-[900px] mx-auto flex-row p-4">
          <ProductSidebar />

          <main className="w-full h-full min-w-[600px]">
            <Search />
            <div className="bg-gray-200 min-h-[65vh] ">
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
