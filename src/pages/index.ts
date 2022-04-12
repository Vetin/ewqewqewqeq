import { RouteConfig } from 'react-router-config';
import { Home } from './home';
import { LoginPage } from './login';
import { paths } from './paths';

const DEAD_CODE = 2;

export const routes: RouteConfig['routes'] = [
  {
    path: paths.home(),
    component: Home,
  },
  {
    path: paths.login(),
    component: LoginPage,
  },
];

console.log(DEAD_CODE);
