import { useGetOrdersByStoreUserIdQuery } from "../graphql/generated";

export const useOrder = (userId: string) => {
  const { data, error, loading, refetch } = useGetOrdersByStoreUserIdQuery({
    variables: {
      id: userId,
    },
  });
  const orders = data?.orders;

  return {
    orders,
    error,
    loading,
    refetch,
  };
};
