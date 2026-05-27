import React from "react";
import { useNavigate, useParams } from "react-router-dom"
//import { useAuth } from "../../../context/Context";
//import { useState,useEffect } from "react";
import Button from "../../../components/Button";
import { useSelector } from "react-redux";

const EmployeeDetails=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    //const employee=useSelector((state)=>state.system.employees.find((emp)=>emp.id.toString()===id));
    const employee = useSelector((state) => {
        const slice = state.employee || {};
        const list = slice.employees || [];
        return list.find((emp) => emp.id.toString() === id?.toString());
    });
    //const {employees}=useAuth();
   // const [employee,setEmployee]=useState(null);
    // useEffect(()=>{
    //     const emp=employees.find((e)=>e.id.toString()===id);
    //     if(emp){
    //         setEmployee(emp);
    //     }
    //     else{
    //         navigate("/employees");
    //     }
    // },[id,employees,navigate])
    if (!employee) return <div className="container mt-5 text-center">Loading...</div>;
    return (
        <div className="container mt-4">
            <Button label="<- Back to List" variant="success" className="mb-3" onClick={()=>navigate('/employees')}/>
            <div className="card shadow border-0">
                <div className="card-header bg-dark text-white p-3">
                    <h3 className="mb-0">{employee.name}</h3>
                </div>
                <div className="card-body p-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="text-muted border pb-2">Employee Details</h5>
                            <p><strong>Name : </strong>{employee.name}</p>
                            <p><strong>Email : </strong>{employee.email}</p>
                            <p><strong>Joining date : </strong>{employee.doj || "04-12-2025"}</p>
                            <p><strong>Department : </strong>{employee.department || "General"}</p>
                            <p><strong>Company : </strong>{employee.role || "Trainee"}</p>
                            <div className="mb-3 border-top pt-3">
                                <strong>Resume Attachment:</strong>            
                                    <span className="ms-2">              
                                        {employee.filePath ? (
                                            <a href={employee.filePath} download={employee.fileName || "Download"} className="btn btn-sm btn-outline-primary fw-bold">
                                             Download {employee.fileName || "File"}
                                            </a>
                                        ) : (
                                        <span className="text-muted italic small">No file uploaded</span>
                                        )}
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-light">
                    <small className="text-muted">Emp ID: {employee.id}</small>
                </div>
            </div>
        </div>
    )
}
export default React.memo(EmployeeDetails);

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Button from "../../../components/Button";
 
// const EmployeeDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
 
//   // FIX: Access the exact slice location matching your new domain-driven store config
//   const employee = useSelector((state) => {
//     const slice = state.employeeSystem || {};
//     const list = slice.employees || [];
//     return list.find((emp) => emp.id.toString() === id?.toString());
//   });
 
//   if (!employee) {
//     return (
//       <div className="container mt-5 text-center">
//         <div className="alert alert-warning">Employee profile record not found.</div>
//         <Button label="Back to Directory" onClick={() => navigate("/employees")} />
//       </div>
//     );
//   }
 
//   return (
//     <div className="container mt-4">
//       <Button label="← Back" variant="secondary" onClick={() => navigate("/employees")} className="mb-3" />
//       <div className="card shadow border-0">
//         <div className="card-header bg-dark text-white p-3">
//           <h3 className="mb-0">Employee Details</h3>
//         </div>
//         <div className="card-body p-4">
//           <div className="mb-3">
//             <strong>Full Name:</strong> <span className="ms-2">{employee.name}</span>
//           </div>
//           <div className="mb-3">
//             <strong>Email Address:</strong> <span className="ms-2">{employee.email}</span>
//           </div>
//           <div className="mb-3">
//             <strong>Department:</strong> <span className="ms-2">{employee.department || "N/A"}</span>
//           </div>
//           <div className="mb-3">
//             <strong>Role / Position:</strong> <span className="ms-2">{employee.role || "N/A"}</span>
//           </div>
//           <div className="mb-3">
//             <strong>Joining Date:</strong> <span className="ms-2">{employee.joiningDate || "N/A"}</span>
//           </div>
          
//           <div className="mb-3 border-top pt-3">
//             <strong>Resume Attachment:</strong>
//             <span className="ms-2">
//               {employee.resumeUrl ? (
//                 <a
//                   href={employee.resumeUrl}
//                   download={employee.resumeName || "Download"}
//                   className="btn btn-sm btn-outline-primary fw-bold"
//                 >
//                   📥 Download {employee.resumeName || "File"}
//                 </a>
//               ) : (
//                 <span className="text-muted italic small">No file uploaded</span>
//               )}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// // OPTIMIZATION: Keeps component memoized cleanly against parent re-renders
// export default React.memo(EmployeeDetails);