import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../layouts/layout';

const App = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default App