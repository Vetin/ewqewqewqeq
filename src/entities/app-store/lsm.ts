/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  AsyncThunk,
  createListenerMiddleware,
} from '@reduxjs/toolkit';

export const lsm = createListenerMiddleware();

export const forward = <
  T extends AsyncThunk<any, any, any>,
  A extends T extends AsyncThunk<any, infer A, any>
    ? ActionCreatorWithPayload<A>
    : ActionCreatorWithPayload<any> | ActionCreatorWithoutPayload<any>,
>(config: {
  from: A;
  to: T;
}) => {
  return lsm.startListening({
    //@ts-expect-error broken types
    actionCreator: config.to,
    //@ts-expect-error broken types
    effect: ({ payload }, { dispatch }) => dispatch(config.thunk(payload)),
  });
};
