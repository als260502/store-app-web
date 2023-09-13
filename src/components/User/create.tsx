import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateStoreUserMutation } from "../../graphql/generated";

import toast, { Toaster } from "react-hot-toast";

import { Button } from "../Button";
import { Input } from "../FormComponents/Input";
import { Header } from "../Header";
import { formatTelephone } from "../../utils/formatSlug";
import { generateEmail } from "@utils/generateEmail";

interface CreateUserFormData {
  name: string;
  surname: string;
  phones: string;
  nickname: string;
  email: string;
  description: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  surname: yup.string().required("Sobrenome obrigatório"),
  phones: yup.string().required("Digite pelo menos um telefone"),
  nickname: yup.string(),
  email: yup.string().email("E-mail inválido"),
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
    const data = {
      ...formData,
      phones: formatTelephone(formData.phones),
      email: formData.email === "" ? generateEmail(formData) : formData.email,
    };

    try {
      await createStoreUser({
        variables: data,
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
      <div className="bg-gray-200 h-[100vh] md:h-[40rem]">
        <div className="p-8">
          <Header title="Novo usuário" loading={loading} />

          <form
            className="mt-8 flex flex-col gap-4"
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <div className="md:w-[450px] flex gap-4 flex-col sm:gap-4 md:gap-4 lg:flex-row ">
              <Input
                {...register("name")}
                error={errors.name}
                name="name"
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
                className="input input-text"
              />
              <Input
                {...register("surname")}
                error={errors.surname}
                name="surname"
                label="Sobrenome"
                placeholder="Digite seu sobrenome"
                className="input input-text"
              />
            </div>

            <div className="md:w-[450px]">
              <Input
                {...register("phones")}
                error={errors.phones}
                name="phones"
                label="Telefones"
                placeholder="2199999999,2126260000"
                className="input input-text"
              />
            </div>

            <div className="md:w-[450px]">
              <Input
                {...register("email")}
                error={errors.email}
                name="email"
                label="E-mail"
                type="email"
                className="input input-text"
                placeholder="Digite o email"
              />
            </div>
            <div className="md:w-[450px]">
              <Input
                {...register("nickname")}
                error={errors.nickname}
                name="nickname"
                label="Apelido"
                placeholder="Digite um apelido "
                className="input input-text"
              />
            </div>

            <div className="md:w-[450px]">
              <Input
                {...register("description")}
                error={errors.description}
                name="description"
                label="Referência"
                placeholder="Digite uma referência do trabalho ou etc..."
                className="input input-text"
              />
            </div>
            <div className="flex flex-row gap-6 items-center w-full mt-4 ">
              <Button
                disabled={loading}
                className="btn btn-primary btn-sm md:btn-md w-24"
                type="submit"
              >
                Salvar
              </Button>
              <Button
                onClick={handleCancel}
                loading={loading}
                className="btn btn-outline btn-sm md:btn-md w-24"
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
