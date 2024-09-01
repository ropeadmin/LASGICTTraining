import { createSlice } from "@reduxjs/toolkit";
// import { api, User } from '../../app/services/auth'
import type { RootState } from "@/store";
import { authApi } from "./authService";
import type { AdminData } from "./authType";

type AuthState = {
  username: string | null;
  email: string | null;
  authentication: {
    sessionToken: string | null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    email: null,
    authentication: {
      sessionToken: null
    }
  } as AuthState,
  reducers: {
    logout(state) {
      // state.isLoggedIn = false;
      state.email = '';

      // Remove the cookie
      document.cookie = `authData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { authentication, username, email } = payload;
        const { sessionToken } = authentication;
        state.authentication.sessionToken = sessionToken;
        state.email = email
        state.username = username;

        document.cookie = `authData=${JSON.stringify({ sessionToken })}; path=/`;
      }
    )
    builder.addMatcher(
      authApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        const { authentication, username, email } = payload;
        const { salt } = authentication;
        const sessionToken = salt
        state.authentication.sessionToken = salt;
        state.email = email
        state.username = username;

        document.cookie = `authData=${JSON.stringify({ sessionToken })}; path=/`;
      }
    )
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
export const selectCurrentUsername = (state: RootState) => state.auth.username;
export const selectCurrentEmail = (state: RootState) => state.auth.email;

