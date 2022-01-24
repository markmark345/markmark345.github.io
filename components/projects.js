import { VStack, Heading, List, ListItem, Box } from "@chakra-ui/react";

const Project = () => {
  return (
    <VStack w="full" alignItems="flex-start" spacing={4} as="section">
      <Heading size="md">Projects</Heading>
      <List spacing={6}>
        <ListItem>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              title
            </Box>
          </Box>
        </ListItem>
      </List>
    </VStack>
  );
};

export default Project;
