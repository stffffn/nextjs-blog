import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from '../types/Post';
import { IFrontmatter } from '../types/Frontmatter';
import { IPostData } from '../types/PostData';
import { sortArrayAscending, sortArrayDescending } from './helpers';

const postsDir = path.join('posts');

export const getSortedPostsData = (): IPost[] => {
  const fileNames = fs.readdirSync(postsDir);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const frontmatter = extractFrontmatterFromFile(fileName)
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
  const { data, content } = extractFrontmatterFromFile(`${slug}.md`);

  return {
    slug,
    ...(data as IFrontmatter),
    content,
  };
};

const extractFrontmatterFromFile = (fileName: string) => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return matter(fileContent);
};
