import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Action } from 'redux';

export type GetPayload<A> = A extends ActionCreatorWithPayload<infer P> ? P : never;

export interface TypedAction<A extends Action> {
  type: A['type'];
  payload: GetPayload<A>;
}
