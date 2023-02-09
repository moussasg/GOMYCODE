import { configureStore } from "@reduxjs/toolkit"
import { moviesSlice } from "./Slices/movieSlice"



export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  }
})