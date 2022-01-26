import { extendTheme, styled, withDefaultColorScheme  } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const customTheme = {
    styles: {
        global: (props) => ({
            body: {
                // bgGradient:'linear(to-r, #3a6186, #89253e)' FFE459
                bg: mode('#FFFAFC', '#202023') (props)
            },
        }),
    },
    mdx: {
        h1: {
          fontSize: '3xl',
          letterSpacing: '1px',
        },
        h2: {
          fontSize: 'xl',
          letterSpacing: '0.8px',
        },
        h3: {
          fontSize: 'md',
          letterSpacing: '0.6px',
        },
        h4: {
          fontSize: 'xs',
          letterSpacing: '0.5px',
        },
      },
 }

 const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}
   
const theme = extendTheme({ config, customTheme })
  export default theme

