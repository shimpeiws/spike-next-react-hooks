import { AppProps } from "next/app";
import Head from "next/head";
import { ItemContextProvider } from "../contexts/itemContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <QueryClientProvider client={queryClient}>
      <ItemContextProvider>
        <Component {...pageProps} />
      </ItemContextProvider>
    </QueryClientProvider>
  </>
);

export default App;
