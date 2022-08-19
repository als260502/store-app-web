import "../styles/global.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import { ProductProvider } from "../context/ProductContext";
import { CompanyProvider } from "../context/CompanyContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CompanyProvider>
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </CompanyProvider>
    </ApolloProvider>
  );
}

export default MyApp;
