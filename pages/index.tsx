import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import PostData from '../components/PostData';
import { getSortedPostsData } from '../lib/posts';
import { IPost } from '../types/Post';

const Home = ({ allPosts }: { allPosts: IPost[] }) => {
  return (
    <>
      <Head>
        <title>Blog | Steffen Weitz</title>
        <meta name="description" content="Blog of Steffen Weitz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
