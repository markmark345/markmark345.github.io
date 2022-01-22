import { chakra, Stack, VStack, Divider, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <VStack pb={6} spacing={8} as="footer" alignItems="center">
      <Divider />
      <Stack
        w='full'
        alignItems='center'
        spacing={0}
      >
        <Text color="gray.500" >
        Copyright &copy; {'  '}
          <chakra.span as='time' color='#7928CA'>
            {new Date().getFullYear()}
          </chakra.span>{'  '}
            Natapatchara Anuroje
        </Text>
      </Stack>
    </VStack>
  );
};

export default Footer