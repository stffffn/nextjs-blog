import { IPost } from './Post';

export interface IPostData extends IPost {
  contentHtml: string;
}
