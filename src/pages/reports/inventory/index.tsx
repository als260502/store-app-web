import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { Header } from "../../../components/Header";
import { Search } from "../../../components/Search";
import { useGetAllProductsLazyQuery } from "../../../graphql/generated";
import { ReportSidebar } from "../../../components/Sidebar/report";
import { InventoryItems } from "../../../components/InventoryComponents/InventoryItems";
import { Paginate } from "../../../components/Pagination/Paginate";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [registersPerPage] = useState(10);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await getProducts();
      setProducts(response.data?.products);
    };
    getAllProducts();
  }, [getProducts]);

  const indexOfLastRegister = currentPage * registersPerPage;
  const indexOfFirstRegister = indexOfLastRegister - registersPerPage;
  const currentRegisters = products?.slice(
    indexOfFirstRegister,
    indexOfLastRegister
  );

  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

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

            <InventoryItems
              currentRegisters={currentRegisters}
              formatMonetaryValues={formatMonetaryValues}
              loading={loading}
              quantityRedFlag={quantityRedFlag}
            />

            <Paginate
              registersPerPage={registersPerPage}
              totalRegisters={products?.length}
              paginate={paginate}
              currentPage={currentPage}
              linkUrl="/reports/inventory"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
