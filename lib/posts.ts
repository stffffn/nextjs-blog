import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { IPost } from '../types/Post';
import { IFrontmatter } from '../types/Frontmatter';
import { IPostData } from '../types/PostData';

const postsDir = path.join('posts');

export const getSortedPostsData = (): IPost[] => {
  const fileNames = fs.readdirSync(postsDir);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace('.md', '');

    const filePath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const frontmatter = matter(fileContent).data as IFrontmatter;

    frontmatter.tags.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

    return { slug, ...frontmatter };
  });

  return posts.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getAllPostSlugs = (): { params: { slug: string } }[] => {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((filename) => {
    return {
      params: { slug: filename.replace('.md', '') },
    };
  });
};

export const getPostData = (slug: string): IPostData => {
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);

  const contentHtml = marked(content);

  return {
    slug,
    ...(data as IFrontmatter),
    contentHtml,
  };
};
