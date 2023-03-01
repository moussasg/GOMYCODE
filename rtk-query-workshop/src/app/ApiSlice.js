import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://zoo-api-nhvk.onrender.com/" }),
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "auth/signup",
        method: "POST",
        body: data
      }),
    }),
    checktoken: builder.mutation({
      query: (data) => ({
        url: "auth/checktoken",
        method: "POST",
        headers: { "token": `${data}` },
      }),
    }),
    getTodos: builder.query({
      query: () => "todos",
    }),
    postTodo: builder.mutation({
      query: (data) => ({
        url: "todos/add",
        method: "POST",
        body: data
      }),
    }),
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: `todos/delete/${data}`,
        method: "DELETE",
      }),
    })

  })
})

export const { useGetTodosQuery, usePostTodoMutation, useDeleteTodoMutation, useLoginMutation, useSignupMutation, useChecktokenMutation } = apiSlice