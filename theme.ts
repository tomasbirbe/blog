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
        _light: '#D6D5C9',
      },
      primaryInverted: {
        default: '#D6D5C9',
        _light: '#171D1C',
      },
      title: {
        default: 'white',
        _light: 'black',
      },
      paragraph: {
        default: 'white',
        _light: 'black',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        bg: 'primary',
        border: '1px solid',
        borderColor: 'primaryInverted',
      },
      defaultProps: {
        variant: '',
      },
    },

    Select: {
      baseStyle: {
        field: {
          bg: 'primary',
          border: '1px solid',
          borderColor: 'primaryInverted',
        },
      },

      defaultProps: {
        variant: null,
      },
    },
  },
  styles: {
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
        a: {
          textColor: 'coral',
        },
        p: {
          fontWeight: () => (colorMode === 'dark' ? '300' : '500'),
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
