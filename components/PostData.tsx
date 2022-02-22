import Link from 'next/link';
import { IPost } from '../types/Post';
import Date from './Date';
import Tag from './Tag';

const PostData = ({
  post: { slug, title, date, tags },
  headlineClickable = true,
}: {
  post: IPost;
  headlineClickable?: boolean;
}) => {
  return (
    <>
      <h1 className="text-2xl font-medium">
        {headlineClickable ? (
          <Link href={`/${slug}`}>
            <a className="hv:hover:text-blue-600 dark:hv:hover:text-blue-500 transition-colors ease-in-out">
              {title}
            </a>
          </Link>
        ) : (
          <>{title}</>
        )}
      </h1>
      <Date dateString={date} />
      <div>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </>
  );
};

export default PostData;
