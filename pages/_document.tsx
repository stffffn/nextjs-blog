import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />
      <body className="bg-white dark:bg-zinc-800 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
