import React from "react"
import "./userprofile.css"

export default function UserProfile(){
    return (
        <div className="user--profile_body">
            <h4 className="user--profile_header">PROFILE</h4>
            <div className="form--body">
                <form className="form">
                    <label htmlFor="" className="form--header">First Name
                        <input type="text" disabled className="form--input" name="firstname" placeholder="First name"/>
                    </label>
                </form>

                <form className="form">
                    <label htmlFor="" className="form--header">Last Name
                        <input type="text" disabled className="form--input" name="lastname" placeholder="Last name"/>
                    </label>
                </form>

                <form className="form">
                    <label htmlFor="" className="form--header">Phone Number
                        <input type="text" disabled className="form--input" name="phone" placeholder="Phone number"/>
                    </label>
                </form>

                <form className="form">
                    <label htmlFor="" className="form--header">Email
                        <input type="text" disabled className="form--input" name="email" placeholder="Email"/>
                    </label>
                </form>
            </div>
            

        </div>
    )
}