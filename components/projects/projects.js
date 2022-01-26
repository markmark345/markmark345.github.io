import { VStack, Heading, List, ListItem, Box } from "@chakra-ui/react";
import ProjectCard from "./projectsCard";
import { jsproject } from "../../data/jsprojects";

const Project = () => {
  return (
    <VStack w="full" alignItems="flex-start" spacing={4} as="section">
      <Heading id="projectID" size="lg" mt={16} mb={6} variant="section-title">Projects</Heading>
      <List spacing={6}>
        {jsproject.map((data, key) => (
          <ListItem key={key} github={data.github}>
            <ProjectCard title={data.title} description={data.description} github={data.github} tag={data.type}/>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Project;
