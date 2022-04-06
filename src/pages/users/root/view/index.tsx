import { useEvent, useStore } from 'effector-react';

import { paths } from '@pages/paths';

import { Link } from '@shared/libs/router/react/link';

import { usersPageModel } from '../model';

const { $users, $query, updateQuery } = usersPageModel;

export const UsersPage = () => {
  const query = useStore($query);
  const users = useStore($users);
  const handleQueryUpdate = useEvent(
    updateQuery.prepend((e: React.ChangeEvent<HTMLInputElement>) => e.target.value),
  );
  return (
    <div>
      <Link to={paths.home()}>home</Link>
      <div>
        <input value={query} onChange={handleQueryUpdate} />
      </div>
      {users.map((user, idx) => (
        <div key={idx} className="relative">
          {user.str}
          <Link
            to={paths.userPage(user.id.toString())}
            className="absolute min-h-full min-w-full w-100 z-50 left-0 top-0"
          />
        </div>
      ))}
    </div>
  );
};
