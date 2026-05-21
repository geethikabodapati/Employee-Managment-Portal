import { useNavigate } from "react-router-dom"
import Navbar from "../../../components/Navbar"
import Button from "../../../components/Button";

const Dashboard=()=>{
    const navigate=useNavigate();

    return (
        <div className="container mt-5">
            <div className="jumbotron p-5 mb-4 bg-light rounded-3 shadow-sm">
                <h1 className="display-5 fw-bold">Employee Dashboard</h1>
                <p className="col-md-8 fs-4">View and Add Employees in the Portal</p>
                <Button label="View Employee List" variant="primary" onClick={()=>navigate("/employees")}
                className="btn-lg"/>
            </div>
            
        </div>
    )
}
export default Dashboard;