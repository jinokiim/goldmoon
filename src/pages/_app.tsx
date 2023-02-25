import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeConfig from '../theme';
import ThemePrimaryColor from '../components/ThemePrimaryColor';
import { SnackbarProvider } from 'notistack';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
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
