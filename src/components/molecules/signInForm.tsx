import { Button } from 'components/atom/button';
import Heading from 'components/atom/heading';
import Input from 'components/atom/input';
import React from 'react';

export interface signInProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  error?: boolean;
}

const SignInForm: React.FC<signInProps> = ({ onChange, handleSubmit, error = false }) => {
  return (
    <form className="m-form" onSubmit={handleSubmit}>
      <Heading>Sign In</Heading>
      <div className="m-form__input">
        <Input placeholder="Email Address" type="email" onChange={onChange} />
        {error && <p>please enter a valid email address</p>}
      </div>

      <Button modifiers="red" type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
