import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
     baseUrl: "http://localhost:8080" 
    }),
 
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      
    }),

    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
  }),
  getCart: builder.query({
    query:(id)=>`/cart/${id}`,

  }),
  addToCart: builder.mutation({
    query: (data) => ({
      url: "/cart",
      method: "POST",
      body: data,
    }),

  }),
  deleteCart: builder.mutation({
    query: (id) => ({
      url: `/cart/${id}`,
      method: "DELETE",

    }),

  }),
  signIn: builder.mutation({
    query: (data) => ({
      url: "/auth/signIn",
      method: "POST",
      body: data,
    }),
})
})
})

export const { useGetProductsQuery, useGetProductsByIdQuery, useGetCartQuery, useAddToCartMutation, useDeleteCartMutation, useSignInMutation } = apiSlice
