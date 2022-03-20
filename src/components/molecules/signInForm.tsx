import { Button } from 'components/atom/button';
import Heading from 'components/atom/heading';
import Input from 'components/atom/input';
import type { NextPage } from 'next';
import React from 'react';

export interface signInProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  error?: string;
}

const SignInForm: React.FC<signInProps> = ({ onChange, handleSubmit, error }) => {
  return (
    <form className="m-form" onSubmit={handleSubmit}>
      <Heading>Sign In</Heading>
      <div className="m-form__input">
        <Input placeholder="Email Address" type="email" onChange={onChange} />
        {error && <p className="m-form__input--error">{error}</p>}
      </div>

      <Button modifiers="red" type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
