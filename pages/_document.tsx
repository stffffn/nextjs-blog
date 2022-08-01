import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const Document: React.VFC = () => {
  return (
    <Html lang="en-US">
      <Head />
      <body className="bg-white dark:bg-zinc-800 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
