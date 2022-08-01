import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';

export const replaceSpacesWithDashes = (str: string): string => {
  return str.replace(/\s+/g, '-');
};

export const replaceDashesWithSpaces = (str: string): string => {
  return str.replace(/-/g, ' ');
};

export const sortArrayAscending = (arr: any[], key?: string): any[] => {
  return arr.sort((a, b) => {
    if (key) {
      a = a[key];
      b = b[key];
    }

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const sortArrayDescending = (arr: any[], key?: string): any[] => {
  return arr.sort((a, b) => {
    if (key) {
      a = a[key];
      b = b[key];
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const extractFrontmatterFromFile = (
  fileName: string,
  postsDir: string
): GrayMatterFile<string> => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return matter(fileContent);
};
