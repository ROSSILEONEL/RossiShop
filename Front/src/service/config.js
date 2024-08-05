import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api'
import { authSlice } from '../redux/auth'

//do products reducer


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
        ,
       auth: authSlice.reducer
       ,
    },

    devTools: true,


    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})
   