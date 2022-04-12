/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionCreatorWithPayload, AsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ActionCreator } from 'redux';

import { AppDispatch, appStore } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

type ActionPayload<A extends ActionCreator<any> | ActionCreatorWithPayload<any>> =
  A extends ActionCreatorWithPayload<infer P> ? (P extends undefined ? void : P) : never;

export const useAction = <A extends ActionCreator<any> | ActionCreatorWithPayload<any>>(
  action: A,
): ((payload: ActionPayload<A>) => void) => {
  return (payload: A extends ActionCreatorWithPayload<infer P> ? P : never) => {
    appStore.dispatch(action());
  };
};

// am i need thuz really?
export const useThunk =
  <T extends AsyncThunk<any, any, any>>(thunk: T) =>
  (payload: T extends AsyncThunk<any, infer A, any> ? A : never) =>
    appStore.dispatch(thunk(payload));
