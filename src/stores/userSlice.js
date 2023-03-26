import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../services/api";
import { saveTokenStorage } from "../services/session";



export const login = createAsyncThunk("login", async ({ username, password }) => {
    const token = await postApi(`http://localhost:8080/auth/login?username=${username}&password=${password}`)
    saveTokenStorage(token)
    window.location.reload()
    return token; 
})

export const register = createAsyncThunk("register", async (data) => {
    const response = await postApi(`http://localhost:8080/user/save`, data)
    window.location.reload()
    return response; 
})

const initialState = { token: '', loading: false, error: null }

const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {

    }

})

export default userSlice.reducer


