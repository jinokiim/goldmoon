import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeConfig from '../theme';
import ThemePrimaryColor from '../components/ThemePrimaryColor';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';

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
          <SnackbarProvider
            dense
            maxSnack={1}
            autoHideDuration={1000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </ThemePrimaryColor>
      </ThemeConfig>
    </>
  );
};

export default MyApp;
