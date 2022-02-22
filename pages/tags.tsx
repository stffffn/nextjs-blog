import { GetStaticProps } from 'next';
import Head from 'next/head';
import TagBubble from '../components/TagBubble';
import { getSortedTagList } from '../lib/tags';
import { ITag } from '../types/Tag';

const Tags = ({ allTags }: { allTags: ITag[] }) => {
  return (
    <>
      <Head>
        <title>Tags / Blog / Steffen Weitz</title>
      </Head>

      <div className="flex flex-wrap">
        {allTags.map((tag) => (
          <TagBubble key={tag.name} name={tag.name} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allTags = getSortedTagList();

  return {
    props: { allTags },
  };
};

export default Tags;
