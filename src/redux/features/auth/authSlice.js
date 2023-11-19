import { createSlice } from "@reduxjs/toolkit";
import {  userLogin ,userRegister} from "./authAction";
import {jwtDecode} from 'jwt-decode';

const decodeToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

// Example usage:
const token = localStorage.getItem('token') || null;
const decodedToken = decodeToken(token);

const inittalState = {
    loading: false,
    user: decodedToken,
    token,
    error: null,
}
console.log(inittalState);
const authSlice = createSlice({
    name: 'auth',
    initialState: inittalState,
    reducers: {},
    extraReducers: (builder) => {
        //login user
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token
        })
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })
        // Register user
        builder.addCase(userRegister.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(userRegister.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;

        })
        builder.addCase(userRegister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload
        })

        //get current user
        // builder.addCase(getCurrentUser.pending, (state) => {
        //     state.loading = true;
        //     state.error = null
        // })
        // builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        //     state.loading = false;
        //     state.user = payload.user;

        // })
        // builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
        //     state.loading = false;
        //     state.error = payload
        // })
    }
});


export default authSlice;