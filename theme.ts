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
        default: '#191919',
        _light: '#D6D5C9',
      },
      primaryInverted: {
        default: '#D6D5C9',
        _light: '#171D1C',
      },
      secondary: {
        default: '#D19C1D',
        _light: '#8C1C13',
      },
      title: {
        default: 'white',
        _light: 'black',
      },
      paragraph: {
        default: '#BDBDBD',
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
        fontFamily: 'Poppins',
      },
      body: {
        bg: 'primary',
      },
      '.post': {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        alignItems: 'center',
        color: 'paragraph',
        p: {
          fontWeight: () => (colorMode === 'dark' ? '400' : '600'),
          fontSize: '1.2em',
          maxInlineSize: '66ch',
          wordBreak: 'break-word',
        },
        h2: {
          maxInlineSize: '100%',
          width: '100%',
          paddingBlockStart: 16,
          paddingInlineStart: 4,
          fontWeight: '700',
          fontSize: '2em',
          color: 'secondary',
        },
        h3: {
          width: '100%',
          maxInlineSize: '66ch',
          paddingInlineStart: 4,
          paddingBlockStart: 4,
          fontWeight: '600',
          fontSize: '1.5em',
          color: 'secondary',
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
        a: {
          color: 'secondary',
        },
      },
    }),
  },
});
