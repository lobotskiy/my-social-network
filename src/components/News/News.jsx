import React from 'react'
import { Redirect } from 'react-router';
import s from './News.module.css'

const News = (props) => {
    if (!props.isAuth) return <Redirect to='/login' />;
    return (
        <div>
            News
        </div>
    )
}

export default News; 