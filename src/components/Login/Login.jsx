import React from 'react';
import { Field, reduxForm } from 'redux-form'
import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Login:</label>
                <Field placeholder={'Login/email/number'} name={'email'}
                    validate={[required]}
                    component={Input}
                    style={{ width: '200px', height: '30px' }} />
            </div>
            <div>
                <label>Password:</label>
                <Field placeholder={'Password'} name={'password'}
                    validate={[required]}
                    component={Input}
                    style={{ width: '200px', height: '30px' }} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={"checkbox"} /> Remember me
            </div>
            <div >
                <button className={s.btn}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.formInfo}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, { login })(Login);