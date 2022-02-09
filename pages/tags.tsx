import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getSortedTagList } from '../lib/tags';
import { ITag } from '../types/Tag';

export default ({ allTags }: { allTags: ITag[] }) => {
  return (
    <div>
      {allTags.map((tag, index) => (
        <div key={index}>
          <Link href={`/tag/${tag.slug}`}>
            <a>{`${tag.name} (${tag.count})`}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allTags = getSortedTagList();

  return {
    props: { allTags },
  };
};
