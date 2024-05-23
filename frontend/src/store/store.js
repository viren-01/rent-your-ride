import { configureStore } from "@reduxjs/toolkit";
import commonReducer from './slices/CommonSlice';

const store = configureStore({
    reducer: {
        common: commonReducer
    }
})

export default store