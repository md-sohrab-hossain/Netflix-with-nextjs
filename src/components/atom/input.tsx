import React from 'react';

export interface inputTextProps {
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputTextProps> = ({ placeholder, type = 'text', onChange }) => {
  return <input className="a-input" type={type} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
