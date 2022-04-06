import { createDomain, restore, sample } from 'effector';

import { homePageHatch as hatch } from '../hatch';

const model = createDomain();

model.onCreateStore((s) => s.reset(hatch.left));

export const createNameFx = model.effect(() => '321'.repeat(321));

export const $title = restore(createNameFx, '');

sample({
  clock: hatch.opened,
  target: createNameFx,
});

export const $pagePending = restore(
  createNameFx.doneData.map(() => false),
  true,
);
