import { useState } from 'react'
import './Login.css'
import { LoginObject } from '../../Models/LoginModel';
import authenticate from '../../Functions/AuthenticationSiprokService';



const Login = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleUsername = (event) => {
        setUserName(event.target.value);
    }

    const handlePassword = (event) => {
        setUserPassword(event.target.value);
    }

    const handleSubmitLoginForm = (event) => {        
        event.preventDefault();
        authLoginSiprok(new LoginObject(userName, userPassword, 'kiacolombia'));
    }

    const authLoginSiprok = async (loginObject) => {
        let loginData = await authenticate(loginObject);

        console.log(loginData);
    }


    return (
        <div className='login-box'>
            <h2> Login</h2>
            <form onSubmit={handleSubmitLoginForm}>
                <div className='user-box'>
                    <input type='text' htmlFor="username" value={userName} onChange={handleUsername}></input>
                    <label id='username'>Username</label>
                </div>
                <div className='user-box'>
                    <input type='password' htmlFor='userPassword' value={userPassword} onChange={handlePassword}></input>
                    <label id="userPassword">Password</label>
                </div>
                <button type='submit'>Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Login;