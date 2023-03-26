import { configureStore } from "@reduxjs/toolkit";
import laborantSlice from "./laborantSlice";
import raporDetailSlice from "./raporDetailSlice";
import raporSlice from "./raporSlice";
import userSlice from "./userSlice";


export default configureStore({
    reducer: {
        laborant: laborantSlice,
        rapor: raporSlice,
        raporDetail: raporDetailSlice,
        login: userSlice
    }
})