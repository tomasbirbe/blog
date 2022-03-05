import { ChakraProvider } from '@chakra-ui/react';

import { LangProvider } from '../context/LangContext';
import { theme } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <LangProvider>
          <Component {...pageProps} />
        </LangProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
