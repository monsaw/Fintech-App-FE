import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../dashboard/Navbar/Navbar";
import { BsArrowLeft} from 'react-icons/bs';
import "./fundwallet.css";

export default function FundWallet () {
    return(
        <>
        <Navbar />
            <div className="fund--wallet-body">
                <div className="previous-page">
               <span>
                   <BsArrowLeft />
               </span>
                    <Link to='/profile' className="goBack">Go back</Link>
                </div>
                <h4 className="fund--wallet-header">FUND WALLET</h4>
                <div className="fund--wallet-form-body">
                    <form className="fund--wallet-form">
                        {/*<label htmlFor="" className="fund--wallet-form-header">Amount*/}
                            <input type="text" className="fund--wallet-input" name="amount" placeholder="Amount"/>
                        {/*</label>*/}
                        <div className="fund--wallet-btn-container">
                            <button type="submit" className="fund--wallet-btn">Fund Wallet</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
