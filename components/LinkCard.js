import NextLink from "next/link";
import {
    Link,
    LinkProps,
    Icon,
    HStack,
    useColorModeValue as mode,
  } from '@chakra-ui/react';
  import { IoLogoGithub } from "react-icons/io5";
  
  const LinkCard = ({ children, ...linkProps }) => {
    return (
      <span>
        <Link
          {...linkProps}
          color={mode('purple.500', 'purple.300')}
          display='inline-flex'
          alignItems='center'
          isExternal
          target='_blank'
        >
          {children}
        </Link>
        <Icon
          as={IoLogoGithub}
          ml={2}
          color={mode('gray.700', 'white')}
          display='inline'
        />
      </span>
    );
  };
  
  export default LinkCard;
