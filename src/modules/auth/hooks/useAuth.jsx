// import { useSelector, useDispatch } from "react-redux";
// import { useCallback } from "react";
// import { loginAction, logoutAction, registerAction } from "../store/actions";
 
// export const useAuth = () => {
//   const dispatch = useDispatch();
//   const { isLoggedIn, user, token, error, registeredUsers } = useSelector((state) => state.auth);
 
//   const login = useCallback((credentials) => {
//     dispatch(loginAction(credentials));
//   }, [dispatch]);
 
//   const register = useCallback((userData) => {
//     const profileExists = registeredUsers.some((u) => u.email.toLowerCase() === userData.email.toLowerCase());
//     if (profileExists) {
//       alert("This email address is already registered!");
//       return false;
//     }
//     dispatch(registerAction(userData));
//     return true;
//   }, [dispatch, registeredUsers]);
 
//   const logout = useCallback(() => {
//     dispatch(logoutAction());
//   }, [dispatch]);
 
//   return { isLoggedIn, user, token, error, login, logout, register };
// };
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { loginAction, logoutAction, registerAction } from "../store/actions";

// Dynamic configuration window (15 minutes in milliseconds)
const INACTIVITY_TIMEOUT = 15 * 60 * 1000;

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user, token, error, registeredUsers } = useSelector((state) => state.auth);
  const timeoutIdRef = useRef(null);

  const logout = useCallback(() => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("auth_user");
    localStorage.removeItem("lastActivity");
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    dispatch(logoutAction());
  }, [dispatch]);

  const login = useCallback((credentials) => {
    dispatch(loginAction(credentials));
  }, [dispatch]);

  const register = useCallback((userData) => {
    const profileExists = registeredUsers.some(
      (u) => u.email.toLowerCase() === userData.email.toLowerCase()
    );
    if (profileExists) {
      alert("This email address is already registered!");
      return false;
    }
    dispatch(registerAction(userData));
    return true;
  }, [dispatch, registeredUsers]);

  // Inactivity tracking layout engine
  useEffect(() => {
    if (!isLoggedIn) {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      return;
    }

    const checkInactivity = () => {
      const lastActivity = localStorage.getItem("lastActivity");
      const now = Date.now();

      if (lastActivity && now - parseInt(lastActivity, 10) >= INACTIVITY_TIMEOUT) {
        alert("Your session has expired due to inactivity.");
        logout();
      } else {
        const timePassed = lastActivity ? now - parseInt(lastActivity, 10) : 0;
        const remainingTime = INACTIVITY_TIMEOUT - timePassed;
        
        if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = setTimeout(checkInactivity, remainingTime);
      }
    };

    const resetTimer = () => {
      localStorage.setItem("lastActivity", Date.now().toString());
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(checkInactivity, INACTIVITY_TIMEOUT);
    };

    // Instantiate running tracker timestamp configuration
    resetTimer();

    const activities = ["mousedown", "mousemove", "keydown", "scroll", "touchstart"];
    activities.forEach((event) => window.addEventListener(event, resetTimer));

    return () => {
      activities.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [isLoggedIn, logout]);

  return { isLoggedIn, user, token, error, login, logout, register };
};