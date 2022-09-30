/* eslint-disable no-unused-vars */
import { NextPage } from "next";

import { Header } from "@components/Header";
import { OrderSidebar } from "@components/Sidebar/order";

import { Toaster } from "react-hot-toast";
import { useOrder } from "@context/OrderContext";
import { OrderListItem } from "@components/OrderComponents/OrderListItem";
import { Button } from "@components/Button";
import { SearchOrderAdd } from "@components/Search/SearchOrderAdd";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Add: NextPage = () => {
  const {
    products,
    categories,
    filterProducts,
    setProducts,
    getProducts,
    handleClearCart,
  } = useOrder();

  const router = useRouter();

  // const [currentPage, setCurrentPage] = useState(1);
  // const [registersPerPage] = useState(2);

  // const indexOfLastRegister = currentPage * registersPerPage;
  // const indexOfFirstRegister = indexOfLastRegister - registersPerPage;
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const currentRegisters = products?.slice(
  //   indexOfFirstRegister,
  //   indexOfLastRegister
  // );

  // // const paginate = useCallback((pageNumber: number) => {
  // //   setCurrentPage(pageNumber);
  // // }, []);

  const handleCloseOrder = () => {
    router.push("/orders/cart");
  };

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

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex  md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <OrderSidebar />
        <main className="w-full">
          <SearchOrderAdd handleSearch={handleSearch} />
          <div className="bg-gray-200 min-h-[600px]">
            <div className="px-8 pt-8">
              <Header title={"Novo Pedido"} />

              <select
                name="category"
                className="input"
                onChange={e => filterProducts(e.target.value)}
              >
                {categories?.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <div className="bg-gray-200 w-full ">
                <ul className="w-full my-4 bg-gray-100 text-gray-400 p-2 text-xs md:text-base">
                  <li className="grid grid-cols-5">
                    <strong className="col-span-1"></strong>
                    <strong className="col-span-2">Produto</strong>
                    <strong className="col-span-1 ">Qtd</strong>
                    <strong className="col-span-1 text-center">Estoque</strong>
                  </li>
                  {products &&
                    products.map(product => (
                      <OrderListItem key={product.id} product={product} />
                    ))}
                </ul>
              </div>
            </div>
            {/* <Paginate
              registersPerPage={registersPerPage}
              totalRegisters={products?.length}
              paginate={paginate}
              currentPage={currentPage}
              linkUrl="/orders/add"
            /> */}
            <div className="flex justify-end px-8 pb-8 gap-4">
              <Button
                className="btn btn-outline btn-md w-32"
                onClick={handleClearCart}
              >
                Limpar Carrinho
              </Button>
              <Button
                className="btn btn-primary btn-md w-32"
                onClick={handleCloseOrder}
              >
                Próximo
              </Button>
            </div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Add;
