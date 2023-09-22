import { useCallback, useState } from "react";
import { NextPage } from "next";
import { Header } from "../../../components/Header";
import { SearchReportInventory } from "../../../components/Search/SearchReportInventory";
import { ReportSidebar } from "../../../components/Sidebar/report";
import { InventoryItems } from "../../../components/InventoryComponents/InventoryItems";
import { Paginate } from "../../../components/Pagination/Paginate";
import { useOrder } from "@context/OrderContext";

const Inventory: NextPage = () => {
  const { products, categories, filterProducts, setProducts, getProducts } =
    useOrder();

  const [currentPage, setCurrentPage] = useState(1);
  const [registersPerPage] = useState(10);

  const [isSearching] = useState(false);

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

  const loading = false;

  const handleSearch = useCallback(
    async (text: string) => {
      if (text.length > 2) {
        const regex = new RegExp(`${text}`, "gi");
        const newProducts = products?.filter(
          product =>
            regex.test(String(product.name)) || regex.test(String(product.slug))
        );
        setProducts(newProducts);
      } else {
        return getProducts();
      }
    },
    [getProducts, products, setProducts]
  );

  const handleNextPage = useCallback(() => {
    console.log("has next page");
  }, []);

  const handlePreviousPage = useCallback(() => {
    console.log("has previous page");
  }, []);

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex md:w-[900px] mx-auto flex-row px-1 md:p-4">
        <ReportSidebar />

        <main className="w-full bg-gray-200">
          <SearchReportInventory handleSearch={handleSearch} />
          <div className="px-8 my-4 h-[100vh] md:h-[40rem]">
            <Header title="Itens em estoque" />

            <select
              name="category"
              className="input mt-4"
              onChange={e => filterProducts(e.target.value)}
            >
              <option value="todos">Todos</option>
              {categories?.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

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
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                pageInfo={{
                  pageSize: 1,
                  hasNextPage: false,
                  hasPreviousPage: false,
                }}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;
