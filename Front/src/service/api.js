import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setToken } from "../redux/auth";


// import { setToken } from '../redux/authSlice'

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
     baseUrl: "http://localhost:8080" ,
     prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    }),
 
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      
    }),

    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
  }),
  getProfile: builder.query({
    query:()=>`/auth/profile`,
   
    
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
    }
  ),
    async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      try {
        const { data } = await queryFulfilled;
        console.log(data);
        dispatch(setToken( data));
      } catch (error) {
        console.error('Failed to sign in:', error);
      }
    },
      
  
})
})
})

export const { useGetProductsQuery, useGetProfileQuery ,useGetProductsByIdQuery, useGetCartQuery, useAddToCartMutation, useDeleteCartMutation, useSignInMutation } = apiSlice
