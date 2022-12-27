import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeConfig from '../theme';
import ThemePrimaryColor from '../components/ThemePrimaryColor';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <ThemeConfig>
        <ThemePrimaryColor>
          <Component {...pageProps} />
        </ThemePrimaryColor>
      </ThemeConfig>
    </>
  );
};

export default MyApp;
