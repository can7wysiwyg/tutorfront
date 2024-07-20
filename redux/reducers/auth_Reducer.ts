import { AUTHENTICATION_ERROR, GET_USER, LOGIN_USER, REGISTER_USER } from "../actions/types";

interface AuthState {
    user: any; // Adjust the type of user as per your application needs
    msg: string | null; // Assuming msg can be a string or null
  }
  
  const initialState: AuthState = {
    user: null,
    msg: null,
  };

export function authReducer(state= initialState , action: any): AuthState {

    switch(action.type) {

        case REGISTER_USER:
            return{...state, msg: "success"}

        case LOGIN_USER:
            return{...state, msg: "success"}  
            
        case GET_USER:
            return{...state, user: action.payload}    

        case AUTHENTICATION_ERROR:
            return{...state, msg: "there was a problem"}
            
        default:
            return state    



    }


}