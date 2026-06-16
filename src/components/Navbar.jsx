// import { Link, useNavigate } from "react-router-dom";
// import {useDispatch,useSelector} from "react-redux";
// import { useAuth } from "../modules/auth/hooks/useAuth";
// //import { useAuth } from "../context/Context"
// //import {logout} from "../store/Slice";

// import Button from "./Button";

// const Navbar=()=>{
//     //const dispatch=useDispatch();
//     const {isLoggedIn,logout}=useAuth();
//     //const isLoggedIn=useSelector((state)=>state.system.isLoggedIn);
//     const navigate=useNavigate();
//     const handleLogout=()=>{
//         logout();
//         //dispatch(logout());
//         navigate("/login");
//     };
//     // if(!isLoggedIn){
//     //     return null;
//     // }
//     return(
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm border-bottom border-secondary">
//             <div className="container-fluid px-4">
//                 {/* Brand Logo */}
//                 <Link className="navbar-brand fw-black tracking-wide text-uppercase text-white fs-4" to="/dashboard">
//                     EMP<span className="text-info">.</span>
//                 </Link>
                
//                 {/* Right Side Navigation Links & Actions */}
//                 <div className="ms-auto d-flex align-items-center gap-4">
//                     {isLoggedIn ? (
//                         <>
//                             <Link 
//                                 to="/dashboard" 
//                                 className="text-white-50 text-decoration-none fw-medium transition-all hover-white"
//                                 style={{ transition: "color 0.2s ease-in-out" }}
//                             >
//                                 Dashboard
//                             </Link>
//                             <Link 
//                                 to="/employees" 
//                                 className="text-white-50 text-decoration-none fw-medium transition-all hover-white"
//                                 style={{ transition: "color 0.2s ease-in-out" }}
//                             >
//                                 Employee List
//                             </Link>
//                             <Link 
//                                 to="/add-employee" 
//                                 className="text-white-50 text-decoration-none fw-medium transition-all hover-white me-2"
//                                 style={{ transition: "color 0.2s ease-in-out" }}
//                             >
//                                 Add Employee
//                             </Link>
                            
//                             <Button type="submit" variant="danger" onClick={handleLogout} label="LogOut"/>
//                         </>
//                     ) : (
//                         <div className="d-flex align-items-center gap-2">
//                             <Link to="/login" className="btn btn-outline-light btn-sm px-4 rounded-pill fw-medium">
//                                 Login
//                             </Link>
//                             <Link to="/signup" className="btn btn-info btn-sm px-4 rounded-pill fw-medium text-dark">
//                                 SignUp
//                             </Link>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { useAuth } from "../modules/auth/hooks/useAuth";
//import { useAuth } from "../context/Context"
//import {logout} from "../store/Slice";

import Button from "./Button";

const Navbar=()=>{
    //const dispatch=useDispatch();
    const {isLoggedIn,logout}=useAuth();
    //const isLoggedIn=useSelector((state)=>state.system.isLoggedIn);
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        //dispatch(logout());
        navigate("/login");
    };
    // if(!isLoggedIn){
    //     return null;
    // }
    return(
        <nav 
            className="navbar navbar-expand-lg sticky-top py-3" 
            style={{
                background: "rgba(15, 23, 42, 0.9)", // Sleek Slate/Navy background
                backdropFilter: "blur(12px)",        // Premium glassmorphism blur
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
            }}
        >
            <div className="container px-4 d-flex align-items-center justify-content-between">
                
                {/* Brand Logo */}
                <Link 
                    className="navbar-brand fw-extrabold text-white fs-4 d-flex align-items-center gap-1 m-0" 
                    to="/dashboard"
                    style={{ letterSpacing: "1.5px", fontStyle: "italic" }}
                >
                    <span style={{ color: "#38bdf8" }}>//</span> EMP
                </Link>
                
                {/* Right Side Navigation & Actions */}
                <div className="d-flex align-items-center gap-4">
                    {isLoggedIn ? (
                        <>
                            <div className="d-flex align-items-center gap-4 me-2">
                                <Link 
                                    to="/dashboard" 
                                    className="nav-link-custom text-white-50 text-decoration-none fw-semibold fs-6"
                                    style={navLinkStyle}
                                >
                                    Dashboard
                                </Link>
                                <Link 
                                    to="/employees" 
                                    className="nav-link-custom text-white-50 text-decoration-none fw-semibold fs-6"
                                    style={navLinkStyle}
                                >
                                    Employees
                                </Link>
                                <Link 
                                    to="/add-employee" 
                                    className="nav-link-custom text-white-50 text-decoration-none fw-semibold fs-6"
                                    style={navLinkStyle}
                                >
                                    Add New
                                </Link>
                            </div>
                            
                            <Button type="submit" variant="danger" onClick={handleLogout} label="LogOut"/>
                        </>
                    ) : (
                        <div className="d-flex align-items-center gap-3">
                            <Link 
                                to="/login" 
                                className="text-white-50 text-decoration-none fw-semibold px-2"
                                style={navLinkStyle}
                            >
                                Login
                            </Link>
                            <Link 
                                to="/signup" 
                                className="btn btn-sm px-4 py-2 rounded-pill fw-bold text-white shadow-sm"
                                style={{
                                    background: "linear-gradient(135deg, #38bdf8 0%, #0369a1 100%)",
                                    border: "none",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 189, 248, 0.3)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
                
            </div>
        </nav>
    )
}

// Inline utility style for smooth micro-interactions on links
const navLinkStyle = {
    transition: "color 0.25s ease, transform 0.2s ease",
    cursor: "pointer"
};

// Optional quick CSS override logic handled via mouse events for seamless hover reactivity
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = `
        .nav-link-custom:hover {
            color: #ffffff !important;
            text-shadow: 0 0 8px rgba(255,255,255,0.2);
        }
    `;
    document.head.appendChild(style);
}

export default Navbar;