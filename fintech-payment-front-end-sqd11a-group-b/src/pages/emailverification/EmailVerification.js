import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import './emailver.css';
import { Link, Navigate } from "react-router-dom";

const EmailVerification = () => {
    return (
        <>
            <div className='verification-card'>
                <div className='card-content'>
            <span>
                <MdOutlineMarkEmailRead className='sentEmail-icon'/>
            </span>
                    <div className='verification-text'>
                        <h4 className='verification-header'>Verify your mail</h4>
                        <p className='verify-text'>Hi there, use the link below to verify<br/>your
                            email and start enjoying Fintech
                        </p>
                        <Link to='/login'>
                        <button className='verify-btn'>Login</button>
                        </Link>                 
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailVerification