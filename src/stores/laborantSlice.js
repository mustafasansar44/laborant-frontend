import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { deleteApi, getApi, postApi } from "../services/api";



export const getLaborant = createAsyncThunk("getLaborant", async () => {
    return getApi(`http://localhost:8080/laborant/getAll`)
    window.location.reload();
})

export const deleteLaborant = createAsyncThunk("deleteLaborant", async (id) => {
    return deleteApi(`http://localhost:8080/laborant/delete/${id}`)
})

export const createLaborant = createAsyncThunk("createLaborant", async (data) => {
    return postApi(`http://localhost:8080/laborant/save`, data)
})


const initialState = { laborant: [], loading: false, error: null, message: '' }

const laborantSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLaborant.pending,
            (state, action) => {
                state.loading = false
            })
        builder.addCase(getLaborant.fulfilled,
            (state, action) => {
                state.loading = true
                state.laborant = action.payload
            })
        builder.addCase(getLaborant.rejected,
            (state, action) => {
                state.loading = true
                state.error = action.payload
            })


        builder.addCase(deleteLaborant.pending,
            (state, action) => {
                state.loading = false
            })
        builder.addCase(deleteLaborant.fulfilled,
            (state, action) => {
                state.loading = true
                state.laborant = action.payload
            })
        builder.addCase(deleteLaborant.rejected,
            (state, action) => {
                state.loading = true
                state.error = action.payload
            })

        builder.addCase(createLaborant.fulfilled,
            (state, action) => {
                state.message = action.payload
            })
        builder.addCase(createLaborant.rejected,
            (state, action) => {
                state.error = action.payload
            })

    }

})



export default laborantSlice.reducer


/*
export const getPost = createAsyncThunk("/post/getPost", async ({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
})






*/