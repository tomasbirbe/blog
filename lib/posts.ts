import fs from 'fs';
import path from 'path';

import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allDataPosts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allDataPosts;
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
