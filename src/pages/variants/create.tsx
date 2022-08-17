import { useCallback } from "react";
import { NextPage } from "next";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  useGetColorVariantQuery,
  useGetSizeVariantQuery,
} from "../../graphql/generated";
import { Input } from "../../components/FormComponents/Input";
import { Button } from "../../components/Button";

import { useProduct } from "../../context/ProductContext";
import { Search } from "../../components/Search";

type FormData = {
  color: string;
  size: string;
};

const createVariantFormSchema = yup.object().shape({
  color: yup.string().required("Nome da cor é obrigatório"),
  size: yup.string().required("Tamanho é obrigatório"),
});

const Create: NextPage = () => {
  const { addProductColor, addProductSize, loading } = useProduct();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(createVariantFormSchema),
  });

  const { data: color, refetch: refetchColor } = useGetColorVariantQuery();
  const { data: size, refetch: refetchSize } = useGetSizeVariantQuery();

  const handleProductVariant: SubmitHandler<FormData> = useCallback(
    async values => {
      try {
        const hasColor = color?.productColorVariants.some(c =>
          c.name.includes(values.color)
        );

        const hasSize = size?.productSizeVariants.some(s =>
          s.name.includes(values.size)
        );

        if (!hasColor) {
          await addProductColor(values.color);
        }

        if (!hasSize) {
          await addProductSize(values.size);
        }

        toast.success("Nova variante cadastrada com sucesso!");
        refetchColor();
        refetchSize();
        reset();
      } catch (error) {
        toast.error("Erro:\n Cor e ou Tamanho ja existem em nosso sistema");
      }
    },
    [
      addProductColor,
      addProductSize,
      color?.productColorVariants,
      refetchColor,
      refetchSize,
      reset,
      size?.productSizeVariants,
    ]
  );

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
                  <Header title="Variantes - Cor/Tamanho " loading={loading} />
                </div>
              </div>
              <div className="px-8 flex flex-col gap-4">
                <form
                  onSubmit={handleSubmit(handleProductVariant)}
                  className="mt=4 flex flex-col gap-4"
                >
                  <Input
                    {...register("color")}
                    error={errors.color}
                    name="color"
                    label="Cor"
                    type="text"
                    placeholder="Azul Escuro"
                    className="input input-text"
                  />

                  <Input
                    {...register("size")}
                    error={errors.size}
                    name="size"
                    label="Tamanho"
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
