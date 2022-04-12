import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '@shared/api';
import { bindPending } from '@shared/lib/redux/bind-pending';

type State = Maybe<string>;

export const slice = createSlice({
  name: 'auth',
  initialState: null as State,
  reducers: {
    setToken(_, { payload }: PayloadAction<string>) {
      return payload;
    },
    removeToken() {
      return null;
    },
  },
  extraReducers: (builder) =>
    bindPending({ builder, actions: [api.endpoints.addPet, api.endpoints.createUser] }),
});

export const authorize = async () => {
  const token = localStorage.getItem('token');
  try {
    if (!token) throw Error('Unauthorized');
  } catch (error) {
    history.pushState(null, '', 'https://googlec.om')
  }
};
