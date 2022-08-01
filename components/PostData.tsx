import Link from 'next/link';
import React from 'react';
import { IPost } from '../types/Post';
import Date from './Date';
import Tag from './Tag';

const PostData: React.VFC<{
  post: IPost;
  headlineClickable?: boolean;
}> = ({ post: { slug, title, date, tags }, headlineClickable = true }) => {
  return (
    <>
      <h1 className="text-2xl font-medium">
        {headlineClickable ? (
          <Link href={`/${slug}`}>
            <a className="hv:hover:text-blue-600 dark:hv:hover:text-blue-500 transition-colors ease-in-out duration-200">
              {title}
            </a>
          </Link>
        ) : (
          <>{title}</>
        )}
      </h1>
      <Date dateString={date} />
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </>
  );
};

export default PostData;
