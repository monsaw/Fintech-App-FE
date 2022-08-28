import React from "react"
import Navbar from "../dashboard/Navbar/Navbar";
import { BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";
import "./localtransfer.css"

function LocalTransfer(){
    return (
        <>
            <Navbar />
            <div className="local--transfer-body">
                <div className="local--transfer-previous-page">
                    <span>
                        <BsArrowLeft />
                    </span>
                    <Link to='/dashboard' className="local--transfer-goBack">Go back</Link>
                </div>


                <div className="local--transfer-container">
                    <h5 className="transfer">TRANSFER</h5>
                </div>

                <div className="local--transfer-links">
                    <p><a className="local" href="#">Local Transfer</a></p>
                    <p> <Link to="/bank-transfer" className="other">Other Bank Transfer</Link></p>

                </div>
                <hr />
                <div className="local--transfer-formWrapper">
                    <div className="local--transfer-formContainer">
                        <form>
                            <label className="local--transfer-label">Account Number</label> <br />
                            <input type="text" placeholder="Account number" className="local--transfer-input"/>
                            <label className="local--transfer-label">Account Name</label> <br />
                            <input type="text" placeholder="Account name" className="local--transfer-input"/>
                            <label className="local--transfer-label">Amount</label> <br />
                            <input type="text" placeholder="Amount" className="local--transfer-input"/>
                            <label className="local--transfer-label">Pin</label>
                            <input type="text" placeholder="Pin" className="local--transfer-input"/>
                            <label className="local--transfer-label">Narration</label>
                        </form>
                        <form>
                            <textarea placeholder="message"></textarea>
                        </form>
                        <div className="btnContainer"><button type="submit" className="transferBtn">Send Money</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocalTransfer