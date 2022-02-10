import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { IFrontmatter } from '../types/Frontmatter';
import { IPost } from '../types/Post';
import { ITag } from '../types/Tag';
import {
  replaceDashesWithSpaces,
  replaceSpacesWithDashes,
  sortArrayAscending,
} from './helpers';

const postsDir = path.join('posts');

export const getSortedTagList = (): ITag[] => {
  let allTags: ITag[] = [];

  const fileNames = fs.readdirSync(postsDir);

  fileNames.map((fileName) => {
    const frontmatter = extractFrontmatterFromFile(fileName)
      .data as IFrontmatter;

    frontmatter.tags.forEach((tagName) => {
      const tagIndex = allTags.findIndex((tag) => tag.name === tagName);

      if (tagIndex !== -1) {
        allTags[tagIndex].count++;
      } else {
        allTags.push({
          name: tagName,
          count: 1,
          slug: replaceSpacesWithDashes(tagName),
        });
      }
    });
  });

  return sortArrayAscending(allTags, 'name');
};

export const getAllTagSlugs = (): { params: { slug: string } }[] => {
  const fileNames = fs.readdirSync(postsDir);
  const slugs: { params: { slug: string } }[] = [];

  fileNames.forEach((fileName) => {
    const frontmatter = extractFrontmatterFromFile(fileName)
      .data as IFrontmatter;

    frontmatter.tags.forEach((tagName) => {
      const slug = replaceSpacesWithDashes(tagName);
      if (!slugs.find((el) => el.params.slug === slug)) {
        slugs.push({ params: { slug } });
      }
    });
  });

  return slugs;
};

export const getPostsByTagSlug = (slug: string): IPost[] => {
  const tagName = replaceDashesWithSpaces(slug);
  const fileNames = fs.readdirSync(postsDir);
  const posts: IPost[] = [];

  fileNames.forEach((fileName) => {
    const postSlug = fileName.replace('.md', '');
    const frontmatter = extractFrontmatterFromFile(fileName)
      .data as IFrontmatter;

    if (frontmatter.tags.find((tag) => tag === tagName)) {
      posts.push({ slug: postSlug, ...frontmatter });
    }
  });

  return posts;
};

const extractFrontmatterFromFile = (fileName: string) => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return matter(fileContent);
};
