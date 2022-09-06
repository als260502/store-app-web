import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { Header } from "../../../components/Header";
import { SearchReportInventory } from "../../../components/Search/SearchReportInventory";
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
  const [getAllProducts, { refetch: getProducts, loading }] =
    useGetAllProductsLazyQuery();
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

  const [isSearching, setIsSearching] = useState(false);

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

  const handleSearch = useCallback(
    async (text: string) => {
      if (text.length > 2) {
        setIsSearching(isSearching => !isSearching);
        const regex = new RegExp(`${text}`, "gi");

        const newProducts = products?.filter(
          product =>
            regex.test(String(product.name)) || regex.test(String(product.slug))
        );

        setProducts(newProducts);
      } else {
        const response = await getAllProducts();
        setProducts(response.data?.products);
        setIsSearching(isSearching => !isSearching);
      }
    },
    [getAllProducts, products]
  );

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex md:w-[900px] mx-auto flex-row px-1 md:p-4">
        <ReportSidebar />

        <main className="w-full bg-gray-200">
          <SearchReportInventory handleSearch={handleSearch} />

          <div className="px-8 my-4 h-[100vh] md:h-[40rem]">
            <Header title="Itens em estoque" />

            <InventoryItems
              currentRegisters={currentRegisters}
              formatMonetaryValues={formatMonetaryValues}
              loading={loading}
              quantityRedFlag={quantityRedFlag}
            />

            {!isSearching && (
              <Paginate
                registersPerPage={registersPerPage}
                totalRegisters={products?.length}
                paginate={paginate}
                currentPage={currentPage}
                linkUrl="/reports/inventory"
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
