import { Container } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Container bg="red.500">
      <Head>
        <title>Blog de tomas birbe</title>
        <meta content="Blog personal de Tomas Birbe" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <h1>Hola!</h1>
    </Container>
  );
}
