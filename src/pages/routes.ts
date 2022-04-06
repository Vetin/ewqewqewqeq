import { Route } from '@shared/libs/router';
import { lazyView } from '@shared/libs/router/lib/lazy-view';

import { homePageHatch } from './home/hatch';
import { paths } from './paths';
import { usersPageHatch } from './users/root/hatch';
import { userPageHatch } from './users/userId/hatch';

export const createRoutes = <R extends Route<any, any>[]>(routes: R): R => routes;

const routes = createRoutes([
  {
    path: paths.home(),
    hatch: homePageHatch,
    view: lazyView(() => import('./home/view').then((mod) => mod.HomePage)),
  },
  {
    path: paths.userPage(),
    hatch: homePageHatch,
    view: lazyView(() => import('./home/view').then((mod) => mod.HomePage)),
  },
]);

type RoutesPaths =
