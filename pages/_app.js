import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../layouts/layout";
import Theme from "../styles/theme/theme";
import Head from "next/head";

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={Theme}>
      <Layout router={router}>
        <Head>
          <link rel="shortcut icon" href="/icon/favicon.png" />
        </Head>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
