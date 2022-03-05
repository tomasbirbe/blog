import fs from 'fs';
import path from 'path';

import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

export function getPosts(locales) {
  const allPostsData = locales.map((locale) => {
    const postsDirectory = path.join(process.cwd(), `/posts/${locale}`);
    const fileNames = fs.readdirSync(postsDirectory);

    const postsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');

      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContent);

      return {
        id,
        ...matterResult.data,
      };
    });

    return postsData;
    // return { postsData, locale };
  });

  return { es: allPostsData[0], en: allPostsData[1] };

  /* 
    This way to return blogs with differents languages are easy but you have to
    remember the order of locales in next.config.js

    If you want to do it without this knowledge, you can uncomment line 28, 40, ,42, 43
    and comment lines 27 and 31.

    I prefer the simple way because of that. It's simple and more intuitive
  */

  // return {
  //   [allPostsData[0].locale]: allPostsData[0].postsData,
  //   [allPostsData[1].locale]: allPostsData[1].postsData,
  // };
}

export function getPostsIds(locales) {
  const allPostsIds = locales.map((locale) => {
    const postsDirectory = path.join(process.cwd(), `/posts/${locale}`);

    const fileNames = fs.readdirSync(postsDirectory);

    const postsIds = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');

      return { params: { id }, locale };
    });

    return postsIds;
  });

  /* 
  allPostsIds have 2 arrays with staticPaths, but we need an array of staticPaths.
  So, we transform an array like this 
  [array of staticPaths1, array of staticPaths2] to [staticPaths] 
  */

  return allPostsIds.flat();
}

export async function getPost(id: string, lang: string) {
  const fullPath = path.join(process.cwd(), `/posts/${lang}/${id}.md`);

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
