import { router } from '@features/router';

import { Pages } from '@pages/index';
import { routes } from '@pages/routes';

import './styles/global.css';

router.addRoutes(routes);

export const App = () => {
  return <Pages router={router} />;
};
