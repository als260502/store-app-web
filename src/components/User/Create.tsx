import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateStoreUserMutation } from "../../graphql/generated";

import toast, { Toaster } from "react-hot-toast";

interface CreateUserFormData {
  name: string;
  surname: string;
  nickname: string;
  email: string;
  description: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  surname: yup.string().required("Digite seu sobrenome"),
  nickname: yup.string(),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  description: yup.string(),
});

export const CreateComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const [createStoreUser, { loading }] = useCreateStoreUserMutation();

  const handleCreateUser: SubmitHandler<
    CreateUserFormData
  > = async formData => {
    try {
      await createStoreUser({
        variables: formData,
      });

      toast.success("Cadastrado com sucesso");
      reset();
    } catch (e) {
      toast.error("Erro: email já cadastrado.");
    }
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <>
      <div className="bg-gray-200 sm:h-full">
        <div className="p-8">
          <div className="font-medium lg:text-2xl md:text-xl">
            Adicionar novo usuario
          </div>

          <form
            className=" pt-8 flex flex-col gap-4"
            action=""
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <div className=" w-[450px] flex gap-4 flex-col sm:gap-4 md:gap-4 lg:flex-row ">
              <Input
                {...register("name")}
                error={errors.name}
                name="name"
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
              />
              <Input
                {...register("surname")}
                error={errors.surname}
                name="surname"
                label="Sobrenome"
                placeholder="Digite seu sobrenome"
              />
            </div>

            <div className=" w-[450px]">
              <Input
                {...register("nickname")}
                error={errors.nickname}
                name="nickname"
                label="Apelido"
                placeholder="Digite um apelido "
              />
            </div>

            <div className="w-[450px]">
              <Input
                {...register("email")}
                error={errors.email}
                name="email"
                label="E-mail"
                type="email"
                placeholder="Digite o email"
              />
            </div>

            <div className="w-[450px]">
              <Input
                {...register("description")}
                error={errors.description}
                name="description"
                label="Referência"
                placeholder="Digite uma referência do trabalho ou etc..."
              />
            </div>
            <div className="flex flex-row gap-6 items-center w-full mt-4 ">
              <Button
                className="btn btn-primary btn-sm md:btn-md"
                type="submit"
              >
                Salvar
              </Button>
              <Button
                onClick={handleCancel}
                className="btn btn-outline  btn-sm md:btn-md"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
