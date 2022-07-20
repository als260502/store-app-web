import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { Select } from "../../components/FormComponents/Select";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  useCreateColorVariantMutation,
  useCreateProductVariantMutation,
  useGetColorVariantQuery,
  useGetSizeVariantQuery,
} from "../../graphql/generated";
import { Input } from "../../components/FormComponents/Input";
import { Button } from "../../components/Button";
import { formatVariantName } from "../../utils/formatSlug";

type Option = {
  id: string;
  name: string;
};

type FormData = {
  name: string;
  color: string;
  size: string;
};

const createVariantFormSchema = yup.object().shape({
  color: yup.string().required("Nome da cor é obigatório"),
  size: yup.string().required("Tamanho é obigatório"),
});

const Create: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(createVariantFormSchema),
  });

  const [createProductVariant, { loading }] = useCreateProductVariantMutation();

  const handleProductVariant: SubmitHandler<FormData> = useCallback(
    async values => {
      try {
        const newProductVariant = {
          name: `${formatVariantName(values.color)}-${values.size}`,
          color: values.color,
          size: values.size,
        };

        await createProductVariant({
          variables: newProductVariant,
        });

        toast.success("Nova variante cadastrada com sucesso!");
        reset();
      } catch (error) {
        console.log(error);
        toast.error(`Variante entre Cor|Tamanho ja existe no sistema`);
      }
    },
    [createProductVariant]
  );

  return (
    <>
      <div className="w-full h-full items-center mt-20 justify-center ">
        <div className="flex w-[900px] mx-auto flex-row p-4">
          <Sidebar />

          <main className="w-full h-full min-w-[600px]">
            <div className="bg-gray-200 min-h-[60vh] ">
              <div className="p-8">
                <div>
                  <Header title="Variantes - Cor/Tamanho " loading={loading} />
                </div>
              </div>
              <div className="px-8 flex flex-col gap-4">
                {/* <div className="flex flex-row gap-4">
                  <Select
                    label="Cor"
                    name="colorVariant"
                    options={color}
                    className="input"
                  />

                  <Select
                    label="Tamanho"
                    name="sizeVariant"
                    options={size}
                    className="input"
                  />
                </div> */}

                <form
                  onSubmit={handleSubmit(handleProductVariant)}
                  className="mt=4 flex flex-col gap-4"
                >
                  <Input
                    {...register("color")}
                    error={errors.color}
                    name="color"
                    type="text"
                    placeholder="Azul Escuro"
                    className="input input-text"
                  />

                  <Input
                    {...register("size")}
                    error={errors.size}
                    name="size"
                    type="text"
                    placeholder="38, ou GG, ou ExtraGGG"
                    className="input input-text"
                  />

                  <Button
                    type="submit"
                    className="btn btn-primary btn-md "
                    disabled={loading}
                  >
                    Adicionar
                  </Button>
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
