import { extendTheme, styled, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const customTheme = {
  styles: {
    global: (props) => ({
      body: {
        // bgGradient:'linear(to-r, #3a6186, #89253e)' FFE459
        bg: mode("#FFFAFC", "#202023")(props),
      },
    }),
  },
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        textUnderlineOffset: 10,
        textDecorationColor: "#525252",
        textDecorationThickness: 2,
        marginTop: 6,
        marginBottom: 4,
      },
    },
  },
};

const colors = {
  texth1color: 'linear(to-l, #7928CA, #FF0080)'
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, customTheme, components, colors });
export default theme;
