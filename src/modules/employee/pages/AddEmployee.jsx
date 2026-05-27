import {useNavigate} from "react-router-dom"
import {useFormik} from "formik";
//import { useAuth } from "../../../context/Context";
import Button from "../../../components/Button";
import Input from "../../../components/Input.jsx";
import { useDispatch } from "react-redux";
//import { addEmployee } from "../../../store/Slice.jsx";
import { useCallback } from "react";
import { addEmployeeAction } from "../store/actions";
const AddEmployee=()=>{
    const navigate= useNavigate();
    const dispatch=useDispatch();
    //const {addEmployee}=useAuth();
    const formik=useFormik({
        initialValues:{
            name:"",email:"",department:"",role:"",doj:"",filePath:"",fileName:""
        },
        validate:(values)=>{
            const errors={};
            if(!values.name) errors.name="Full Name is required";
            if(!values.email){
                errors.email="Email is required";
            }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email="Invalid email address";
            }
            if (!values.department) errors.department="Required";
            if(!values.doj) errors.doj="Required";
            if(!values.filePath) errors.filePath="Required";
            return errors;
        },
        onSubmit:(values)=>{
            dispatch(addEmployeeAction(values));
            navigate("/employees");
        },
    });

    const handleFileChange = useCallback((event) => {
        const file = event.currentTarget.files[0];
        if (file) {
            const localPath = URL.createObjectURL(file);
           formik.setFieldValue("filePath",localPath);
           formik.setFieldValue("fileName",file.name);
        }
    }, [formik]);

    return(
        <div className="container mt-4">
            <div className="card shadow p-4">
                <h2 className="mb-4">Add new Employee</h2>
                <form onSubmit={formik.handleSubmit}>
                     <Input label="Name" name="name" placeholder="eg : Geethika" onChange={formik.handleChange}
                    value={formik.values.name}/>
                    <Input label="Email" name="email" type="email" placeholder="new2gmail.com" onChange={formik.handleChange}
                    value={formik.values.email} error={formik.errors.email}/>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Department</label>
                                <select name="department" className={`form-select ${formik.errors.department ? 'is-invalud':''}`}
                                onChange={formik.handleChange} value={formik.values.department}>
                                    <option value="">
                                        Slect Dept
                                    </option>
                                    <option value="IT">
                                        IT
                                    </option>
                                    <option value="HR">
                                        HR
                                    </option>
                                </select>
                        </div>
                        <div className="col-md-6">
                            <Input label="Role" name="role" placeholder="eg: Developer" onChange={formik.handleChange}
                    value={formik.values.role}/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <Input label="Joing Date" name="doj" type="date" onChange={formik.handleChange}
                    value={formik.values.doj}/>
                        </div>
                        <div className="col-md-6">
                            <Input type="file" label="Upload" className="form-control form-label fw-bold" onChange={handleFileChange}/>
                            {formik.values.fileName && (<div className="text-muted small mt-1">
                                Attached: {formik.values.filePath}
                                </div>)}
                        </div>
                        
                    </div>

                    <div className="d-flex gap-2">
                        <Button label="Save Employee" type="submit" variant="success"/>

                    <Button label="Cancel" variant="secondary" onClick={()=>navigate("/employees")}/>

                    </div>


                </form>
            </div>
        </div>
    )
    
}
export default AddEmployee;
