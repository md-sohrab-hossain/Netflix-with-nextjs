import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SignInForm from 'components/molecules/signInForm';
import { loginWithMagic } from 'libs/magic-login';

const Login: React.FC<{}> = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, [router.events]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const regEx = /^([^0-9])[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (regEx.test(email)) {
      const login = await loginWithMagic(email);
      login && router.push('/');
      setMessage('');
    } else {
      setIsLoading(false);
      setMessage('Enter a valid email address');
    }
  };

  return (
    <div className="p-login">
      <Head>
        <title>NetFlix SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignInForm
        message={isLoading ? 'Loading..' : 'Sign In'}
        error={message}
        handleSubmit={handleUserLogin}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Login;
