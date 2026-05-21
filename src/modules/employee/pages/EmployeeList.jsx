import { useDispatch, useSelector } from "react-redux";
//import { useAuth } from "../../../context/Context"
import ListItem from "../components/ListItem";
import { fetchEmployeesThunk } from "../../../store/Slice";
import { useEffect } from "react";

const EmployeeList=()=>{
    //const {employees}=useAuth();
    const dispatch=useDispatch();
    const {employees,loading,isFetched}=useSelector((state)=>state.system);
    useEffect(()=>{
        if(!isFetched){
            dispatch(fetchEmployeesThunk());
        }
    },[dispatch,isFetched]);

    if(loading&& employees.length===0){
        return <div className="text-center mt-5"><div className="spinner-border"></div></div>
    }
    return(
        <div className="container mt-4">
            <div className="row">
                {employees.map(emp=>(
                    <ListItem key={emp.id} employee={emp}/>
                ))}
            </div>
        </div>

    );
}
export default EmployeeList;