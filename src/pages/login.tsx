import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import SignInForm from 'components/molecules/signInForm';

const Login: React.FC<{}> = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    setMessage('');
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email) && email === 'sajal@gmail.com') router.push('/');
    !regEx.test(email) && setMessage('Please enter a valid email address!');
  };

  return (
    <div className="p-login">
      <Head>
        <title>NetFlix SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignInForm error={message} handleSubmit={handleSubmit} onChange={handleInputChange} />
    </div>
  );
};

export default Login;
