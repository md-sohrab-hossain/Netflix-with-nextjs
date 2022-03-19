import React from 'react';

export interface inputTextProps {
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<inputTextProps> = ({ placeholder, type = 'text', onChange }) => {
  return <input className="a-inputText" type={type} placeholder={placeholder} onChange={onChange} />;
};

export default InputText;
