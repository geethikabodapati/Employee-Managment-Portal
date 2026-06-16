// import { useNavigate, Link } from "react-router-dom"; 
// //import { useAuth } from "../../../context/Context.jsx";
// import {useFormik} from "formik";
// import Input from "../../../components/Input.jsx"
// import Button from "../../../components/Button.jsx"
// import { useAuth } from "../hooks/useAuth.jsx";
// import { useEffect } from "react";
// //import { useDispatch } from "react-redux";
// //import {login} from "../../../store/Slice"

// const Login=()=>{
//     //const{login}=useAuth();
//     const { login, isLoggedIn, error } = useAuth(); 
//     //const dispatch=useDispatch();
//     const navigate= useNavigate();
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
//     useEffect(() => {
//     if (isLoggedIn) {
//       navigate("/dashboard");
//     }
//   }, [isLoggedIn, navigate]);
 
//     const formik=useFormik({
//         initialValues:{email:"",password:""},
//         validate: (values) => {
//             const errors = {};
//             if (!values.email) {
//                 errors.email = "Required";
//             } else if (!emailRegex.test(values.email)) {
//                 errors.email = "Invalid email address";
//             }
//             if (!values.password) {
//                 errors.password = "Required";
//             } else if (!passwordRegex.test(values.password)) {
//                 errors.password = "Must be 4+ chars,include 1 uppercase,1 lowercase,and 1 number";
//             }

//             return errors;
//         },
//         onSubmit:(values)=>{
//             //dispatch(login());
//             login(values);
//             //navigate("/dashboard");
//         }
//     });
//     return(
//         <div 
//             className="d-flex align-items-center justify-content-center min-vh-100"
//             style={{
//                 backgroundColor: "#f8fafc",
//                 padding: "2rem 1rem"
//             }}
//         >
//             <div className="container">
//                 <div className="row justify-content-center w-100 m-0">
//                     <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 p-0">
//                         <div 
//                             className="p-4 p-sm-5 rounded-4 shadow-sm border bg-white"
//                             style={{
//                                 borderColor: "#e2e8f0",
//                                 boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
//                             }}
//                         >
//                             <div className="text-center mb-4">
//                                 <h2 className="fw-bold text-dark mb-2" style={{ letterSpacing: "-0.5px" }}>
//                                     Welcome
//                                 </h2>
//                                 <p className="text-muted small m-0">Enter your credentials to access your dashboard</p>
//                            </div>
//                             {error && (
//                                 <div className="alert alert-danger border-0 py-2.5 px-3 mb-4 rounded-3 d-flex align-items-center gap-2 small animate-fade-in">
//                                     <span className="fw-bold"></span> {error}
//                                 </div>
//                             )}
//                             <form onSubmit={formik.handleSubmit}>
                                
//                                 <div className="form-group-custom mb-3">
//                                     <Input 
//                                         label="Email Address" 
//                                         name="email" 
//                                         type="email" 
//                                         onChange={formik.handleChange} 
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.email} 
//                                         error={formik.touched.email && formik.errors.email}
//                                     />
//                                 </div>

//                                 <div className="form-group-custom mb-4">
//                                     <Input 
//                                         label="Password" 
//                                         name="password" 
//                                         type="password" 
//                                         onChange={formik.handleChange} 
//                                         onBlur={formik.handleBlur}
//                                         value={formik.values.password} 
//                                         error={formik.touched.password && formik.errors.password}
//                                     />
//                                 </div>
//                                 <div className="text-center">
//                                     <Button 
//                                         label="Login" 
//                                         type="submit" 
//                                         className="w-100 py-2.5 rounded-3 fw-bold text-white btn btn-primary shadow-sm mb-4"
//                                         style={{
//                                             backgroundColor: "#0f172a", 
//                                             border: "none",
//                                             transition: "background-color 0.2s ease"
//                                         }}
//                                     />

//                                     <p className="text-muted small m-0 fw-medium">
//                                         Don't have an account?{" "}
//                                         <Link 
//                                             to="/signup" 
//                                             className="text-primary text-decoration-none fw-semibold"
//                                             style={{ transition: "color 0.15s ease" }}
//                                             onMouseEnter={(e) => e.currentTarget.style.color = "#1d4ed8"}
//                                             onMouseLeave={(e) => e.currentTarget.style.color = "#3b82f6"}
//                                         >
//                                             Sign Up
//                                         </Link>
//                                     </p>
//                                 </div>
//                             </form>
                            
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// if (typeof document !== 'undefined') {
//     const style = document.createElement('style');
//     style.innerHTML = `
//         .form-group-custom label {
//             color: #334155 !important;
//             font-size: 0.875rem;
//             font-weight: 600;
//             margin-bottom: 0.4rem;
//             display: block;
//         }
//         .form-group-custom input {
//             background-color: #ffffff !important;
//             border: 1px solid #cbd5e1 !important;
//             color: #1e293b !important;
//             border-radius: 6px !important;
//             padding: 0.6rem 0.85rem !important;
//             width: 100% !important;
//             display: block;
//             transition: all 0.15s ease-in-out !important;
//         }
//         .form-group-custom input:focus {
//             border-color: #3b82f6 !important;
//             box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15) !important;
//             outline: none;
//         }
//         .form-group-custom .text-danger {
//             font-size: 0.775rem !important;
//             font-weight: 500;
//             margin-top: 0.35rem;
//             color: #dc2626 !important;
//             display: block;
//         }
//     `;
//     document.head.appendChild(style);
// }

// export default Login;
import { useNavigate, Link } from "react-router-dom"; 
//import { useAuth } from "../../../context/Context.jsx";
import { useFormik } from "formik";
import Input from "../../../components/Input.jsx";
import Button from "../../../components/Button.jsx";
import { useAuth } from "../hooks/useAuth.jsx";
import { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import {login} from "../../../store/Slice"

const Login = () => {
    //const{login}=useAuth();
    const { login, isLoggedIn, error } = useAuth(); 
    //const dispatch=useDispatch();
    const navigate = useNavigate();
    const hasLocalToken = localStorage.getItem("jwt_token");

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

    useEffect(() => {
        if (isLoggedIn || hasLocalToken) {
            navigate("/dashboard");
        }
    }, [isLoggedIn, hasLocalToken, navigate]);

    const formik = useFormik({
        initialValues: { email: "", password: "" },
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
                errors.password = "Must be 4+ chars, include 1 uppercase, 1 lowercase, and 1 number";
            }

            return errors;
        },
        onSubmit: (values) => {
            //dispatch(login());
            login(values);
            //navigate("/dashboard");
        }
    });

    return (
        <div 
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                backgroundColor: "#f8fafc",
                padding: "2rem 1rem"
            }}
        >
            <div className="container">
                <div className="row justify-content-center w-100 m-0">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 p-0">
                        <div 
                            className="p-4 p-sm-5 rounded-4 shadow-sm border bg-white"
                            style={{
                                borderColor: "#e2e8f0",
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
                            }}
                        >
                            <div className="text-center mb-4">
                                <h2 className="fw-bold text-dark mb-2" style={{ letterSpacing: "-0.5px" }}>
                                    Welcome
                                </h2>
                                <p className="text-muted small m-0">Enter your credentials to access your dashboard</p>
                            </div>
                            {error && (
                                <div className="alert alert-danger border-0 py-2.5 px-3 mb-4 rounded-3 d-flex align-items-center gap-2 small animate-fade-in">
                                    <span className="fw-bold"></span> {error}
                                </div>
                            )}
                            <form onSubmit={formik.handleSubmit}>
                                
                                <div className="form-group-custom mb-3">
                                    <Input 
                                        label="Email Address" 
                                        name="email" 
                                        type="email" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email} 
                                        error={formik.touched.email && formik.errors.email}
                                    />
                                </div>

                                <div className="form-group-custom mb-4">
                                    <Input 
                                        label="Password" 
                                        name="password" 
                                        type="password" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password} 
                                        error={formik.touched.password && formik.errors.password}
                                    />
                                </div>
                                <div className="text-center">
                                    <Button 
                                        label="Login" 
                                        type="submit" 
                                        className="w-100 py-2.5 rounded-3 fw-bold text-white btn btn-primary shadow-sm mb-4"
                                        style={{
                                            backgroundColor: "#0f172a", 
                                            border: "none",
                                            transition: "background-color 0.2s ease"
                                        }}
                                    />

                                    <p className="text-muted small m-0 fw-medium">
                                        Don't have an account?{" "}
                                        <Link 
                                            to="/signup" 
                                            className="text-primary text-decoration-none fw-semibold"
                                            style={{ transition: "color 0.15s ease" }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = "#1d4ed8"}
                                            onMouseLeave={(e) => e.currentTarget.style.color = "#3b82f6"}
                                        >
                                            Sign Up
                                        </Link>
                                    </p>
                                </div>
                            </form>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
        .form-group-custom label {
            color: #334155 !important;
            font-size: 0.875rem;
            font-weight: 600;
            margin-bottom: 0.4rem;
            display: block;
        }
        .form-group-custom input {
            background-color: #ffffff !important;
            border: 1px solid #cbd5e1 !important;
            color: #1e293b !important;
            border-radius: 6px !important;
            padding: 0.6rem 0.85rem !important;
            width: 100% !important;
            display: block;
            transition: all 0.15s ease-in-out !important;
        }
        .form-group-custom input:focus {
            border-color: #3b82f6 !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15) !important;
            outline: none;
        }
        .form-group-custom .text-danger {
            font-size: 0.775rem !important;
            font-weight: 500;
            margin-top: 0.35rem;
            color: #dc2626 !important;
            display: block;
        }
    `;
    document.head.appendChild(style);
}

export default Login;