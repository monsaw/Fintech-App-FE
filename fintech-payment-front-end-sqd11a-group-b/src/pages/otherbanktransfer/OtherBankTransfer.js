
import React, { useState } from 'react'
import './Other_bank_transfer.css';
import Navbar from '../dashboard/Navbar/Navbar';
import { BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";



const BankTransfer = () => {
    return (
        <>
            <Navbar />
            <div className="local--transfer-previous-page">
                <span>
                     <BsArrowLeft />
                </span>
                <Link to='/dashboard' className="local--transfer-goBack">Go back</Link>
            </div>


            <div className="other--transfer-container">
                <h5 className="transfer">TRANSFER</h5>
            </div>

            <div className="other--transfer-links">
                <p> <Link to="/local-transfer" className="local">Local Transfer</Link></p>
                <p><a className="other" href="#">Other Bank Transfer</a><hr className='hr'/></p>

            </div>

            <div className="other--transfer-formWrapper">
                <div className="other--transfer-formContainer">
                    <form>
                        <label className="other-label">Account Number</label> <br />
                        <input type="text" placeholder="Account number" className="other--transfer-input"/>
                        <label className="other-label">Select Bank</label> <br />
                        <div className='select'>
                            <select name="" id="">
                                <option value=""></option>
                                <option value="">Gurantee Trust Bank</option>
                                <option value="">Sterling Bank</option>
                                <option value="">Access Bank</option>
                                <option value="">Kuda Bank</option>
                                <option value="">Polaris Bank</option>
                            </select>
                        </div>
                        <label className="other-label">Account Name</label> <br />
                        <input type="text" placeholder="Account name" className="other--transfer-input"/>
                        <label className="other-label">Amount</label> <br />
                        <input type="text" placeholder="Amount" className="other--transfer-input"/>
                        <label className="other-label">Pin</label>
                        <input type="text" placeholder="Pin" className="other--transfer-input"/>
                        <label className="other-label">Narration</label>
                    </form>
                    <form>
                        <textarea placeholder="message"></textarea>
                    </form>
                    <div className="btnContainer"><button type="submit" className="transferBtn">Send Money</button></div>
                </div>
            </div>
        </>
    )


}

export default BankTransfer;