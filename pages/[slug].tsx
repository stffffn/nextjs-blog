import { GetStaticPaths } from 'next';
import Link from 'next/link';
import React from 'react';
import Date from '../components/Date';
import { replaceSpacesWithDashes } from '../lib/helpers';
import { getAllPostSlugs, getPostData } from '../lib/posts';
import { IPostData } from '../types/PostData';
import { ISlug } from '../types/Slug';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = ({
  postData: { title, date, tags, content },
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
      <ReactMarkdown
        className="prose"
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={dracula}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
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
