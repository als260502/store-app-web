export const formatCurrency = (currency = 0) => {
  const formatValue = new Intl.NumberFormat("pt-BT", {
    style: "currency",
    currency: "BRL",
  }).format(currency);

  return formatValue;
};
