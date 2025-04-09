import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user type structure
export type TUser = {
  email: string;
  exp: number;
  iat: number;
  role: string;
  userId: string;
};

// Define the auth state type
type TAuthState = {
  user: TUser | null;
  token: string | null;
};

// Initial state for the auth slice
const initialState: TAuthState = {
  user: null,
  token: null,
};

// Create the auth slice using createSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Set user and token after successful login or sign-up
    setUser: (
      state,
      { payload }: PayloadAction<{ user: TUser; token: string }>
    ) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
    },
    // Log out the user by clearing user data and token
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Export for use in components
export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
