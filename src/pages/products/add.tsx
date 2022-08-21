import { SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";

import { Toaster } from "react-hot-toast";
import { Button } from "../../components/Button";
import { Select } from "../../components/FormComponents/Select";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  useGetCategoriesQuery,
  useGetColorVariantQuery,
  useGetSizeVariantQuery,
} from "../../graphql/generated";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProduct } from "../../context/ProductContext";
import { useRouter } from "next/router";
import { Browsers, CircleNotch, Palette, TShirt } from "phosphor-react";
import { Search } from "../../components/Search";
import { useEffect } from "react";
import { SidebarHeader } from "../../components/Sidebar/LinkHeader";
import { SidebarLink } from "../../components/Sidebar/SidebarLink";

type AddFormData = {
  category: string;
  color: string;
  size: string;
};

const createProductFormSchema = yup.object().shape({
  category: yup
    .string()
    .not(["Selecione"], "Selecione uma categoria")
    .required("selecione uma categoria"),
  color: yup
    .string()
    .not(["Selecione"], "Selecione um tamanho")
    .required("selecione uma cor"),
  size: yup
    .string()
    .not(["Selecione"], "Selecione uma cor")
    .required("selecione um tamanho"),
});

const Add = () => {
  const { product, populateProduct, loading } = useProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddFormData>({
    resolver: yupResolver(createProductFormSchema),
  });

  const navigation = useRouter();

  const { data: colorData, refetch: refetchColor } = useGetColorVariantQuery();
  const { data: sizeData, refetch: refetchSize } = useGetSizeVariantQuery();
  const { data: categoryData, refetch: refetchCategory } =
    useGetCategoriesQuery();

  useEffect(() => {
    refetchColor();
    refetchSize();
    refetchCategory();
  }, [refetchCategory, refetchColor, refetchSize]);

  const handleAddProduct: SubmitHandler<AddFormData> = async values => {
    const newProduct = {
      ...product,
      categories: values.category,
      color: values.color,
      size: values.size,
    };

    await populateProduct(newProduct);

    navigation.push("/products/create");
  };

  return (
    <>
      {!colorData || !sizeData ? (
        <div className="flex w-[100vw] h-[100vh] text-gray-400 bg-gray-800 items-center justify-center">
          <CircleNotch size={24} className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="w-full h-full items-center mt-20 justify-center ">
            <div className="flex w-[900px] mx-auto flex-row p-4">
              <Sidebar>
                <SidebarHeader header="Produtos">
                  <SidebarLink
                    linkUrl="/categories/create"
                    linkName="Categoria"
                    icon={<Browsers size={18} />}
                  />
                  <SidebarLink
                    linkUrl="/variants/create"
                    linkName="Cor|Tamanho"
                    icon={<Palette size={18} />}
                  />
                  <SidebarLink
                    linkUrl="/products/add"
                    linkName="Novo produto"
                    icon={<TShirt size={18} />}
                  />

                  <SidebarLink
                    linkName={"Cadastros"}
                    linkUrl={"/users/create"}
                  />
                  <SidebarLink
                    linkName={"Pedidos"}
                    linkUrl={"/orders/create"}
                  />
                </SidebarHeader>
              </Sidebar>

              <main className="w-full h-full min-w-[600px]">
                <Search />
                <div className="bg-gray-200 min-h-[60vh] ">
                  <div className="p-8">
                    <div>
                      <Header
                        title="Selecione Categoria, Cor e Tamanho"
                        loading={loading}
                      />
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
                      options={categoryData?.categories}
                      className="input"
                    />

                    <Select
                      {...register("size")}
                      error={errors.size}
                      label="Tamanho"
                      name="size"
                      options={sizeData?.productSizeVariants}
                      className="input"
                    />

                    <Select
                      {...register("color")}
                      error={errors.color}
                      label="Cor"
                      name="color"
                      options={colorData.productColorVariants}
                      className="input"
                    />

                    <Button
                      disabled={loading}
                      type="submit"
                      className="btn btn-primary btn-md"
                    >
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
