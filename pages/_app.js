import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../layouts/layout';
import Theme from '../styles/theme'
import Head from "next/head"
import "../styles/input.css"

const App = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={Theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default App