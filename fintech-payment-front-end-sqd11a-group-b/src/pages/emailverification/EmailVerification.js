import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import './emailver.css';

const EmailVerification = () => {
  return (
    <>
    <div className='verification-card'>
        <div className='card-content'>
            <span>
                <MdOutlineMarkEmailRead className='sentEmail-icon'/>
            </span>
            <div className='verification-text'>
                <h4>Verify your mail</h4>
                <p>Hi there, use the link below to verify<br/>your
                    email and start enjoying Fintech
                </p>
                <button className='verify-btn'>Verify email</button>
            </div> 
        </div>
    </div>
    </>
  )
}

export default EmailVerification