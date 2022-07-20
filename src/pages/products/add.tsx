import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Select } from "../../components/FormComponents/Select";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {
  useGetCategoriesQuery,
  useGetProductVariantsQuery,
} from "../../graphql/generated";

type Props = {
  id: string;
  name: string;
};

const Add = () => {
  const [variant, setVariant] = useState<Props[]>();
  const [category, setCategory] = useState<Props[]>();

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

  return (
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
              <div className="px-8 flex flex-col gap-4">
                <Select
                  label="Categoria"
                  name="category"
                  options={category}
                  className="input"
                />

                <Select
                  label="Variante - Cor/Tamanho"
                  name="variant"
                  options={variant}
                  className="input"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Add;
