import { useNavigate, useParams } from "react-router-dom"
//import { useAuth } from "../../../context/Context";
//import { useState,useEffect } from "react";
import Button from "../../../components/Button";
import { useSelector } from "react-redux";

const EmployeeDetails=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const employee=useSelector((state)=>state.system.employees.find((emp)=>emp.id.toString()===id));
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
export default EmployeeDetails;