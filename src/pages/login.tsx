import Head from 'next/head';
import { useState } from 'react';
import SignInForm from 'components/molecules/signInForm';

const Login: React.FC<{}> = ({}) => {
  const [email, setEmail] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(email);
  };

  return (
    <div className="p-login">
      <Head>
        <title>NetFlix SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignInForm handleSubmit={handleSubmit} onChange={handleInputChange} />
    </div>
  );
};

export default Login;
