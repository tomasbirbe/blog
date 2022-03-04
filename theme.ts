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
        default: '#171D1C',
        _light: '#32f',
      },
      title: {
        default: 'white',
      },
      paragraph: {
        default: 'white',
      },
    },
  },
  styles: {
    components: {
      Text: {
        baseStyle: {
          background: 'red',
        },
        defaultProps: {
          variant: '',
        },
      },
    },
    global: ({ colorMode }) => ({
      ...cssReset,
      '*': {
        fontFamily: 'Source Serif Pro',
      },
      body: {
        bg: 'primary',
      },
      '.post': {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        p: {
          fontWeight: '300',
          fontSize: '1.2em',
          maxInlineSize: '66ch',
          wordBreak: 'break-word',
        },
        h2: {
          paddingBlockStart: 6,
          fontWeight: '600',
          fontSize: '2em',
        },
        h3: {
          paddingBlockStart: 4,
          fontWeight: '600',
          fontSize: '1.5em',
        },
        ul: {
          paddingInlineStart: '6ch',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        },
        img: {
          paddingInline: 4,
          marginBlock: 4,
        },
      },
    }),
  },
});
