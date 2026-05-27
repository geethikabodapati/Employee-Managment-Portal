// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import { getEmployees } from "../service/Service";

// const initialState={
//     isLoggedIn:false,
//     employees:[],
//     loading:false,
//     error:null,
//     isFetched:false,
// }
// export const fetchEmployeesThunk=createAsyncThunk("employees/fetchEmployees",
//     async(_,{rejectWithValue})=>{
//         try{
//             const data=await getEmployees();
//             return data;
//         }catch(error){
//             return rejectWithValue(error.message || "Failed to fetch Data");
//         }
//     }
// );
// const employeeSlice=createSlice({
//     name:"empApplication",
//     initialState,
//     reducers:{
//         login:(state)=>{state.isLoggedIn=true},
//         logout:(state)=>{state.isLoggedIn=false;},
//         addEmployee:(state,action)=>{
//             const newEmp={
//                 ...action.payload,
//                 id:Date.now(),
//             };
//             state.employees.unshift(newEmp);
//         },

//     },
//     extraReducers:(builder)=>{
//         builder
//         .addCase(fetchEmployeesThunk.pending,(state)=>{
//             state.loading=true;
//         })
//         .addCase(fetchEmployeesThunk.fulfilled,(state,action)=>{
//             state.loading=false;
//             const existingEmps=state.employees.map(emp=>emp.id);
//             const newEmployees=action.payload.filter(
//                 (emp)=>!existingEmps.includes(emp.id)
//             ).map((emp)=>({
//                 ...emp,filepath:emp.filePath || "",
//                 fileName: emp.fileName || ""
//             }));
//             state.employees=[...state.employees,...newEmployees];
//             state.isFetched=true;
//         })
//         .addCase(fetchEmployeesThunk.rejected,(state,action)=>{
//             state.loading=false;
//             state.error=action.payload;
//         });
//     },

// });
// export const { login ,logout,addEmployee}=employeeSlice.actions;
// export default employeeSlice.reducer;