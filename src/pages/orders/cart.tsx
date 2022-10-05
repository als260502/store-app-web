/* eslint-disable no-unused-vars */
import { NextPage } from "next";

import { Header } from "@components/Header";
import { OrderSidebar } from "@components/Sidebar/order";

import { Toaster } from "react-hot-toast";
import { useOrder } from "@context/OrderContext";
import { CartListItem } from "@components/OrderComponents/CartListItem";
import { Button } from "@components/Button";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Search } from "@components/Search";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Cart } from "@hooks/orderReducer";

type PaymentProps = {
  paymentType: string;
  parcel: string;
};

const createOrderFormSchema = yup.object().shape({
  paymentType: yup.string().required("selecione a forma de pagamento"),
  parcel: yup.string(),
});

const Add: NextPage = () => {
  const { cart, handleClearCart } = useOrder();

  const { register, handleSubmit } = useForm<PaymentProps>({
    resolver: yupResolver(createOrderFormSchema),
  });

  const [payment, setPayment] = useState(false);

  const router = useRouter();

  const handleSelectPaymentType = useCallback((value: string) => {
    if (value === "Credito") {
      setPayment(true);
      return;
    }

    setPayment(false);
  }, []);

  const handleGoBack = useCallback(() => {
    setPayment(false);
    router.back();
  }, [router]);

  const handleCloseOrder: SubmitHandler<PaymentProps> = useCallback(
    async values => {
      const { paymentType, parcel } = values;

      const checkParcel = parcel ? parcel : 1;

      const myCart = cart as Cart[];

      const orderTotal = myCart.map(order => {
        console.log(order.total);
      }, 0);

      const orderItems = cart?.map(item => {
        return {
          quantity: item.quantity,
          total: item.total,
          profit: item.profit,
          tax: item.tax,
          product: { connect: { id: item.id } },
        };
      });
    },
    []
  );

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex  md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <OrderSidebar />
        <main className="w-full">
          <Search />
          <div className="bg-gray-200 min-h-[600px]">
            <div className="px-8 pt-8">
              <Header title={"Finalizar Pedido"} />
              <div className="flex md:items-center gap-2 md:gap-4 justify-end pb-1">
                <Button
                  onClick={handleClearCart}
                  className="btn btn-outline btn-xs w-16 md:w-20"
                  type="button"
                >
                  Limpar
                </Button>
                <Button
                  onClick={handleGoBack}
                  className="btn btn-outline btn-xs w-16 md:w-20"
                  type="button"
                >
                  Voltar
                </Button>
              </div>

              <div className="bg-gray-200 w-full ">
                <ul className="w-full my-4 bg-gray-100 text-gray-400 p-2 text-xs md:text-base">
                  <li className="grid grid-cols-4 md:grid-cols-7 items-center">
                    <strong className="col-span-1">Produto</strong>
                    <strong className="hidden md:flex col-span-1 ">Qtd</strong>
                    <strong className="hidden md:flex col-span-1 ">
                      Custo
                    </strong>
                    <strong className="col-span-1">P/Venda</strong>
                    <strong className="col-span-1">Taxa</strong>
                    <strong className="hidden md:flex col-span-1">Total</strong>
                    <strong className="col-span-1">Lucro</strong>
                  </li>
                  {cart &&
                    cart.map(product => (
                      <CartListItem key={product.id} product={product} />
                    ))}
                </ul>
              </div>
            </div>
            <form onSubmit={handleSubmit(handleCloseOrder)}>
              <div className="flex md:items-center gap-4 md:justify-end px-8 mb-4 text-gray-400">
                <strong>Forma de Pagamento</strong>
                <div className="flex flex-col">
                  <select
                    {...register("paymentType")}
                    name="paymentType"
                    className="input"
                    onChange={e => handleSelectPaymentType(e.target.value)}
                  >
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Pix-CPF">Pix CPF</option>
                    <option value="Pix-CNPJ">Pix CNPJ</option>
                    <option value="Debito">Débito</option>
                    <option value="Credito">Credito</option>
                  </select>
                </div>
                {payment && (
                  <div className="flex gap-2">
                    <select
                      {...register("parcel")}
                      name="parcel"
                      className="input"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="flex md:items-center gap-4 md:justify-end px-8 pb-8">
                <Button
                  className="btn btn-primary btn-sm w-20 md:w-24"
                  onClick={handleCloseOrder}
                >
                  Finalizar
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Add;
