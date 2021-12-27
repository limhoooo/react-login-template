import React, { useEffect } from 'react';
import axios from 'axios'
const LandingPage = (props) => {

    useEffect(() => {
        axios.get('/api/hello')
            .then(res => console.log(res.data))
    }, [])

    return (
        <>
            LandingPage
        </>
    )
};

export default LandingPage;