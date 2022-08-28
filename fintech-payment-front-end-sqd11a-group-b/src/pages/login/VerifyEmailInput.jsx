import React from "react";
import "./emailver.css";
import {Link} from 'react-router-dom'

const EmailVerification = () => {
    let emailIcon = "📨";
    return (
        <>
            <div className="verification-cards">
                <div className="card-content">
                    <div className="verification">
                        <h4 className="verification-header">Forget Password</h4>
                        <p className="verification-text">
                            Enter the email associated with your account and we’ll send an email with instruction to reset your password
                        </p>
                        <FormItem
                            icon={emailIcon}
                            name="Email"
                            placeHolder="Enter your email"
                            type="email"
                        />
                        <div className="reset-password-button">
                            <button type="submit" className="reset-password-btn">
                                Reset password
                            </button>
                        </div>
                        <div>
                            <button type="submit" className="reset-login">
                                <Link to="/login" className="reset-login-link">Back to Login</Link>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

function FormItem(props) {
    return (
        <div className="form-group form-item">
            <label className="verify-email-form-item" htmlFor={props.name}>
                {props.name}
            </label>
            <input
                type={props.type}
                className="form-control verify-email-input"
                id={props.name}
                placeholder={props.icon + "   " + props.placeHolder}
            />
        </div>
    );
}

export default EmailVerification;
