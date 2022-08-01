import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import Head from '../components/Head';
import React from 'react';

const App: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head urlPath="/" />

      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
