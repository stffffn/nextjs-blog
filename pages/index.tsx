import { GetStaticProps } from 'next';
import React from 'react';
import PostData from '../components/PostData';
import { getSortedPostsData } from '../lib/posts';
import { IPost } from '../types/Post';

const Home: React.VFC<{ allPosts: IPost[] }> = ({ allPosts }) => {
  return (
    <>
      {allPosts.map((post) => (
        <section key={post.title} className="mb-6">
          <PostData post={post}></PostData>
        </section>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getSortedPostsData();

  return {
    props: { allPosts },
  };
};

export default Home;
