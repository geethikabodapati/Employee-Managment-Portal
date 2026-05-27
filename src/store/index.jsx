import { configureStore } from "@reduxjs/toolkit";
//import employeeReducer from "./Slice"
import authReducer from "../modules/auth/store/reducers";
import employeeReducer from "../modules/employee/store/reducers";
export const store=configureStore({
    reducer:{
        auth:authReducer,
        employee:employeeReducer,
    },
});
//console.log(store);