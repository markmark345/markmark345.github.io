import NextLink from 'next/link'
import { Box, Container, Image, Heading } from '@chakra-ui/react'

const About = () => {
    return (
        <Box
        flexShrink={0}>
            <Image
            boxSize='150px'
            src='/profile/PoorinIMG1.jpg'
            borderRadius='full' 
            alt='PoorinIMG'/>
        </Box>
    )
}

export default About