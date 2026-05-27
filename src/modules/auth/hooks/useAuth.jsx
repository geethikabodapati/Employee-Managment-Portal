import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { loginAction, logoutAction, registerAction } from "../store/actions";
 
export const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user, token, error, registeredUsers } = useSelector((state) => state.auth);
 
  const login = useCallback((credentials) => {
    dispatch(loginAction(credentials));
  }, [dispatch]);
 
  const register = useCallback((userData) => {
    const profileExists = registeredUsers.some((u) => u.email.toLowerCase() === userData.email.toLowerCase());
    if (profileExists) {
      alert("This email address is already registered!");
      return false;
    }
    dispatch(registerAction(userData));
    return true;
  }, [dispatch, registeredUsers]);
 
  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);
 
  return { isLoggedIn, user, token, error, login, logout, register };
};