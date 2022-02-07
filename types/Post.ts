import { IFrontmatter } from './Frontmatter';

export interface IPost extends IFrontmatter {
  slug: string;
}
