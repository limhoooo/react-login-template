import React, { useEffect } from 'react';
import axios from 'axios'
import { logoutUser } from '../../../_action/user_action'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const LandingPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('/api/hello')
            .then(res => console.log(res.data))
    }, [])
    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
            .then(res => {
                if (res.payload.success) {
                    navigate('/login');
                }
            })
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <h2>시작 페이지</h2>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
};

export default LandingPage;