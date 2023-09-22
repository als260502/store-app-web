import { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { Header } from "@components/Header";
import { useGetOrdersPaginationLazyQuery } from "@graphql/generated";
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
  node: {
    createdAt: any;
    id: string;
    parcel?: number | null;
    orderValue: number;
    paymentType?: string | null;
    total: number;
    userEmail?: string | null;
    storeUser?: User | null;
  };
};
type PaginationInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageSize?: number | null | undefined;
};

const Order: NextPage = () => {
  const [getAllOrders, { refetch: getOders, loading }] =
    useGetOrdersPaginationLazyQuery();

  const [orders, setOrders] = useState<OrderProps[]>();
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>();

  const [currentPage, setCurrentPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [first] = useState(10);
  const [registersPerPage] = useState(10);

  const [isSearching, setIsSearching] = useState(false);

  const paginate = useCallback(
    (pageNumber: number) => {
      const newSkip = (pageNumber - 1) * registersPerPage;
      setSkip(newSkip);
      setCurrentPage(pageNumber);
    },
    [registersPerPage]
  );

  const handlePaginate = useCallback(async () => {
    const response = await getAllOrders({
      variables: {
        skip: skip,
        first,
      },
    });
    const orders = response?.data?.ordersConnection.edges;
    setOrders(orders);
    setPaginationInfo(response.data?.ordersConnection.pageInfo);
    await getOders();
  }, [first, getAllOrders, getOders, skip]);
  useEffect(() => {
    handlePaginate();
  }, [handlePaginate, skip]);

  const handleNextPage = useCallback(async () => {
    console.log();
    const newSkip = skip + registersPerPage;
    setSkip(newSkip);
    const response = await getAllOrders({
      variables: {
        skip: skip,
      },
    });
    const orders = response?.data?.ordersConnection.edges;
    setOrders(orders);
    setPaginationInfo(response.data?.ordersConnection.pageInfo);
    await getOders();
  }, [getAllOrders, getOders, registersPerPage, skip]);
  useEffect(() => {
    handlePaginate();
  }, [handlePaginate, skip]);

  const formatMonetaryValues = useCallback((value: number) => {
    const formatValue = new Intl.NumberFormat("pt-BT", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return formatValue;
  }, []);

  const handlePreviousPage = useCallback(async () => {
    const newSkip = skip - registersPerPage;
    setSkip(newSkip);
    const response = await getAllOrders({
      variables: {
        skip: skip,
      },
    });
    const orders = response?.data?.ordersConnection.edges;
    setOrders(orders);
    setPaginationInfo(response.data?.ordersConnection.pageInfo);
    await getOders();
  }, [getAllOrders, getOders, registersPerPage, skip]);
  useEffect(() => {
    handlePaginate();
  }, [handlePaginate, skip]);

  const handleSearch = useCallback(
    async (text: string) => {
      if (text.length > 2) {
        setIsSearching(isSearching => !isSearching);
        const regex = new RegExp(`${text}`, "gi");

        const newOrders = orders?.filter(
          order =>
            regex.test(String(order.node.storeUser?.name)) ||
            regex.test(String(order.node.userEmail)) ||
            regex.test(String(order.node.storeUser?.surname))
        );

        setOrders(newOrders);
      } else {
        const response = await getAllOrders({
          variables: {
            skip: skip,
            first,
          },
        });

        setOrders(response.data?.ordersConnection.edges);
        setIsSearching(isSearching => !isSearching);
      }
    },
    [first, getAllOrders, orders, skip]
  );

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <ReportSidebar />

        <main className="w-full bg-gray-200">
          <SearchReportOrder handleSearch={handleSearch} />

          <div className="px-8 my-4 h-[100vh] md:min-h-[40rem] ">
            <Header title="Pedidos" loading={loading} />

            <OrderItems
              currentRegisters={orders}
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
                pageInfo={paginationInfo}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Order;
