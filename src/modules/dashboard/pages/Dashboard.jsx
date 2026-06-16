// import { useNavigate } from "react-router-dom"
// import Navbar from "../../../components/Navbar"
// import Button from "../../../components/Button";

// const Dashboard=()=>{
//     const navigate=useNavigate();

//     return (
//         <div className="container mt-5">
//             <div className="jumbotron p-5 mb-4 bg-light rounded-3 shadow-sm">
//                 <h1 className="display-5 fw-bold">Employee Dashboard</h1>
//                 <p className="col-md-8 fs-4">View and Add Employees in the Portal</p>
//                 <Button label="View Employee List" variant="primary" onClick={()=>navigate("/employees")}
//                 className="btn-lg"/>
//             </div>
            
//         </div>
//     )
// }
// export default Dashboard;

import { useNavigate } from "react-router-dom"
import Navbar from "../../../components/Navbar"
import Button from "../../../components/Button";

const Dashboard=()=>{
    const navigate=useNavigate();

    return (
        <div 
            className="min-vh-100" 
            style={{ backgroundColor: "#f8fafc" }} 
        >
            <div className="container pt-5 px-4">
                <div 
                    className="p-4 p-md-5 mb-4 bg-white rounded-4 border"
                    style={{
                        borderColor: "#e2e8f0",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.02), 0 8px 10px -6px rgba(0, 0, 0, 0.02)"
                    }}
                >
                    <h1 className="display-6 fw-bold text-dark mb-2" style={{ letterSpacing: "-1px" }}>
                        Employee Dashboard
                    </h1>
                    <p className="text-muted fs-5 mb-4">
                        View and Add Employees in the Portal
                    </p>
                    
                    <Button 
                        label="View Employee List" 
                        variant="primary" 
                        onClick={()=>navigate("/employees")}
                        className="btn-lg px-4 py-2.5 rounded-3 fw-bold text-white shadow-sm"
                        style={{
                            backgroundColor: "#0f172a", // Dark charcoal contrast matching login elements
                            border: "none",
                            transition: "background-color 0.2s ease"
                        }}
                    />
                </div>
                
            </div>
        </div>
    )
}
export default Dashboard;