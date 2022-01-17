import { extendTheme, styled, withDefaultColorScheme  } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                // bgGradient:'linear(to-r, #3a6186, #89253e)' 
                bg: '#FFE459'
            }
        }
    }
 })

   

  export default customTheme

