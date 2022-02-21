import { GetStaticProps } from 'next';
import TagBubble from '../components/TagBubble';
import { getSortedTagList } from '../lib/tags';
import { ITag } from '../types/Tag';

const Tags = ({ allTags }: { allTags: ITag[] }) => {
  return (
    <>
      {allTags.map((tag) => (
        <TagBubble key={tag.name} name={tag.name} />
      ))}
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
