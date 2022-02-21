import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Blog / Steffen Weitz</title>
        <meta name="description" content="Blog of Steffen Weitz" />
        <meta name="author" content="Steffen Weitz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
