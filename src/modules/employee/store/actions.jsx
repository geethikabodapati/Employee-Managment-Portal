import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployees } from "../../../service/Service"; 
 

export const ADD_EMPLOYEE = "add-Employee";
export const DELETE_EMPLOYEE = "delete-Employee";
 
export const addEmployeeAction = (employeeData) => ({
  type: ADD_EMPLOYEE,
  payload: employeeData,
});
 
export const deleteEmployeeAction = (employeeId) => ({
  type: DELETE_EMPLOYEE,
  payload: employeeId,
});
 

export const fetchEmployeesThunk = createAsyncThunk(
  "employees/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getEmployees();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch data");
    }
  }
);