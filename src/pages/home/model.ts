import { forward } from '@entities/app-store/lsm';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const pageEntered = createAction('home-page-entered');

const startPageTh = createAsyncThunk('home-page-start-th', async (_, { dispatch }) => {
  const pet = await dispatch(api.endpoints.getPetById.initiate({ petId: 1 }));

  dispatch(action1);
  dispatch(action2);
  // mock every action
});

export interface HomePageState {
  loading: false;
}

forward({
  from: pageEntered,
  to: startPageTh,
});

export const slice = createSlice({
  name: 'home-page',
  initialState: {
    name: '',
    setted: false,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(startPageTh.fulfilled, (state, { payload }) => {
      if (!state.name) state.setted = true;
    }),
});

// !Todo -> createModel<State>() : { slice, actions, useModelSelector ??? }

// Test -> thunk can not be tested
