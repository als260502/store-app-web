import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";

import { Toaster } from "react-hot-toast";
import { Button } from "../../components/Button";
import { Select } from "../../components/FormComponents/Select";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  useGetCategoriesQuery,
  useGetProductVariantsQuery,
} from "../../graphql/generated";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProduct } from "../../context/ProductContext";
import { useRouter } from "next/router";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { CircleNotch } from "phosphor-react";

type Props = {
  id: string;
  name: string;
};

type AddFormData = {
  category: string;
  variant: string;
};

const createProductFormSchema = yup.object().shape({
  category: yup.string().required("selecione uma categoria"),
  variant: yup.string().required("selecione uma variante"),
});

const Add = () => {
  const { addProductCategoryVariant } = useProduct();
  const [variant, setVariant] = useState<Props[]>();
  const [category, setCategory] = useState<Props[]>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddFormData>({
    resolver: yupResolver(createProductFormSchema),
  });

  const navigation = useRouter();

  const { data: variantData } = useGetProductVariantsQuery();
  const { data: categoryData } = useGetCategoriesQuery();

  useEffect(() => {
    if (variantData?.productSizeColorVariants) {
      setVariant(variantData.productSizeColorVariants);
    }

    if (categoryData?.categories) {
      setCategory(categoryData.categories);
    }
  }, [categoryData?.categories, variantData?.productSizeColorVariants]);

  const handleAddProduct: SubmitHandler<AddFormData> = values => {
    addProductCategoryVariant(values);
    navigation.push("/products/create");
  };

  return (
    <>
      {!variantData || !categoryData ? (
        <div className="flex w-[100vw] h-[100vh] text-gray-400 bg-gray-800 items-center justify-center">
          <CircleNotch size={24} className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="w-full h-full items-center mt-20 justify-center ">
            <div className="flex w-[900px] mx-auto flex-row p-4">
              <Sidebar />

              <main className="w-full h-full min-w-[600px]">
                <div className="bg-gray-200 min-h-[60vh] ">
                  <div className="p-8">
                    <div>
                      <Header title="Selecione Categoria, Cor e Tamanho" />
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(handleAddProduct)}
                    className="px-8 flex flex-col gap-4"
                  >
                    <Select
                      {...register("category")}
                      error={errors.category}
                      label="Categoria"
                      name="category"
                      options={category}
                      className="input"
                    />

                    <Select
                      {...register("variant")}
                      error={errors.variant}
                      label="Variante - Cor/Tamanho"
                      name="variant"
                      options={variant}
                      className="input"
                    />

                    <Button type="submit" className="btn btn-primary btn-md">
                      Próximo
                    </Button>
                  </form>
                </div>
              </main>
            </div>
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </>
      )}
    </>
  );
};

export default Add;
