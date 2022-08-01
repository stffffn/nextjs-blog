import { GetStaticProps } from 'next';
import React from 'react';
import Head from '../components/Head';
import TagBubble from '../components/TagBubble';
import { getSortedTagList } from '../lib/tags';
import { ITag } from '../types/Tag';

const Tags: React.VFC<{ allTags: ITag[] }> = ({ allTags }) => {
  return (
    <>
      <Head title="Tags / Bla Bli Blog" urlPath="/tags" />

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
