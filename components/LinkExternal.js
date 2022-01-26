import NextLink from "next/link";
import {
    Link,
    LinkProps,
    Icon,
    HStack,
    useColorModeValue as mode,
  } from '@chakra-ui/react';
  import { IoLogoGithub } from "react-icons/io5";
  
  const LinkExternal = ({ children, ...linkProps }) => {
    return (
      <span>
        <Icon
          as={IoLogoGithub}
          
          color={mode('gray.700', 'white')}
          display='inline'
        />
        <Link
          {...linkProps}
          ml={2}
          color={mode('purple.500', 'purple.300')}
          display='inline-flex'
          alignItems='center'
          isExternal
          target='_blank'
        >
          {children}
        </Link>
        
      </span>
    );
  };
  
  export default LinkExternal;
