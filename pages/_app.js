import { ChakraProvider } from "@chakra-ui/provider";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Layout from "../layouts/layout";
import Theme from "../styles/theme/theme";
import Footer from "../components/footer";
import Head from "next/head";

const App = ({ Component, pageProps, router }) => {
  const spring = {
    type: "spring",
    damping: 30,
    stiffness: 100,
    when: "afterChildren",
  };

  return (
    <ChakraProvider theme={Theme}>
      <Navbar path={router.asPath} />
      <motion.div
        transition={spring}
        key={router.pathname}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        id="page-transition-container"
      >
        <Layout router={router}>
          <Head>
            <link rel="shortcut icon" href="/icon/favicon.png" />
          </Head>

          <Component {...pageProps} key={router.route} />
        </Layout>
      </motion.div>
      {/* <Footer/> */}
    </ChakraProvider>
  );
};

export default App;
