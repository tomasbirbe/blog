import { Container, Stack, Text } from '@chakra-ui/react';

import { getPostData, getPostsIds } from '../../lib/posts';

export default function Post({ post }) {
  return (
    <Container maxW={{ base: '100%', sm: '500px', md: '600px', lg: '700px' }}>
      <Stack paddingBlock={16} paddingInline={2} spacing={10}>
        <Text as="h1" fontSize="3.5em" fontWeight="600" textAlign="center">
          {post.title}
        </Text>
        <div className="post" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </Stack>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getPostsIds();

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
}
