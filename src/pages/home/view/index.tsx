import { useStore } from 'effector-react';

import { paths } from '@pages/paths';

import { Link } from '@shared/libs/router/react/link';

import { homePageModel } from '../model';

const { $title } = homePageModel;

export const HomePage = () => {
  const title = useStore($title);

  return (
    <div>
      {title},
      <div onClick={() => 'hello'} role="button" tabIndex={-1} onKeyDown={() => {}}>
        <Link to={paths.users()}>231</Link>
      </div>
    </div>
  );
};
