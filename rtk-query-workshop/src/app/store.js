import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./ApiSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});