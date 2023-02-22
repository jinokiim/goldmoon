import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="골프 동호회" />
          <meta name="keywords" lang="ko" content="광교 골프 동호회" />
          <meta name="keywords" lang="en" content="Gwang-gyo golf club" />
          <meta name="author" content="Jinho Kim" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="골드문" />
          <meta property="og:site_name" content="GOLDMOON" />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/jinokiim/goldmoon/main/goldmoon_logo.png"
          />
          <meta property="og:url" content="https://gold-moon.vercel.app/" />
          <meta property="og:description" content="골프채를 드는 문제아들" />
          <meta property="og:locale" content="ko_KR" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => materialSheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>
  };
};
