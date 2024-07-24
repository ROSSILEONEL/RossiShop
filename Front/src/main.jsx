import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './context/CartContext.jsx'
import UserProvider from './context/UserContext.jsx'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {apiSlice} from './service/api.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>

    <CartProvider>
    <ApiProvider api={apiSlice}>
    <App />
    </ApiProvider>
    </CartProvider>
    </UserProvider>
  </React.StrictMode>
)
