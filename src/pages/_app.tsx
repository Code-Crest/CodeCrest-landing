import { useEffect } from 'react';

import { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
