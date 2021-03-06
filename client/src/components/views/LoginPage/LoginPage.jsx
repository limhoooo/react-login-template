import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_action/user_action'
const LoginPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            email: Email,
            password: Password
        }
        dispatch(loginUser(body))
            .then(res => {
                if (res.payload.loginSuccess) {
                    navigate('/');
                } else {
                    alert(res.payload.message)
                }
            })


    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
};

export default LoginPage; 
