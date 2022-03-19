import { Button } from 'components/atom/button';
import Heading from 'components/atom/heading';
import InputText from 'components/atom/inputText';
import React, { useState } from 'react';

export interface signInProps {
  handleSubmit: (e: React.MouseEvent<HTMLElement>, email: string) => void;
}
const SignInForm: React.FC<signInProps> = ({ handleSubmit }) => {
  const [email, setEmail] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form className="m-form">
      <Heading>Sign In</Heading>
      <div className="m-form__input">
        <InputText placeholder="Email Address" type="email" onChange={handleInputChange} />
        <p>please enter a valid email address</p>
      </div>

      <Button modifiers="red" onClick={e => handleSubmit(e, email)}>
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
