import '../styles/main.scss';

import App from 'next/app';
import { useState, useEffect } from 'react';
import type { AppProps, AppContext } from 'next/app';
import { useRouter } from 'next/router';
import { magic } from 'libs/magic-client';
import { Loading } from 'components/atom/loading';
import Layout from 'components/organism/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const isLoggedIn = await (magic as any)?.user?.isLoggedIn();
      if (isLoggedIn) {
        router.push('/');
      } else {
        router.push('/login');
      }
    })();

    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Loading overlay />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
