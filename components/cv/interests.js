import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Interests = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
                INTERESTS
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList>
            <ListItem>🎮 Video games. Big variety of genres </ListItem>
            <ListItem>🎥 Movies and TV. Especially sci-fi and fantasy</ListItem>
            <ListItem>📖 Reading Novel and Manga</ListItem> 
            <ListItem>🖥️ Practice code (only free time)</ListItem> 
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default Interests;
