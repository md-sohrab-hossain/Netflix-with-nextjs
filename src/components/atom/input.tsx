import React from 'react';

export interface inputProps {
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({ placeholder, type = 'text', onChange }) => {
  return <input className="a-input" type={type} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
