import './signup.css';
import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <div className='signup-container-fluid'>
                <div className='signup-background row'>

                    <div className='col signup-left'>
                        <div className='signup-left-side'>
                            <SignupForm/>
                        </div>
                    </div>

                    <div className='right-side-div col-7'>
                        <div className='signup-right-side-img'></div>
                    </div>
                </div>
            </div>

        </>

    )
}

function SignupForm() {
    let userIcon = '👤' ;
    let passwordIcon = '🔒';
    let emailIcon = '📨';
    let phoneNumberIcon = '☏';

    return (
        <>
            <div className='signup-form-container'>
                <div className='signup-header-name-msg'>
                    <p className='signup-header-name'>Fintech.africa</p>
                    <p className='signup-header-msg'>Get Started with Fintech</p>
                </div>

                <FormItem icon={userIcon} name="First Name" placeHolder= "Enter your first name" type = "text"  />
                <FormItem icon={userIcon} name="Last Name" placeHolder="Enter your last name" type = "text"  />
                <FormItem icon={emailIcon} name="Email" placeHolder="Enter your email" type = "email"  />
                <FormItem icon={phoneNumberIcon} name="Phone Number" placeHolder="Enter phone number" type = "number" />
                <FormItem icon="" name="BVN" placeHolder="Enter BVN" type = "number" />
                <FormItem icon={passwordIcon} name="Password" placeHolder="Enter your password" type = "password"  />
                <FormItem icon={passwordIcon} name="Confirm Password" placeHolder="Confirm password" type = "password" />
                <FormItem icon="" name="Pin" placeHolder="Enter transaction pin" type = "number" />
                <div className='signup-button'><button type='submit' className='signup-btn'> Sign Up</button></div>
                <div className='signup-login'>Already have an account? <Link to='/login'><span className ='singup-login-span'>Login</span></Link> </div>


            </div>
        </>
    )
}

function FormItem(props) {
    return (

        <div className="form-group signup-form-item">
            <label className='form-item' htmlFor={props.name}>{props.name}</label>
            <input type={props.type} className="form-control signup-form-control" id={props.name}  placeholder={props.icon + "   " + props.placeHolder}/>
        </div>

    )
}
