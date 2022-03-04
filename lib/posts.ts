import fs from 'fs';
import path from 'path';

import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

const enPostsDirectory = path.join(process.cwd(), 'posts/en');
const esPostsDirectory = path.join(process.cwd(), 'posts/es');

export function getPosts() {
  const enFileNames = fs.readdirSync(enPostsDirectory);
  const esFileNames = fs.readdirSync(esPostsDirectory);

  const allEnDataPosts = enFileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(enPostsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });

  const allDataEsDataPosts = esFileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(esPostsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });

  return { en: allEnDataPosts, es: allDataEsDataPosts };
}

export function getPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContent);

  const processedContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
