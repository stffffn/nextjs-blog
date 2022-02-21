import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="dark:bg-zinc-800 dark:text-white">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
