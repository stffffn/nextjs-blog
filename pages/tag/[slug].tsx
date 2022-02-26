import { GetStaticPaths } from 'next';
import Head from '../../components/Head';
import PostData from '../../components/PostData';
import TagBubble from '../../components/TagBubble';
import { replaceDashesWithSpaces } from '../../lib/helpers';
import {
  getAllTagSlugs,
  getPostsByTagSlug,
  getSortedTagList,
} from '../../lib/tags';
import { IPost } from '../../types/Post';
import { ISlug } from '../../types/Slug';
import { ITag } from '../../types/Tag';

const PostsByTag = ({
  posts,
  slug,
  allTags,
}: {
  posts: IPost[];
  slug: string;
  allTags: ITag[];
}) => {
  const tagName = replaceDashesWithSpaces(slug);

  return (
    <>
      <Head
        title={`#${tagName} / Blog / Steffen Weitz`}
        description={`All posts tagged with #${tagName}.`}
        urlPath={`/tag/${slug}`}
      />

      {allTags.map((tag) => (
        <TagBubble active={tag.slug === slug} key={tag.name} name={tag.name} />
      ))}

      {posts.map((post) => (
        <article key={post.title} className="mt-6">
          <PostData post={post}></PostData>
        </article>
      ))}
    </>
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
  const allTags = getSortedTagList();

  return {
    props: { posts, slug, allTags },
  };
};

export default PostsByTag;
