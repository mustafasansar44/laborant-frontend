import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Children } from "react";

import { deleteApi, formDataPostApi, getApi } from "../services/api";
import { getTokenStorage } from "../services/session";


export const getTani = createAsyncThunk("getTani", async () => {
    return getApi(`http://localhost:8080/rapor/getTani`)
})
export const getRapor = createAsyncThunk("getRapor", async () => {
    return getApi(`http://localhost:8080/rapor/getAll`)
})
export const deleteRapor = createAsyncThunk("deleteRapor", async (id) => {
    window.location.reload();
    return deleteApi(`http://localhost:8080/rapor/delete/${id}`)
})
export const createRapor = createAsyncThunk("createRapor", async (data) => {
    return await formDataPostApi(`http://localhost:8080/rapor/save`, data)
})


const initialState = { rapor: [], tani: [], loading: false, error: null }

const raporSlice = createSlice({
    name: "raporSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTani.pending,
            (state, action) => {
                state.loading = false
            })
        builder.addCase(getTani.fulfilled,
            (state, action) => {
                state.loading = true
                state.tani = action.payload
            })
        builder.addCase(getTani.rejected,
            (state, action) => {
                state.loading = true
                state.error = action.payload
            })

        builder.addCase(getRapor.pending,
            (state, action) => {
                state.loading = false
            })
        builder.addCase(getRapor.fulfilled,
            (state, action) => {
                state.loading = true
                state.rapor = action.payload
            })
        builder.addCase(getRapor.rejected,
            (state, action) => {
                state.loading = true
                state.error = action.payload
            })


        builder.addCase(deleteRapor.fulfilled,
            (state, action) => {
                state.laborant = action.payload
            })
        builder.addCase(deleteRapor.rejected,
            (state, action) => {
                state.error = action.payload
            })

    }

})

export default raporSlice.reducer


