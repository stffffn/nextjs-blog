import { GetStaticProps } from 'next';
import Head from 'next/head';
import Post from '../components/Post';
import { getSortedPostsData } from '../lib/posts';
import { IPost } from '../types/Post';

export default ({ allPosts }: { allPosts: IPost[] }) => {
  return (
    <div>
      <Head>
        <title>Blog | Steffen Weitz</title>
        <meta name="description" content="Blog of Steffen Weitz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {allPosts.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getSortedPostsData();

  return {
    props: { allPosts },
  };
};
