import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateStoreUserMutation } from "../../graphql/generated";

import toast, { Toaster } from "react-hot-toast";

import { Button } from "../Button";
import { Input } from "../FormComponents/Input";
import { Header } from "../Header";
import { formatTelephone } from "../../utils/formatSlug";

interface CreateUserFormData {
  name: string;
  surname: string;
  phones: string;
  cnpj: string;
  email: string;
  address: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  phones: yup.string().required("Digite pelo menos um telefone"),
  cnpj: yup.string(),
  email: yup.string().email("E-mail inválido"),
  address: yup.string(),
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
      name: formData.name,
      surname: formData.name,
      phones: formatTelephone(formData.phones),
      nickname: formData.cnpj,
      email: formData.email,
      description: formData.address,
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
      <div className="bg-gray-200 min-h-[60vh]">
        <div className="p-8">
          <Header title="Novo Fornecedor" loading={loading} />

          <form
            className="mt-8 flex flex-col gap-4"
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <div className=" w-[450px] flex gap-4 flex-col sm:gap-4 md:gap-4 lg:flex-row ">
              <Input
                {...register("name")}
                error={errors.name}
                name="name"
                label="Nome"
                type="text"
                placeholder="Nome do fornecedor"
                className="input input-text"
              />
            </div>

            <div className=" w-[450px]">
              <Input
                {...register("phones")}
                error={errors.phones}
                name="phones"
                label="Telefones"
                placeholder="2199999999,2126260000"
                className="input input-text"
              />
            </div>

            <div className="w-[450px]">
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
            <div className=" w-[450px]">
              <Input
                {...register("cnpj")}
                error={errors.cnpj}
                name="cnpj"
                label="cnpj/cpf"
                placeholder="Digite  CPF ou CNPJ "
                className="input input-text"
              />
            </div>

            <div className="w-[450px]">
              <Input
                {...register("address")}
                error={errors.address}
                name="address"
                label="Endereço"
                placeholder="Digite um endereço..."
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
