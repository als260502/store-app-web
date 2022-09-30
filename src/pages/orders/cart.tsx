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

const Add: NextPage = () => {
  const { cart, handleClearCart } = useOrder();
  const [payment, setPayment] = useState(false);

  const router = useRouter();

  const handleSelectPaymentType = useCallback((value: string) => {
    if (value === "Credito" || value === "Debito") {
      setPayment(true);
      return;
    }

    setPayment(false);
  }, []);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="w-full h-full items-center mt-2 md:mt-20 justify-center ">
      <div className="flex  md:w-[900px] mx-auto flex-row px-2 md:p-4">
        <OrderSidebar />
        <main className="w-full">
          <Search />
          <div className="bg-gray-200 min-h-[600px]">
            <div className="px-8 pt-8">
              <Header title={"Finalizar Pedido"} />

              <div className="bg-gray-200 w-full ">
                <ul className="w-full my-4 bg-gray-100 text-gray-400 p-2 text-xs md:text-base">
                  <li className="grid grid-cols-4 md:grid-cols-6 items-center">
                    <strong className="col-span-1">Produto</strong>
                    <strong className="col-span-1 ">Qtd</strong>
                    <strong className="hidden md:flex col-span-1 ">
                      Custo
                    </strong>
                    <strong className="col-span-1">P/Venda</strong>
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

            <div className="flex md:items-center gap-4 md:justify-end px-8 mb-4 text-gray-400">
              <div className="flex flex-col">
                <select
                  onChange={e => handleSelectPaymentType(e.target.value)}
                  className="input  "
                  name="paymentType"
                >
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Pix-CPF">Pix CPF</option>
                  <option value="Pix-CNPJ">Pix CNPJ</option>
                  <option value="Debito">Débito</option>
                  <option value="Credito">Credito</option>
                </select>
              </div>
              {!payment && (
                <div className="flex gap-2">
                  <select className="input  " name="parcel">
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

                  <input
                    className=" px-2 input input-number w-20 placeholder:text-sm"
                    placeholder="Taxa %"
                  />
                </div>
              )}
            </div>

            <div className="flex md:items-center gap-4 md:justify-end px-8 pb-8">
              <Button
                onClick={handleClearCart}
                className="btn btn-outline btn-sm w-20 md:w-24"
              >
                Limpar
              </Button>
              <Button
                onClick={handleGoBack}
                className="btn btn-outline btn-sm w-20 md:w-24"
              >
                Voltar
              </Button>
              <Button className="btn btn-primary btn-sm w-20 md:w-24">
                Finalizar
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
