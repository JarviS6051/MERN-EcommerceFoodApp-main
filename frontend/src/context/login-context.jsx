import { createContext, useContext ,useReducer} from "react";
import { loginReducer } from "../reducers/loginReducer";
const LoginContext=createContext();

const LoginProvider = ({children}) =>{

    const initialState= {
        email: '',
        password: '',
        token: {access_token: localStorage.getItem('token') || '', refresh_token: ''}//whenever you refresh, 
        //it becomes whatever we have provided here in this state
    }

    const [{email,password,token} , loginDispatch] = useReducer(loginReducer, initialState);

    return (
        <LoginContext.Provider value = {{email,password,token, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    );
}

const useLogin = () =>useContext(LoginContext);

export { LoginProvider, useLogin };