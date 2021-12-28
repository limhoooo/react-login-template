import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../_action/user_action'
const RegisterPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');


    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (Password !== ConfirmPassword) return alert("비밀번호가 다릅니다.")

        let body = {
            email: Email,
            name: Name,
            password: Password,
            confirmPassword: ConfirmPassword
        }

        dispatch(registerUser(body))
            .then(res => {
                if (res.payload.success) {
                    navigate('/login');
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
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br />
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
};

export default RegisterPage;