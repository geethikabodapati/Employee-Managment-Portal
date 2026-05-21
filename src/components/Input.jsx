const Input=({label,name,type="text",error,...props})=>{
    return(
        <div className="mb-3">
            {label && <label className="form-label">{label}</label>}
            <input type={type} name={name} className={`form-control ${error ? 'is-invalid':''}`} {...props}/>
            {error && <div className="invalid-feedback">{error}</div>}
            
        </div>
    )
}
export default Input;