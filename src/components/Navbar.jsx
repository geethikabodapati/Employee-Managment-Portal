import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
//import { useAuth } from "../context/Context"
import {logout} from "../store/Slice";
import Button from "./Button";

const Navbar=()=>{
    const dispatch=useDispatch();
    //const {isLoggedIn,logout}=useAuth();
    const isLoggedIn=useSelector((state)=>state.system.isLoggedIn);
    const navigate=useNavigate();
    const handleLogout=()=>{
        //logout();
        dispatch(logout());
        navigate("/login");
    };
    // if(!isLoggedIn){
    //     return null;
    // }
    return(
        <nav className="navbar navbar-expand-lg bg-primary shadow-sm">
            <Link className="navbar-brand fw-bold text-white" to="/dashboard">EMP</Link>
            <div className="ms-auto d-flex align-items-center gap-3" >
                {isLoggedIn?(<>
            <Link to="/dashboard" style={{color:"#fff",textDecoration:"none"}}>Dashboard</Link>
            <Link to="/employees" style={{color:"#fff",textDecoration:"none"}}>EmployeeList</Link>
             <Link to="/add-employee" style={{color:"#fff",textDecoration:"none"}}>Add Employee</Link>
            
                <Button type="submit" variant="danger" onClick={handleLogout} label="LogOut"/></>
            ):(
                <Link to="/login" className="btn btn-outline-light btn-sm px-3">Login</Link>
            )}
            
        </div>
        </nav>
    )
}
export default Navbar;