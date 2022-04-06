import { createDomain, restore, sample } from 'effector';
import { parse } from 'qs';

import { history, router } from '@features/router';

import { HatchState, createPath } from '@shared/libs/router';

import { usersPageHatch as hatch } from '../hatch';

const model = createDomain();

model.onCreateStore((s) => s.reset(hatch.left));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchUsersFx = model.effect(({ query }: HatchState<any>) => {
  const generateUsers = () => {
    const addId = (arr: string[]) =>
      arr.map((str) => ({ str, id: Math.random().toString(32).slice(2) }));
    return addId(Array(20).fill(query.name || 'rrr'));
  };
  return generateUsers();
});

export const $users = restore(fetchUsersFx, []);

sample({
  clock: [hatch.opened, hatch.updated],
  target: fetchUsersFx,
});

export const updateQuery = model.event<string>();
export const $query = restore(updateQuery, '');

sample({
  clock: $query,
  source: router.$activeRoute,
  filter: Boolean,
  fn: (route, query) => {
    const updatedQuery = { ...parse(history.location.search.split('?')[1]), name: query };
    return createPath({
      basePath: route.path,
      params: {},
      query: updatedQuery,
    });
  },
  target: router.replace,
});
