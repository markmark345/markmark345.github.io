import {
  Heading,
  List,
  VStack,
  ListItem,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Box,
} from "@chakra-ui/react";
import { jsproject } from "../data/jsprojects";
import ProjectCard from "../components/projects/projectsCard";

import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const Projects = () => {
  const [quary, setQuery] = useState("");
  const key = ["title", "type"];

  const onSearch = (data) => {
    return data.filter(
      (item) => key.some(key=>item[key].toLowerCase().includes(quary)) 
    );
  };

  return (
    <Box w="100%">
      <VStack w="100%" alignItems="flex-start" spacing={4} as="section">
        <Heading size="lg">Projects</Heading>
        <Text>
          Open Source Projects on Github. I've a total of {jsproject.length}{" "}
          projects
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={IoSearchSharp} color="gray.500" />
          </InputLeftElement>
          <Input
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            placeholder="Search Project"
            variant="flushed"
            mb={12}
          />
        </InputGroup>
        {/* <List spacing={6} w="100%" >
          {jsproject.map((data, key) => (
            <ListItem key={key} github={data.github}>
              <ProjectCard 
                title={data.title}
                description={data.description}
                github={data.github}
                tag={data.type} />
                data={onSearch(jsproject)}
            </ListItem>
          ))}
        </List> */}
        <ProjectCard data={onSearch(jsproject)} len={jsproject.length}/>
      </VStack>
    </Box>
  );
};

export default Projects;
