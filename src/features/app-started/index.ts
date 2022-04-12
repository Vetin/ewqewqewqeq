import { authModel } from '@features/auth';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exec = (...fns: Array<() => Promise<any>>) => fns.map((fn) => fn());

const initAnalytic = () => Promise.resolve();

export const appStarted = async () => {
  await Promise.all(exec(authModel.authorize, initAnalytic));
};
