import Link from 'next/link';
import React from 'react';
import { IPost } from '../types/Post';
import Date from './Date';

export default ({ post: { slug, title, date, tags } }: { post: IPost }) => {
  return (
    <div>
      <Link href={`/${slug}`}>
        <a>{title}</a>
      </Link>
      <Date dateString={date}></Date>
      <div>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Link href={`/tag/${tag}`}>
              <a>#{tag}</a>
            </Link>{' '}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
