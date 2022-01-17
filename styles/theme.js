import { extendTheme, styled, withDefaultColorScheme  } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                // bgGradient:'linear(to-r, #3a6186, #89253e)' FFE459
                bg: mode('#FFE459', '#202023') (props)
            }
        })
    }
 })

   

  export default customTheme

