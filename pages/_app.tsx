import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Box, FullHeight, ThemeProvider } from '@smg-automotive/components';

import { Brand } from 'types/brand';

import Fonts from '../components/Fonts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>SMG automotive coding challenge</title>
        <link rel="icon" href="/smg-automotive.png" />
      </Head>
      <ThemeProvider theme={Brand.AutoScout24}>
        <Fonts />
        <FullHeight>
          <Box maxWidth="container.xl" margin="0 auto" py="md">
            <Component {...pageProps} />
          </Box>
        </FullHeight>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
