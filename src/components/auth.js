import React, { useState, useContext } from 'react';
import { API } from "../api-service";
import { TokenContext } from '../index';

function Auth(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useContext(TokenContext)

    const loginClicked = () => {
        API.loginUser({username, password}).then(response => console.log(response))
        .then(response => setToken(response.token))
        .catch(error => console.log(error))
    }
 
    return (
        <div>
            <label htmlFor="username">username</label>
            <br/>
            <input id="username" type="text" placeholder="username" value={username} onChange={ evt=> setUsername(evt.target.value)}/>
            <br/>
            <label htmlFor="password">password</label>
            <br/>
            <input id="password" type="password" placeholder="password" value={password} onChange={evt => setPassword(evt.target.value)}></input>
            <button onClick={loginClicked}>Login</button>
            <br/>
        </div>
    )
}

export default Auth;