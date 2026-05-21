import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Slice"
export const store=configureStore({
    reducer:{
        system:employeeReducer,
    },
});
//console.log(store);