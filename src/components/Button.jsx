const Button=({ label,type="button",variant="primary",className="",...props})=>{
    return (
        <button type={type} className={`btn btn-${variant} ${className}`} {...props}>{label}</button>
    )
}
export default Button;