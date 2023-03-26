import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../services/api";



export const getRaporDetail = createAsyncThunk("raporDetails", async (id) => {
    return getApi(`http://localhost:8080/rapor/getRaporDetailsById/${id}`)
})



const initialState = { raporDetail: [], loading: false, error: null }

const raporDetailSlice = createSlice({
    name: "raporDetailSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRaporDetail.pending,
            (state, action) => {
                state.loading = false
            })
        builder.addCase(getRaporDetail.fulfilled,
            (state, action) => {
                state.loading = true
                state.raporDetail = action.payload
            })
    }

})

export default raporDetailSlice.reducer


