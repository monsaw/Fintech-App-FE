import React from "react"
import Navbar from "../dashboard/Navbar/Navbar";
import "./localtransfer.css"

function LocalTransfer(){
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
                <p><a className="local" href="#">Local Transfer</a></p>
                <p><a className="other" href="#">Other Bank Transfer</a></p>

            </div>
            <hr />
            <div className="formWrapper">
                <div className="formContainer">
                    <form>
                        <label>Account Number</label> <br />
                        <input type="text" placeholder="Account number"/>
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

export default LocalTransfer