import Link from 'next/link';
import React from 'react';
import { replaceSpacesWithDashes } from '../lib/helpers';
import { IPost } from '../types/Post';
import Date from './Date';

const Post = ({ post: { slug, title, date, tags } }: { post: IPost }) => {
  return (
    <div>
      <Link href={`/${slug}`}>
        <a>{title}</a>
      </Link>
      <Date dateString={date}></Date>
      <div>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Link href={`/tag/${replaceSpacesWithDashes(tag)}`}>
              <a>#{tag}</a>
            </Link>{' '}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Post;
