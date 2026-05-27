import { initialEmployeeState } from "./state";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, fetchEmployeesThunk } from "./actions";
 
const employeeReducer = (state = initialEmployeeState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      const newEmp = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        employees: [newEmp, ...state.employees], 
      };
    }
    case DELETE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.filter((emp) => emp.id !== action.payload),
      };
    }
    default: {

      if (action.type === fetchEmployeesThunk.pending.type) {
        return { ...state, loading: true };
      }
      if (action.type === fetchEmployeesThunk.fulfilled.type) {
        const existingIds = state.employees.map((emp) => emp.id);
        const uniqueIncoming = action.payload
          .filter((emp) => !existingIds.includes(emp.id))
          .map((emp) => ({
            ...emp,
            resumeUrl: emp.resumeUrl || "",
            resumeName: emp.resumeName || "",
          }));
 
        return {
          ...state,
          loading: false,
          isFetched: true,
          employees: [...state.employees, ...uniqueIncoming],
        };
      }
      if (action.type === fetchEmployeesThunk.rejected.type) {
        return { ...state, loading: false, error: action.payload };
      }
      return state;
    }
  }
};
 
export default employeeReducer;