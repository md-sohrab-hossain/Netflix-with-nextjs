import Head from 'next/head';
import React from 'react';
import SignInForm from 'components/molecules/signInForm';

const Login: React.FC<{}> = ({}) => {
  const handleSubmit = (e: React.MouseEvent<HTMLElement>, email: string) => {
    e.preventDefault();
    alert(email);
  };

  return (
    <div className="p-login">
      <Head>
        <title>NetFlix SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignInForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
