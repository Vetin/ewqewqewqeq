import { useStore } from 'effector-react';

import { userPageModel } from '../model';

const { $id } = userPageModel;

export const UserPage = () => {
  const id = useStore($id);

  return <div>user id: ${id}</div>;
};
