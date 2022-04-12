import { useLayoutEffect } from 'react';
import { useAction } from '@entities/app-store';

import { pageEntered } from './model';

const HomePage = () => {
  const pageStarted = useAction(pageEntered);
  useLayoutEffect(() => {
    pageStarted();
  }, [pageStarted]);

  if (petQuery.isLoading) return null;

  return <div>home</div>;
};
