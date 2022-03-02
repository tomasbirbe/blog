import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import { cssReset } from './cssReset';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      primary: {
        default: '#523F38',
        _light: '#32f',
      },
      title: {
        default: 'black',
      },
      paragraph: {
        default: 'black',
      },
    },
  },
  styles: {
    global: ({ colorMode }) => ({
      ...cssReset,
      '*': {
        'font-family': 'Source Serif Pro',
      },
      body: {
        bg: 'primary',
      },
    }),
  },
});
