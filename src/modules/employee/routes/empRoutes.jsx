import AddEmployee from "../pages/AddEmployee";
import EmployeeDetails from "../pages/EmployeeDetails";
import EmployeeList from "../pages/EmployeeList";

const empRoutes=[
    {
        path:"/employees",
        element:<EmployeeList/>,
    },
    {
        path:"/employee/:id",
        element:<EmployeeDetails/>,
    },
    {
        path:"/add-employee",
        element:<AddEmployee/>,
    }
];
export default empRoutes;