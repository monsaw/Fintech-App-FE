
import React, { useState } from 'react'
import './Other_bank_transfer.css';
import Navbar from '../dashboard/Navbar/Navbar';



 const BankTransfer = () => {
return (
    <>
        <Navbar />
            <div className="arrow-container">
                <img src="./arrow.jpg" alt="arrow" className="arrow"/>
                <span className="arrow-item">Go back</span>
            </div>


                <div className="transferContainer">
                    <h5 className="transfer">TRANSFER</h5>
                </div>

            <div className="transfer-links">
                <p><a className="local" href="/local-transfer">Local Transfer</a></p>
                <p><a className="other" href="/bank-transfer">Other Bank Transfer</a><hr className='hr'/></p>

            </div>
            
            <div className="formWrapper">
                <div className="formContainer">
                    <form>
                        <label>Account Number</label> <br />
                        <input type="text" placeholder="Account number"/>
                        <label>Select Bank</label> <br />
                        <div className='select'>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="">GtBank</option>
                            <option value="">GtBank</option>
                            <option value="">GtBank</option>
                            <option value="">GtBank</option>
                            <option value="">GtBank</option>
                        </select>
                        </div>
                        <label>Account Name</label> <br />
                        <input type="text" placeholder="Account name"/>
                        <label>Amount</label> <br />
                        <input type="text" placeholder="Amount"/>
                        <label>Pin</label>
                        <input type="text" placeholder="Pin"/>
                        <label>Narration</label>
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