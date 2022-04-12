import { ReactNode } from 'react';

interface GridProps {
  elInRow?: 2 | 3 | 4;
  children: ReactNode;
}

export const Grid = (props: GridProps) => {
  const { elInRow, children } = props;

  const className = elInRow === 2 ? 'grid-2' : elInRow === 3 ? 'grid-3' : 'grid-4';

  return <div className={className}>{children}</div>;
};
