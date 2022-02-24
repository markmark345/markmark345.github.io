import {
  VStack,
  Heading,
  List,
  ListItem,
  Box,
  Icon,
} from "@chakra-ui/react";
import ProjectCard from "./projectsCard";
import LinkItem from "../LinkItem";
import { jsproject } from "../../data/jsprojects";
import { IoArrowForward } from 'react-icons/io5'

const Project = () => {
  return (
    <VStack w="100%" alignItems="flex-start" spacing={4} as="section">
      <Heading id="projectID" size="lg" mt={12} mb={4} variant="section-title">
        Projects
      </Heading>
      {/* <List spacing={6} w="90%" >
        {jsproject
          .map((data, key) => (
            <ListItem key={key} github={data.github}>
              <ProjectCard
                title={data.title}
                description={data.description}
                github={data.github}
                tag={data.type}
              />
            </ListItem>
          ))
          .slice(0, 2)}
      </List> */}
      <ProjectCard data={jsproject} len={2} />
      <Box>
        <LinkItem
          display="flex"
          alignItems="center"
          href="/projects"
          ml={{ base: 0, md: 4 }}
          role="group"
        >
          View all projects
          <Icon
            as={IoArrowForward}
            _groupHover={{ transform: "translateX(6px)" }}
            transitionDuration='slow'
            transitionProperty="transform"
            transitionTimingFunction='ease-out'
          />
        </LinkItem>
      </Box>
    </VStack>
  );
};

export default Project;
