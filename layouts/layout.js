// eslint-disable-next-line no-unused-vars
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Navbar from '../components/Navbar/Navbar'

const Layout = ({ children, router }) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Natapatchara Anuroje</title>
            </Head>
            <Navbar path={router.asPath} />

            <Container maxW="container.m" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Layout