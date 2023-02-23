import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeConfig from '../theme';
import ThemePrimaryColor from '../components/ThemePrimaryColor';
import Head from 'next/head';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>골드문</title>
      </Head>
      <ThemeConfig>
        <ThemePrimaryColor>
          <div style={{ touchAction: 'manipulation' }}>
            <Component {...pageProps} />
          </div>
        </ThemePrimaryColor>
      </ThemeConfig>
    </>
  );
};

export default MyApp;
