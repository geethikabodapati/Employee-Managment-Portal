export const REGISTER_SUCCESS="registerSuccess";
export const LOGIN_SUCCESS="loginSuccess";
export const LOGOUT_SUCCESS="logoutSuccess";

export const registerAction=(newUser)=>({
    type:REGISTER_SUCCESS,
    payload:newUser,
});

export const loginAction=(details)=>({
    type:LOGIN_SUCCESS,
    payload:details,
});

export const logoutAction=()=>({
    type:LOGOUT_SUCCESS,
});