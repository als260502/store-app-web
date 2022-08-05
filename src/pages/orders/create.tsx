import { FormEvent, useCallback, useState } from "react";
import { NextPage } from "next";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Button } from "../../components/Button";
import {
  Product,
  StoreUser,
  useCreateOrderItemMutation,
  useCreateOrderMutation,
  useGetProductsQuery,
  useGetStoreUsersQuery,
} from "../../graphql/generated";
import toast, { Toaster } from "react-hot-toast";
import {
  ProductItem,
  Props,
} from "../../components/OrderComponents/ProductItem";

type OrderProps = {
  id?: string;
  user: StoreUser;
  product: Product;
  total: number;
};

const Create: NextPage = () => {
  console.log("renderizei");
  const [userText, setUserText] = useState("");
  const [usersSugestions, setUsersSugestions] = useState<
    StoreUser[] | undefined
  >([]);

  const [productText, setProductText] = useState("");
  const [sugestions, setSugestions] = useState<Product[] | undefined>([]);

  const [order, setOrder] = useState<OrderProps>({} as OrderProps);
  const [orderItems, setOrderItems] = useState<Props[]>([]);

  const [total, setTotal] = useState(0);

  const { data: product } = useGetProductsQuery();

  const { data: user } = useGetStoreUsersQuery();

  const [loading, setLoading] = useState(false);

  const onUserChangeHandler = useCallback(
    (text: string) => {
      if (text.length > 3) {
        const regex = new RegExp(`${text}`, "gi");

        const userFiltered = user?.storeUsers?.filter(user => {
          return (
            regex.test(user.name) ||
            regex.test(String(user.nickname)) ||
            regex.test(String(user?.email))
          );
        });

        setUsersSugestions(userFiltered);
      } else {
        setUsersSugestions([]);
      }
      setUserText(text);
    },
    [user?.storeUsers]
  );

  const onProductChangeHandler = useCallback(
    (text: string) => {
      if (text.length > 3) {
        const regex = new RegExp(`${text}`, "gi");

        const userFiltered = product?.products?.filter(product =>
          regex.test(product.name)
        );

        const newProduct = userFiltered?.map(product => {
          const newColor = product.color.map(c => c.name);
          const newSize = product.size.map(s => s.name);

          return {
            id: product.id,
            categories: product.categories,
            name: product.name,
            color: newColor,
            size: newSize,
            price: product.price,
            quantity: product.quantity,
          };
        });

        setSugestions(newProduct);
      } else {
        setSugestions([]);
      }
      setProductText(text);
    },
    [product?.products]
  );

  const handleGetUserId = useCallback(
    (user: StoreUser) => {
      setUserText(user.name);

      const newOrder = {
        user,
      };

      setOrder(Object.assign(order, newOrder));
    },
    [order]
  );

  const handleGetProductId = useCallback(
    (product: Product) => {
      setProductText(product.name);
      const newOrder = {
        product,
      };

      setOrder(Object.assign(order, newOrder));
    },
    [order]
  );

  const [createOrder] = useCreateOrderMutation();
  const [createOrderItem] = useCreateOrderItemMutation();
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      const data = new FormData(event.currentTarget);
      const quantity = parseInt(String(data.get("quantity")));

      if (quantity <= 0) {
        toast.error("Quantidade precisa se no minimo 1", { duration: 4000 });
        return;
      }

      if (order.product.quantity - quantity < 0) {
        toast.error("Não ha em estoque quantidade de produtos suficientes", {
          duration: 4000,
        });
        return;
      }

      let orderId = "";

      const totalOrder = order?.product?.price * quantity;

      const newTotal = totalOrder + total;

      setTotal(newTotal);

      const totalFormated = new Intl.NumberFormat("pt-BT", {
        style: "currency",
        currency: "BRL",
      }).format(totalOrder);

      if (!order.id) {
        const newOrder = {
          total: newTotal,
          userId: order?.user?.id,
          itemQuantity: quantity,
          totalItem: newTotal,
          productId: order?.product.id,
        };
        setOrder(Object.assign(order, newOrder));

        const response = await createOrder({
          variables: newOrder,
        });

        if (response?.data?.createOrder) {
          const id = response.data.createOrder.id;

          setOrder({
            ...order,
            id,
          });

          orderId = response.data.createOrder.orderItems[0].id;

          const item = {
            id: orderId,
            name: order.product.name,
            quantity,
            total: newTotal,
          };

          setOrderItems([...orderItems, item]);

          toast.success("Pedido aberto, item adicionado");
          setLoading(false);

          console.log(orderItems);
          return;
        } else {
          toast.error("Erro ao criar pedido");
          setLoading(false);
        }
      }

      try {
        const newItem = {
          orderId: String(order.id),
          productId: order.product.id,
          quantity: quantity,
          itemTotal: totalOrder,
        };

        const response = await createOrderItem({
          variables: newItem,
        });

        const myItem = {
          id: String(response.data?.createOrderItem?.id),
          name: order.product.name,
          quantity,
          total: totalOrder,
        };

        // const n = orderItems.push(myItem);
        // console.log(n);

        setOrderItems([...orderItems, myItem]);
      } catch (error) {
        toast.error("Erro ao adicionar item ao pedido");
        console.log(error);
      } finally {
        setLoading(false);
      }

      console.log(orderItems);
    },
    [createOrder, createOrderItem, order, orderItems, total]
  );
  return (
    <div className="w-full h-full items-center mt-20 justify-center ">
      <div className="flex w-[900px] mx-auto flex-row p-4">
        <Sidebar />

        <main className="h-full w-full w-min[600px]">
          {/* <Search /> */}
          <div className="bg-gray-200 min-h-[60vh]">
            <div className="p-8">
              <Header title={"Novo Pedido"} loading={loading} />

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 my-8 w-full"
              >
                <div className="relative justify-center">
                  <ul className="absolute top-0 mt-9 w-full bg-gray-300 rounded-md z-20 flex flex-col">
                    {usersSugestions &&
                      usersSugestions.map(sugestion => (
                        <button
                          className="text-left"
                          key={sugestion.id}
                          onClick={() => handleGetUserId(sugestion)}
                          type="button"
                        >
                          <li className=" rounded-md relative font-bold cursor-pointer hover:bg-gray-500 transition-colors  px-4 border-b-gray-400 my-0.5">
                            {`${sugestion.name} - ${sugestion.email}`}
                          </li>
                        </button>
                      ))}
                  </ul>
                  <input
                    className="input px-2 w-full"
                    autoComplete="off"
                    placeholder="Nome..."
                    name="name"
                    required
                    onChange={e => onUserChangeHandler(e.target.value)}
                    value={userText}
                    onBlur={() => {
                      setTimeout(() => {
                        setUsersSugestions([]);
                      }, 100);
                    }}
                  />
                </div>

                <div className="relative">
                  <ul className="absolute top-0 mt-9 w-full bg-gray-300 rounded-md flex flex-col">
                    {sugestions &&
                      sugestions.map(sugestion => (
                        <button
                          className="text-left block"
                          key={sugestion.id}
                          onClick={() => handleGetProductId(sugestion)}
                          type="button"
                        >
                          <li className="rounded-md relative font-bold cursor-pointer hover:bg-gray-500 transition-colors px-4 border-b-gray-400 my-0.5">
                            {`${sugestion.name} ${sugestion.color} ${sugestion.size}`}
                          </li>
                        </button>
                      ))}
                  </ul>
                  <input
                    className="input px-2 w-full"
                    placeholder="Produto.."
                    autoComplete="off"
                    required
                    name="product"
                    onChange={e => onProductChangeHandler(e.target.value)}
                    value={productText}
                    onBlur={() => {
                      setTimeout(() => {
                        setSugestions([]);
                      }, 100);
                    }}
                  />
                </div>
                <input
                  className="input px-2"
                  placeholder="Quantidade"
                  type="number"
                  name="quantity"
                  required
                />

                <div className="flex flex-row gap-4">
                  <Button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary btn-md w-24"
                  >
                    Adicionar
                  </Button>
                  {/* <Button className="btn btn-outline btn-md w-24">
                    Finalizar
                  </Button> */}
                </div>
              </form>
              {orderItems.length !== 0 && (
                <ProductItem itemProps={orderItems} />
              )}
            </div>
          </div>
        </main>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Create;
