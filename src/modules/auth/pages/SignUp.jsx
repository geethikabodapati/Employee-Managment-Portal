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
        navigate("/login"); // Route them straight back to login
      }
    },
  });
 
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 shadow p-4 rounded bg-white">
          <h2 className="text-center mb-4">Create Account</h2>
          <form onSubmit={formik.handleSubmit}>
            <Input
              label="Full Name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
              touched={formik.touched.name}
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
              touched={formik.touched.password}
            />
            <Button label="Sign Up" type="submit" variant="success" className="w-100 mt-3" />
          </form>
          <div className="mt-3 text-center small">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default SignUp;