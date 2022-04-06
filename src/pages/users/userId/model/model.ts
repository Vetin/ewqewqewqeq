import { createDomain, sample } from 'effector';

import { router } from '@features/router';

import { paths } from '@pages/paths';

import { userPageHatch as hatch } from '../hatch';

export const model = createDomain();

model.onCreateStore((s) => s.reset(hatch.left));

export const $id = model.store('');

sample({
  clock: hatch.opened.filterMap(({ params }) => params.userId),
  target: $id,
});

sample({
  clock: $id,
  filter: () => Math.random() > 0.5,
  fn: () => paths.home(),
  target: router.redirect,
});
