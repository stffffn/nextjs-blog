import { GetStaticPaths } from 'next';
import Link from 'next/link';
import React from 'react';
import Date from '../components/Date';
import { replaceSpacesWithDashes } from '../lib/helpers';
import { getAllPostSlugs, getPostData } from '../lib/posts';
import { IPostData } from '../types/PostData';
import { ISlug } from '../types/Slug';

const PostContent = ({
  postData: { title, date, tags, contentHtml },
}: {
  postData: IPostData;
}) => {
  return (
    <>
      <div>{title}</div>
      <Date dateString={date}></Date>
      <div>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Link href={`/tag/${replaceSpacesWithDashes(tag)}`}>
              <a>#{tag}</a>
            </Link>{' '}
          </React.Fragment>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: ISlug) => {
  const postData = getPostData(slug);

  return {
    props: { postData },
  };
};

export default PostContent;
