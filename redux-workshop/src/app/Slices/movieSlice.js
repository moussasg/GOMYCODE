import { createSlice } from "@reduxjs/toolkit"
import { movies } from "../../movies"

export const moviesSlice = createSlice({
  name: "movies",
  initialState: movies,
  reducers: {
    ToggleWatched: (state, action) => {
      console.log("payload", action.payload)
      state = state.map((movie) => {
        if (movie.id === action.payload) {
          return { ...movie, watched: !movie.watched }
        }
        return movie
      })
      return state;
    }
  }
})

export const { ToggleWatched } = moviesSlice.actions