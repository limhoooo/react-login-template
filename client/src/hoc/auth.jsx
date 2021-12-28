import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { auth } from '../_action/user_action'
export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const navigate = useNavigate();

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth())
                .then(res => {
                    if (!res.payload.isAuth) {
                        // 로그인 하지않은 상태
                        if (option) {
                            navigate('/login');
                        }
                    } else {
                        // 로그인한 상태
                        if (adminRoute && !res.payload.isAdmin) {
                            navigate('/');
                        } else {
                            if (!option) {
                                navigate('/');
                            }
                        }
                    }
                })
        }, [])
        return (
            <SpecificComponent />
        )
    }

    return <AuthenticationCheck />;
}