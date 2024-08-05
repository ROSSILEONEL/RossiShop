import { createSlice } from '@reduxjs/toolkit'

const initialState={
    // user: null,
    user: null,
    token: null
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    clearToken: (state) => {
      state.token = null
      state.user = null
    },
    getToken: (state) => {
      return state
    }
  }
})
export const { setToken, clearToken ,getToken} = authSlice.actions
export default authSlice.reducer