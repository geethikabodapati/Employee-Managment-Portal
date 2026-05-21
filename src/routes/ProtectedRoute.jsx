import { useSelector } from "react-redux";
//import { useAuth } from "../context/Context";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  //const { isLoggedIn } = useAuth();
  const isLoggedIn=useSelector((state)=>state.system.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
export default ProtectedRoute;