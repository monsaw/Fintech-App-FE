import './Fintech-app.css';
import React from 'react'

export default function Signup() {
  return (
    <>
        <div className='container-fluid'>
        <div className='signup-background row'>
            
            <div className='col left'>
                <div className='left-side'>
                    <SignupForm/>
                </div>
            </div>

            <div className='right-side-div col-7'>
                    <div className='right-side-img'></div>
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
        <div className='form-container'>
            <div className='header-name-msg'>
                <p className='header-name'>Fintech.africa</p>
                <p className='header-msg'>Hi, Welcome Back</p>
            </div>
            <FormItem icon={emailIcon} name="Email" placeHolder="Enter your email" type = "email"  />
            <FormItem icon={passwordIcon} name="Password" placeHolder="Enter your password" type = "password"  />
            <div className='forget-password'><label htmlFor="orget-password"><a href="">Forgot Password?</a></label></div>
            <div className='signup-button'><button type='submit' className='btn'>Login</button></div>
            <div className='login'>Don't have an account? <a href=""><span className ='login-span'>Create account</span></a> </div>   
        </div>    
        </>
    )
}

function FormItem(props) {
    return (
       
        <div className="form-group form-item">
            <label className='form-item' htmlFor={props.name}>{props.name}</label>
            <input type={props.type} className="form-control" id={props.name}  placeholder={props.icon + "   " + props.placeHolder}/>
        </div>
      
    )
}
