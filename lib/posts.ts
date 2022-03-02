import fs from 'fs';
import path from 'path';
import { IPost } from '../types/Post';
import { IFrontmatter } from '../types/Frontmatter';
import { IPostData } from '../types/PostData';
import {
  extractFrontmatterFromFile,
  sortArrayAscending,
  sortArrayDescending,
} from './helpers';

const postsDir = path.join('posts');

export const getSortedPostsData = (): IPost[] => {
  const fileNames = fs.readdirSync(postsDir);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const frontmatter = extractFrontmatterFromFile(fileName, postsDir)
      .data as IFrontmatter;

    sortArrayAscending(frontmatter.tags);

    return { slug, ...frontmatter };
  });

  return sortArrayDescending(posts, 'date');
};

export const getAllPostSlugs = (): { params: { slug: string } }[] => {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '');

    return {
      params: { slug },
    };
  });
};

export const getPostData = (slug: string): IPostData => {
  const matter = extractFrontmatterFromFile(`${slug}.md`, postsDir);
  const content = matter.content;
  let data = matter.data;

  data = { ...data, tags: sortArrayAscending(data.tags) };

  return {
    slug,
    ...(data as IFrontmatter),
    content,
  };
};
