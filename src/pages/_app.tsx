import "../styles/global.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { ProductProvider } from "../context/ProductContext";
import { CompanyProvider } from "../context/CompanyContext";
import { OrderProvider } from "@context/OrderContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CompanyProvider>
        <OrderProvider>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </OrderProvider>
      </CompanyProvider>
    </ApolloProvider>
  );
}

export default MyApp;
