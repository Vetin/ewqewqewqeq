/* eslint-disable @typescript-eslint/no-explicit-any */
import { Event } from 'effector';
import { FC } from 'react';

// how to increase
export const paths = {
  home: () => '/',
  users: () => '/users',
  userPage: (userId = ':userId') => `/users/${userId}`,
};

interface RouteData<P extends string[]> {
  path: string;
  params?: P;
}

type Routes<RD extends RouteData<any>> = Record<string, RD>;

type RouteActionParams<>

type Navigate<R extends Routes<any>> = Event<{
  name: keyof R;
  params: Record<R[keyof R], R[keyof R]['params']>;
}>;

type RouterRoutes<R extends Routes<any>> = {
  [Key in keyof R]: {

  }
}

interface Router<R extends Routes<any>> {
  push: Navigate<R>;
  replace: Navigate<R>;
  goBack: Event<void>;
  routes:
}

// @ts-expect-error testing
const createRouter = <R extends Routes>(routes: R): Router<R> => void 0;

const r = createRouter({
  home: {
    path: '/',
  },
  users: {
    path: '/users',
  },
  userPage: {
    path: '/user/:userId',
    params: ['userId'] as const,
  },
});
