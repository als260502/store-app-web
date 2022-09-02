import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { Header } from "@components/Header";
import { useGetOrdersLazyQuery } from "@graphql/generated";
import { ReportSidebar } from "@components/Sidebar/report";
import { Paginate } from "@components/Pagination/Paginate";
import { OrderItems } from "@components/OrderComponents/Reports/OrderItems";
import { SearchReportOrder } from "@components/Search/SearchReportOrder";

type User = {
  name: string;
  surname: string;
};

type OrderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createdAt: any;
  id: string;
  parcel?: number | null | undefined;
  orderValue: number;
  paymentType?: string | null | undefined;
  total: number;
  userEmail?: string | null | undefined;
  storeUser?: User | null | undefined;
};

const Order: NextPage = () => {
  const [getAllOrders, { refetch: getOders, loading }] =
    useGetOrdersLazyQuery();
  const [orders, setOrders] = useState<OrderProps[]>();

  const [currentPage, setCurrentPage] = useState(1);
  const [registersPerPage] = useState(10);

  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const getAllOrders = async () => {
      const response = await getOders();

      setOrders(response.data.orders);
    };
    getAllOrders();
  }, [getOders]);

  const indexOfLastRegister = currentPage * registersPerPage;
  const indexOfFirstRegister = indexOfLastRegister - registersPerPage;
  const currentRegisters = orders?.slice(
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

  const handleSearch = useCallback(
    async (text: string) => {
      if (text.length > 2) {
        setIsSearching(isSearching => !isSearching);
        const regex = new RegExp(`${text}`, "gi");

        const newOrders = orders?.filter(
          order =>
            regex.test(String(order.storeUser?.name)) ||
            regex.test(String(order.userEmail)) ||
            regex.test(String(order.storeUser?.surname))
        );

        setOrders(newOrders);
      } else {
        const response = await getAllOrders();

        setOrders(response.data?.orders);
        setIsSearching(isSearching => !isSearching);
      }
    },
    [getAllOrders, orders]
  );

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <ReportSidebar />

        <main className="w-full bg-gray-200">
          <SearchReportOrder handleSearch={handleSearch} />

          <div className="px-8 my-4 h-[100vh] md:h-[40rem] ">
            <Header title="Pedidos" loading={loading} />

            <OrderItems
              currentRegisters={currentRegisters}
              formatMonetaryValues={formatMonetaryValues}
              loading={loading}
            />

            {!isSearching && (
              <Paginate
                registersPerPage={registersPerPage}
                totalRegisters={orders?.length}
                paginate={paginate}
                linkUrl="/reports/order"
                currentPage={currentPage}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Order;
