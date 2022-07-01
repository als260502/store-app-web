import { Input } from "../Input";
import { Input as InputForm } from "../Input/Input";

import { Button } from "../Button";

export const CreateComponent = () => {
  return (
    <div className="bg-gray-200 h-[800px] max-h-[60vh]">
      <div className="p-8">
        <div className="font-medium lg:text-2xl md:text-xl">
          Adicionar novo usuario
        </div>

        <form className="pt-8 flex flex-col lg:gap-8 md:gap-4" action="">
          <div className="flex lg:flex-row md:flex-col sm:flex-col lg:w-[600px] md:w-[400px] md:gap-4 justify-between">
            <Input name="name" label="Nome" placeholder="Digite seu nome" />
            <Input
              name="sobrenome"
              label="Sobrenome"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-row lg:w-[600px] md:w-[400px] justify-between">
            <Input
              name="nickname"
              label="Apelido"
              placeholder="Digite um apelido "
            />
          </div>

          <div className="flex flex-row w-[600px] justify-between">
            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="Digite o email"
            />
          </div>

          <div className="flex flex-row w-[600px] justify-between">
            <Input
              name="description"
              label="Referência"
              placeholder="Digite uma referência do trabalho ou etc..."
            />
          </div>
          <div className="flex flex-row gap-6 items-center w-full mt-4 ">
            <Button className="btn btn-primary ">Salvar</Button>
            <Button className="btn btn-primary btn-outline">Cancelar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
