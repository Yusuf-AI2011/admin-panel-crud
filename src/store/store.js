import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/UsersReducer";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
