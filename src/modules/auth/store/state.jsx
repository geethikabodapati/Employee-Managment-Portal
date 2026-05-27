export const initialState={
    registeredUsers:JSON.parse(localStorage.getItem("registered_users")) || [
        {email:"admin@gmail.com",password:"Admin123",name:"System Admin",role:"Administrator"}
    ],
    isLoggedIn: !! localStorage.getItem("jwt_token"),
    token:localStorage.getItem("jwt_token") || null,
    user:JSON.parse(localStorage.getItem("jwt_token"))|| null,
    loading:false,
    error:null,
};