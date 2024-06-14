// authSlice.ts
import axiosInstance from '@/axios.config';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface AuthState {
  user: any;
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true
      state.error = null;
      },
      loginFailure: (state, action) => {
        state.user = null;
        state.token = null;
        state.error = action.payload;
        state.isAuthenticated = false
        },
        },
        });
        
        export const { loginSuccess, loginFailure } = authSlice.actions;
        
        export const login = (credentials: { username: string; password: string }) => async (dispatch: any) => {
          try {
            const response = await axiosInstance.post('auth/login', credentials);
            const { access_token } = response.data;
            const user = { username: credentials.username }; // Modify to get user data from backend if needed
            localStorage.setItem('token', access_token)
            dispatch(loginSuccess({ user, token: access_token }));
  } catch (error: any) {
    dispatch(loginFailure(error.message));
    localStorage.removeItem('token')
  }
};

export default authSlice.reducer;
