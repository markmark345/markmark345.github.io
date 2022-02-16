import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Summary = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              SUMMARY
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          A junior student in the department of Computer science, faculty of
          Science and Technology, Thammasat University. Who is looking for a
          Co-operative internship opportunity to learn and grow experience and
          abilities in Software Enginearing.
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default Summary;
