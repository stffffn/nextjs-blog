import { GetStaticPaths } from 'next';
import Post from '../../components/Post';
import { getAllTagSlugs, getPostsByTagSlug } from '../../lib/tags';
import { IPost } from '../../types/Post';
import { ISlug } from '../../types/Slug';

export default ({ posts }: { posts: IPost[] }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post}></Post>
      ))}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTagSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: ISlug) => {
  const posts = getPostsByTagSlug(slug);

  return {
    props: { posts },
  };
};
