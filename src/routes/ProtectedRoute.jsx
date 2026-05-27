//import { useSelector } from "react-redux";
//import { useAuth } from "../context/Context";
import { useAuth } from "../modules/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  //const isLoggedIn=useSelector((state)=>state.system.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
export default ProtectedRoute;


// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../modules/auth/hooks/useAuth"; // FIX 1: Import your custom authorization hook
 
// const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth();
 
//   // If authenticated, render child views. If not, redirect out.
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };
 
// export default ProtectedRoute;