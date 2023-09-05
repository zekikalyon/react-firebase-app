import React from "react";
import {login} from '../actions/auth'


export const Login = ()=>{
    
    return(
    <div>
        <button onClick={login}>Login</button>
    </div>
    )
 
}

export default Login;