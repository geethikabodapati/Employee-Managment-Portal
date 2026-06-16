//import { useSelector } from "react-redux";
//import { useAuth } from "../context/Context";
// import { useAuth } from "../modules/auth/hooks/useAuth";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { isLoggedIn } = useAuth();
//   //const isLoggedIn=useSelector((state)=>state.system.isLoggedIn);

//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
// };
// export default ProtectedRoute;
import { useAuth } from "../modules/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  const hasLocalToken = localStorage.getItem("jwt_token");

  return (isLoggedIn || hasLocalToken) ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
