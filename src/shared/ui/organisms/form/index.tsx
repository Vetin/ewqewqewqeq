import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  type: 'col' | 'row';
}

export const Form = (props: FormProps) => {
  const { type, children, ...formProps } = props;

  return (
    <form {...formProps} className={clsx(type, formProps.className)}>
      {children}
    </form>
  );
};
