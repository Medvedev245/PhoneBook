import { loginThunk } from './thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  token: '',
  isloading: false,
  error: '',
};

const handlePending = (state, { payload }) => {
  state.isloading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isloading = false;
  state.error = '';
  state.token = payload.token;
};

const handleRejected = (state, { payload }) => {
  state.isloading = false;
  state.error = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, handlePending);
    builder.addCase(loginThunk.fulfilled, handleFulfilled);
    builder.addCase(loginThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
