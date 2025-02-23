import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, token: null },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  const response = await axios.post('/api/token/', credentials);
  dispatch(loginSuccess(response.data));
};

export default userSlice.reducer;
