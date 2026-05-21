import { Routes,Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import authRoutes from "../modules/auth/authRoutes";
import dashboardRoutes from "../modules/dashboard/dashboardRoutes";
import empRoutes from "../modules/employee/empRoutes";
const AppRoutes=()=>{
    return(
        <Routes>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path="/employees" element={<ProtectedRoute><EmployeeList/></ProtectedRoute>}/>
            <Route path='/employee/:id' element={<ProtectedRoute><EmployeeDetails/></ProtectedRoute>}/>
            /<Route path="/add-employee" element={<ProtectedRoute><AddEmployee/></ProtectedRoute>}/>
            <Route path="*" element={<Navigate to="/login"/>}/> */}

            {authRoutes.map((route)=>(
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}

            <Route element={<ProtectedRoute/>}>
            {[...dashboardRoutes,...empRoutes].map((route)=>(
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
            </Route>
             <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    )
};
export default AppRoutes;