import * as React from 'react';
// libs
import Head from 'next/head';
import { AppProps } from 'next/app';
// providers
import { ThemeProvider } from 'styled-components';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>Shop</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    <GlobalStyles />
  </div>
);

export default MyApp;
