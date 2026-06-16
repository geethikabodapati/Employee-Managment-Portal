// import { useDispatch, useSelector } from "react-redux";
// //import { useAuth } from "../../../context/Context"
// import ListItem from "../components/ListItem";
// //import { fetchEmployeesThunk } from "../../../store/Slice";
// import { fetchEmployeesThunk, deleteEmployeeAction } from "../store/actions";
// import { useEffect } from "react";

// const EmployeeList = () => {
//   const dispatch = useDispatch();
//   const { employees, loading, isFetched } = useSelector((state) => state.employee );
 
//   useEffect(() => {
//     if (!isFetched) {
//       dispatch(fetchEmployeesThunk());
//     }
//   }, [dispatch, isFetched]);
 
//   if (loading && (!employees || employees.length === 0)) {
//     return (
//       <div className="text-center mt-5">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading employees...</span>
//         </div>
//       </div>
//     );
//   }
 
//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Employee Directory ({employees?.length || 0})</h2>
//       <div className="row">
//         {employees && employees.map((emp) => (
//           <ListItem key={emp.id} employee={emp}
//             onDelete={(id) => dispatch(deleteEmployeeAction(id))}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
 
// export default EmployeeList;

import {
  useEmployeesQuery,
  useDeleteEmployeeMutation,
} from "../hooks/useEmployees";
import ListItem from "../components/ListItem";

const EmployeeList = () => {
  const { data: employees = [], isLoading } = useEmployeesQuery();
  const deleteMutation = useDeleteEmployeeMutation();

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading directory...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employee Directory ({employees.length})</h2>

      <div className="row">
        {employees.map((emp) => (
          <ListItem
            key={emp.id}
            employee={emp}
            onDelete={(id) => deleteMutation.mutate(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;