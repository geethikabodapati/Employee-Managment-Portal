import { initialState } from "./state";
import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actions";
 
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      const updatedUsersList = [...state.registeredUsers, action.payload];
      localStorage.setItem("registered_users", JSON.stringify(updatedUsersList));
      
      return {
        ...state,
        registeredUsers: updatedUsersList,
        error: null,
      };
    }
 
    case LOGIN_SUCCESS: {
      const { email, password } = action.payload;
      const matchedUser = state.registeredUsers.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );
 
      if (!matchedUser) {
        return {
          ...state,
          isLoggedIn: false,
          token: null,
          user: null,
          error: "Access Denied: Email address not registered or incorrect password.",
        };
      }
 
      const userPayload = { email: matchedUser.email, name: matchedUser.name || "User", role: matchedUser.role || "Employee" };
      const mockJwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify(userPayload))}.signature`;
      
      localStorage.setItem("jwt_token", mockJwtToken);
      localStorage.setItem("auth_user", JSON.stringify(userPayload));
 
      return {
        ...state,
        isLoggedIn: true,
        token: mockJwtToken,
        user: userPayload,
        error: null,
      };
    }
 
    case LOGOUT_SUCCESS: {
      localStorage.removeItem("jwt_token");
      localStorage.removeItem("auth_user");
      return { ...state, isLoggedIn: false, token: null, user: null, error: null };
    }
 
    default:
      return state;
  }
};
 
export default authReducer;