import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

interface BindPendingConfig<B extends ActionReducerMapBuilder<any>> {
  builder: B;
  actions: Array<AsyncThunk<any, any, any>>;
  /**  @default 'loading' */
  loadingKey?: string;
}

export const bindPending = <B extends ActionReducerMapBuilder<any>>(cfg: BindPendingConfig<B>) => {
  const { builder, actions, loadingKey = 'loading' } = cfg;

  for (const action of actions) {
    builder
      .addCase(action.pending, (state) => {
        state[loadingKey] = true;
        return state;
      })
      .addCase(action.fulfilled, (state) => {
        state[loadingKey] = false;
        return state;
      })
      .addCase(action.rejected, (state) => {
        state[loadingKey] = false;
        return state;
      });
  }
  return builder;
};
