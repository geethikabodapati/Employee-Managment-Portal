// import { useFormik } from "formik";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import Input from "../../../components/Input";
// import Button from "../../../components/Button";
 
// const SignUp = () => {
//   const navigate = useNavigate();
//   const { register } = useAuth();
 
//   const formik = useFormik({
//     initialValues: { name: "", email: "", password: "" },
//     validate: (values) => {
//       const errors = {};
//       if (!values.name) errors.name = "Name is required";
//       if (!values.email) errors.email = "Email is required";
//       if (!values.password) errors.password = "Password is required";
//       return errors;
//     },
//     onSubmit: (values) => {
//       const success = register(values);
//       if (success) {
//         alert("Account created successfully! Please log in.");
//         navigate("/login"); // Route them straight back to login
//       }
//     },
//   });
 
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-4 shadow p-4 rounded bg-white">
//           <h2 className="text-center mb-4">Create Account</h2>
//           <form onSubmit={formik.handleSubmit}>
//             <Input
//               label="Full Name"
//               name="name"
//               onChange={formik.handleChange}
//               value={formik.values.name}
//               error={formik.errors.name}
//               touched={formik.touched.name}
//             />
//             <Input
//               label="Email Address"
//               name="email"
//               type="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               error={formik.errors.email}
//               touched={formik.touched.email}
//             />
//             <Input
//               label="Password"
//               name="password"
//               type="password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//               error={formik.errors.password}
//               touched={formik.touched.password}
//             />
//             <Button label="Sign Up" type="submit" variant="success" className="w-100 mt-3" />
//           </form>
//           <div className="mt-3 text-center small">
//             Already have an account? <Link to="/login">Login here</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default SignUp;
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
 
const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
 
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      return errors;
    },
    onSubmit: (values) => {
      const success = register(values);
      if (success) {
        alert("Account created successfully! Please log in.");
        navigate("/login"); 
      }
    },
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
                    Create Account
                </h2>
                <p className="text-muted small m-0">Get started by creating your new account</p>
              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className="form-group-custom mb-3">
                    <Input
                      label="Full Name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      error={formik.errors.name}
                      touched={formik.touched.name}
                    />
                </div>
                
                <div className="form-group-custom mb-3">
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={formik.errors.email}
                      touched={formik.touched.email}
                    />
                </div>

                <div className="form-group-custom mb-4">
                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      error={formik.errors.password}
                      touched={formik.touched.password}
                    />
                </div>

                <div className="text-center">
                    <Button 
                        label="Sign Up" 
                        type="submit" 
                        variant="success" 
                        className="w-100 py-2.5 rounded-3 fw-bold text-white btn shadow-sm mb-4" 
                        style={{
                            backgroundColor: "#0f172a", // Dark charcoal contrast button matching login
                            border: "none",
                            transition: "background-color 0.2s ease"
                        }}
                    />

                    <p className="text-muted small m-0 fw-medium">
                        Already have an account?{" "}
                        <Link 
                            to="/login" 
                            className="text-primary text-decoration-none fw-semibold"
                            style={{ transition: "color 0.15s ease" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#1d4ed8"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#3b82f6"}
                        >
                            Login here
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
 
export default SignUp;