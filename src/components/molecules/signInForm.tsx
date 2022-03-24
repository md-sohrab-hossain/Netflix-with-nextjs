import { Button } from 'components/atom/button';
import Heading from 'components/atom/heading';
import Input from 'components/atom/input';
import React from 'react';

export interface signInProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  error?: string;
  message?: string;
}

const SignInForm: React.FC<signInProps> = ({ onChange, handleSubmit, error, message }) => {
  return (
    <form className="m-form" onSubmit={handleSubmit}>
      <Heading>Sign In</Heading>
      <div className="m-form__input">
        <Input placeholder="Email Address" type="email" onChange={onChange} />
        {error && <p className="m-form__input--error">{error}</p>}
      </div>

      <Button modifiers="red" type="submit">
        {message}
      </Button>
    </form>
  );
};

export default SignInForm;
