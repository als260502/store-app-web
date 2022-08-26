import { useCallback, useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import { Header } from "../../../components/Header";
import { Search } from "../../../components/Search";
import { ProductSidebar } from "../../../components/Sidebar/product";
import { useGetAllProductsLazyQuery } from "../../../graphql/generated";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { Spinner } from "phosphor-react";
import classNames from "classnames";
import { ReportSidebar } from "../../../components/Sidebar/report";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  sellPrice: number;
  slug: string;
  quantity: number;
  description: string;
};

const Inventory: NextPage = () => {
  const [, { refetch: getProducts, loading }] = useGetAllProductsLazyQuery();
  const [products, setProducts] = useState<ProductProps[] | undefined>();

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await getProducts();
      setProducts(response.data?.products);
    };
    getAllProducts();
  }, [getProducts]);

  const formatMonetaryValues = useCallback((value: number) => {
    const formatValue = new Intl.NumberFormat("pt-BT", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return formatValue;
  }, []);

  const quantityRedFlag = (quantity: number) => {
    return quantity < 2 ? true : false;
  };

  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <ReportSidebar />

        <main className="h-full min-h-[65vh] w-full w-min[600px] bg-gray-200">
          <Search />

          <div className="px-8 my-4">
            <Header title="Itens em estoque" />
            <div className="text-gray-400 mt-4">
              <div className="grid grid-cols-4 px-4">
                <span className="col-span-2">Nome</span>
                <span className="col-span-1">Preço</span>
                <span className="col-span-1">Em estoque</span>
              </div>
              <div className="p-4 mt-2 border w-[600px] h-[350px] bg-gray-100">
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <Spinner size={24} className="animate-spin" />
                  </div>
                ) : (
                  <div className="grid grid-cols-4 px-4 gap-1">
                    {products?.map(product => (
                      <>
                        <span
                          key={product.id}
                          className="col-span-2 border-b-[1px] border-gray-300"
                        >
                          {product.name}
                        </span>
                        <span
                          className={classNames(
                            "col-span-1 border-b-[1px] border-gray-300 font-bold"
                          )}
                        >
                          {formatMonetaryValues(product.sellPrice)}
                        </span>
                        <span
                          className={classNames(
                            "col-span-1 border-b-[1px] border-gray-300 text-center font-bold",
                            {
                              "bg-red-300 text-gray-600": quantityRedFlag(
                                product.quantity
                              ),
                            }
                          )}
                        >
                          {product.quantity}
                        </span>
                      </>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
