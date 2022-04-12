import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  email: string;
}

type State = Maybe<User>;

export const slice = createSlice({
  name: 'user',
  initialState: null as State,
  reducers: {
    setUser(_, { payload }: PayloadAction<State>) {
      return payload;
    },
    removeUser() {
      return null;
    },
  },
});
