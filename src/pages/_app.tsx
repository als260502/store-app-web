import "../styles/global.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { ProductProvider } from "../context/ProductContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </ApolloProvider>
  );
}

export default MyApp;
