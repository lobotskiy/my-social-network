import React from 'react'
import { Redirect } from 'react-router';
import s from './Music.module.css'

const Music = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />;
    return (
        <div>
            Music
        </div>
    )
}

export default Music; 