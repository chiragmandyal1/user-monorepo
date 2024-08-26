// user.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ActiveUser, UserState } from "./user.types";

// Initial state
const initialState: UserState = {
  token: "",
  activeUser: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state: { token: string }, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setActiveUser(
      state: { activeUser: any },
      action: PayloadAction<ActiveUser | {}>
    ) {
      state.activeUser = action.payload;
    },

    logout(state: { token: string; activeUser: {} }) {
      state.token = "";
      state.activeUser = "";
    },
  },
});

export const { setToken, setActiveUser, logout } = UserSlice.actions;

export const UserSelector = {
  selectToken: (state: RootState) => state.user.token,
  selectActiveUser: (state: RootState) => state.user.activeUser,
};

export default UserSlice.reducer;
