import fs from 'fs';
import path from 'path';
import { IFrontmatter } from '../types/Frontmatter';
import { IPost } from '../types/Post';
import { ITag } from '../types/Tag';
import {
  extractFrontmatterFromFile,
  replaceDashesWithSpaces,
  replaceSpacesWithDashes,
  sortArrayAscending,
  sortArrayDescending,
} from './helpers';

const postsDir = path.join('posts');

export const getSortedTagList = (): ITag[] => {
  const allTags: ITag[] = [];

  const fileNames = fs.readdirSync(postsDir);

  fileNames.map((fileName) => {
    const frontmatter = extractFrontmatterFromFile(fileName, postsDir)
      .data as IFrontmatter;

    frontmatter.tags.forEach((tagName) => {
      const tagIndex = allTags.findIndex((tag) => tag.name === tagName);

      if (tagIndex === -1) {
        allTags.push({
          name: tagName,
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
    const frontmatter = extractFrontmatterFromFile(fileName, postsDir)
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
    const frontmatter = extractFrontmatterFromFile(fileName, postsDir)
      .data as IFrontmatter;

    if (frontmatter.tags.find((tag) => tag === tagName)) {
      posts.push({ slug: postSlug, ...frontmatter });
    }
  });

  return sortArrayDescending(posts, 'date');
};
