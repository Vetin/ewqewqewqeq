import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { bindPending } from '@shared/lib/redux/bind-pending';
import { TypedAction } from '@shared/lib/redux/utility-types';

const MODEL_PREFIX = 'login-page';

interface Form {
  email: string;
  password: string;
}

export const LOGIN_FDS: Form = { email: '', password: '' };

interface LoginErrors {
  login: string;
  password: string;
  global: string;
}

const setErrors = createAction<SliceState['errors']>(`${MODEL_PREFIX}/setErrors`);

export const loginTh = createAsyncThunk(
  `${MODEL_PREFIX}/login-thunk`,
  async (form: Form, { dispatch }) => {
    try {
      await dispatch(authModel.authorize(form));
      history.pushState('321');
    } catch (error) {
      setErrors(error);
    }
  },
);

// Todo: automize action naming
const resetErrors = createAction(`${MODEL_PREFIX}/resetErrors`);

const resetErrorByName = createAction<keyof LoginErrors>(`${MODEL_PREFIX}/resetErrorByName`);

interface SliceState {
  pending: boolean;
  errors: Maybe<LoginErrors>;
}

export const slice = createSlice({
  initialState: {
    pending: false,
    errors: null,
  } as SliceState,
  name: MODEL_PREFIX,
  reducers: {
    [setErrors.type]: (state, action: TypedAction<typeof setErrors>) => {
      state.errors = action.payload;
    },
    [resetErrors.type]: (state) => {
      state.errors = null;
    },
    [resetErrorByName.type]: (state, { payload }: TypedAction<typeof resetErrorByName>) => {
      if (state.errors) delete state.errors[payload];
    },
  },
  extraReducers: (builder) => bindPending({ builder, actions: [loginTh], loadingKey: 'pending' }),
});
