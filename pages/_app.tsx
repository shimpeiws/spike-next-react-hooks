import { AppProps } from "next/app";
import Head from "next/head";
import { ItemContextProvider } from "../contexts/itemContext";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <ItemContextProvider>
      <Component {...pageProps} />
    </ItemContextProvider>
  </>
);

export default App;
