import "./login.css";
import React from "react";

export default function Login() {
    return (
        <>
            <div className="login-container-fluid">
                <div className="login-background row">
                    <div className="col login-left">
                        <div className="login-left-side">
                            <LoginForm />
                        </div>
                    </div>

                    <div className="right-side-div col-7">
                        <div className="reset-login-right-side-img"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

function LoginForm() {
    let passwordIcon = "🔒";

    return (
        <>
            <div className="login-form-container">
                <div className="login-header-name-msg">
                    <p className="login-header-msg">Reset Password</p>
                </div>

                <FormItem
                    icon={passwordIcon}
                    name="New Password"
                    placeHolder="Enter New  Password"
                    type="password"
                />
                <FormItem
                    icon={passwordIcon}
                    name="Confirm Password"
                    placeHolder="Confirm Your Password"
                    type="password"
                />
                <div className="login-button">
                    <button type="submit" className="login-btn">
                        Reset password
                    </button>
                </div>
            </div>
        </>
    );
}

function FormItem(props) {
    return (
        <div className="form-group form-item">
            <label className="login-form-item" htmlFor={props.name}>
                {props.name}
            </label>
            <input
                type={props.type}
                className="form-control login-form-control"
                id={props.name}
                placeholder={props.icon + "   " + props.placeHolder}
            />
        </div>
    );
}
