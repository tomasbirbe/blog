import { Container, Select, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

import { useLang } from '../context/LangContext';
import { formatDate } from '../lib/date';
import { getPosts } from '../lib/posts';

interface Params {
  postsData: [
    { en: [{ title: string; date: string; id: string; description: string; howItTakes: string }] },
    { es: [{ title: string; date: string; id: string; description: string; howItTakes: string }] },
  ];
}

export default function Home({ postsData }: Params) {
  const { lang, setLang } = useLang();

  return (
    <Container maxW={{ base: '100%', sm: '500px', md: '600px', lg: '700px' }}>
      <Head>
        <title>Blommy</title>
        <meta
          content="Hola! Soy Tomas Birbe y este es mi blog personal. Publico y documento librerias, frameworks y metodologias que voy probando con la esperanza de ayudar a alguien que lo necesite (como yo)"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Stack align="flex-end" paddingBlockStart={4}>
        <Select defaultValue={lang} width="125px" onChange={(e) => setLang(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </Select>
      </Stack>
      <Stack paddingBlockStart={6} spacing={6}>
        <Text as="h1" fontSize="4em" fontWeight="900" textAlign="center">
          Blommy
        </Text>
        {postsData[`${lang}`].map((post) => {
          return (
            <Link key={post.id} href={`/posts/${post.id}`} locale={lang}>
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
                    <Text fontSize={16}>{formatDate(post.date, lang)}</Text>
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

export async function getStaticProps({ locales }) {
  const postsData = getPosts(locales);

  return {
    props: {
      postsData,
    },
  };
}
