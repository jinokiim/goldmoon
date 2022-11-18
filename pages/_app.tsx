import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
