import { configureStore, createSlice } from "@reduxjs/toolkit";

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
const todoSlice = createSlice({
  name: "todos",
  initialState: tasks,
  reducers: {
    addTodo: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify([...state, action.payload]));
      return state = [...state, action.payload]
    },
    deleteTodo: (state, action) => {
      state = state.filter((task) => task.id !== action.payload)
      localStorage.setItem("tasks", JSON.stringify(state))
      return state;
    },
    updateTodo: (state, action) => {
      state = state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isDone: !task.isDone }
        }
        return task
      })
      localStorage.setItem("tasks", JSON.stringify(state))
      return state;
    },
  }
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
});