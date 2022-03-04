import { Container, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

import { formatDate } from '../lib/date';
import { getPosts } from '../lib/posts';

interface Params {
  posts: [{ title: string; date: string; id: string; description: string; howItTakes: string }];
}

export default function Home({ posts }: Params) {
  return (
    <Container maxW={{ base: '300px', sm: '500px', md: '600px', lg: '700px' }}>
      <Head>
        <title>Blog de tomas birbe</title>
        <meta content="Blog personal de Tomas Birbe" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Stack paddingBlockStart={6} spacing={6}>
        <Text as="h1" fontSize="3.5em" fontWeight="900" textAlign="center">
          Blommy
        </Text>
        {posts.map((post) => {
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <a>
                <Stack
                  _hover={{ outline: '1px solid' }}
                  borderRadius="10px"
                  color="title"
                  outline="none"
                  padding={5}
                  spacing={3}
                  transition="all 150ms ease-in-out"
                >
                  <Text as="h2" fontSize="2em" fontWeight="600">
                    {post.title}
                  </Text>
                  <Text>{post.description}</Text>
                  <Stack align="center" flexDirection="row" justify="space-between">
                    <Text fontSize={16}>{formatDate(post.date)}</Text>
                    <Text align="end">{post.howItTakes}</Text>
                  </Stack>
                </Stack>
              </a>
            </Link>
          );
        })}
      </Stack>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}
