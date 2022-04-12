import { authModel } from '@features/auth';
import { api } from '.';

export const request = (info: RequestInfo, body?: RequestInit) => {
  return fetch(info, body)
    .catch(() => {
      api.relogin();
    })
    .then((r) => {
      authModel.slice.actions.setToken(r);
    });
};
