import './login.css';
import React from 'react'
import {Link} from 'react-router-dom'


export default function Login() {
    return (
        <>
            <div className='login-container-fluid'>
                <div className='login-background row'>

                    <div className='col login-left'>
                        <div className='login-left-side'>
                            <LoginForm/>
                        </div>
                    </div>

                    <div className='right-side-div col-7'>
                        <div className='login-right-side-img'></div>
                    </div>
                </div>
            </div>

        </>

    )
}

function LoginForm() {
    let passwordIcon = '🔒';
    let emailIcon = '📨';


    return (
        <>
            <div className='login-form-container'>
                <div className='login-header-name-msg'>
                    <p className='login-header-name'>Fintech.africa</p>
                    <p className='login-header-msg'>Hi, Welcome Back</p>
                </div>



                <FormItem icon={emailIcon} name="Email" placeHolder="Enter your email" type = "email"  />
                <FormItem icon={passwordIcon} name="Password" placeHolder="Enter your password" type = "password" />
                <div><Link to='/forgot-password'>Forgot password?</Link></div>
                <div className='login-button'><button type='submit' className='login-btn'>Login</button></div>
                <div className='login'>Don't have an account? <Link to="/signup"><span className ='login-span'>Create account</span></Link> </div>
            </div>
        </>
    )
}

function FormItem(props) {
    return (

        <div className="form-group login-form-item">
            <label className='login-form-item' htmlFor={props.name}>{props.name}</label>
            <input type={props.type} className="form-control login-form-control" id={props.name}  placeholder={props.icon + "   " + props.placeHolder}/>
        </div>

    )
}
