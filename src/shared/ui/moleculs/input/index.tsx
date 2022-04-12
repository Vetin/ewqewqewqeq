import { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = (props: InputProps) => {
  const { label = '', error = '', ...inputProps } = props;

  return (
    <div>
      {label && <label htmlFor={inputProps.id || ''}>{label}</label>}
      <input {...inputProps} />
      <span>&nbsp;{error}</span>
    </div>
  );
};
