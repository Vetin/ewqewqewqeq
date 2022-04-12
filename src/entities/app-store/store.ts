import { user } from '@entities/user';
import { configureStore } from '@reduxjs/toolkit';
import { lsm } from './lsm';

export const appStore = configureStore({
  reducer: {
    user: user.slice.reducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(lsm.middleware),
});

export type AppState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
