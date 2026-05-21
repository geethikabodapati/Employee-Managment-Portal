import { useNavigate } from "react-router-dom";
//import { useAuth } from "../../../context/Context.jsx";
import {useFormik} from "formik";
import Input from "../../../components/Input.jsx"
import Button from "../../../components/Button.jsx"
import { useDispatch } from "react-redux";
import {login} from "../../../store/Slice"

const Login=()=>{
    //const{login}=useAuth();
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
    const formik=useFormik({
        initialValues:{email:"",password:""},
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (!emailRegex.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (!passwordRegex.test(values.password)) {
                errors.password = "Must be 4+ chars,include 1 uppercase,1 lowercase,and 1 number";
            }

            return errors;
        },
        onSubmit:()=>{
            dispatch(login());
            navigate("/dashboard");
        }
    });
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 shadow p-4">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <Input label="Email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email}/>
                        <Input label="Password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password}/>
                        <div className="text-center">
                            <Button label="Login" type="submit" className="w-50"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;