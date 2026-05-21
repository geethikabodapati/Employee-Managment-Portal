import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const ListItem=({employee})=>{
    const navigate=useNavigate();
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">
                        {employee.name}
                    </h5>
                    <p className="card-text text-muted">
                        {employee.email}
                    </p>
                    <div className="d-flex justify-content-between"> 
                        <Button label="View Details" className="info btn-sm" onClick={()=>navigate(`/employee/${employee.id}`)}/>
                        {/* <Button label="Delete" className="btn-danger"/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListItem;