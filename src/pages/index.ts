import { type Router } from '@shared/libs/router';
import { renderRoutes } from '@shared/libs/router/react';

import { Error404 } from './error-404';

export const Pages = ({ router }: { router: Router }) =>
  renderRoutes({ router, NotFound: Error404 });
