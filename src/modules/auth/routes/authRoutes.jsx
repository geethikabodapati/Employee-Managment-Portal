import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const authRoutes=[{
    path:"/login",
    element:<Login/>,
},
{
    path:"/signup",
    element:<SignUp/>
}];
export default authRoutes;