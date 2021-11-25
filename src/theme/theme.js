// theme.js
import { extendTheme } from '@chakra-ui/react';
// // Global style overrides
// import styles from "./styles"
// // Foundational style overrides
// import borders from "./foundations/borders"
// // Component style overrides
// import Button from "./components/button"
const overrides = {
  colors: {
    brand: {
      500: '#495460',
      100: '#7f8a96',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        // bg: "gray.300",
        // color: "white",
        fontWeight: '300',
        letterSpacing: '.5px',
        fontFamily: "'Noto Sans TC','PingFang TC', 微軟正黑體, sans-serif",
      },
    },
  },
  // styles,
  // borders,
  // Other foundational style overrides go here
  components: {
    Button: {
      baseStyle: {
        fontWeight: '300', // Normally, it is "semibold"
        borderRadius: 'full',
        letterSpacing: 2,
      },
      sizes: {
        lg: {
          h: 12,
          minW: 12,
          px: 30,
        },
      },
    },
    // Other components go here
  },
};

const theme = extendTheme(overrides);
export default theme;
