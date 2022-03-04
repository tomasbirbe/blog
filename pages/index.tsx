import { Container, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { getPosts } from '../lib/getPosts';

export default function Home() {
  return (
    <Container paddingBlockStart={6}>
      <Head>
        <title>Blog de tomas birbe</title>
        <meta content="Blog personal de Tomas Birbe" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Stack
        _hover={{ outline: '1px solid' }}
        borderRadius="10px"
        color="title"
        outline="none"
        padding={5}
        spacing={3}
        transition="all 150ms ease-in-out"
      >
        <Text fontSize={32}>Este es mi primer post</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem quod est,
          repellat adipisci sit beatae veniam repudiandae esse dignissimos, libero ab. Officia iure
          quisquam quis. A autem commodi iusto.
        </Text>
        <Text align="end">5 minutes read</Text>
      </Stack>
    </Container>
  );
}
