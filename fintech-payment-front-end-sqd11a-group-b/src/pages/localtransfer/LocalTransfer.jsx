import React, { useState } from "react"
import Navbar from "../dashboard/Navbar/Navbar";
import { BsArrowLeft} from 'react-icons/bs';
import { Link } from "react-router-dom";
import "./localtransfer.css"
import LocalTransferService from "./LocalTransferService";
import swal from 'sweetalert';

function LocalTransfer(){

    const [user, setUser] = useState({
        accountNumber: "",
        accountName: "",
        amount: "",
        narration: "",
        pin: "",
        error: ""
    });
    const { accountNumber, accountName, amount, narration, pin } = user;

    const handleAccNumChange = function (e) {
        const value = e.target.value;
        console.log(value);
        setUser((prevState) => {
            return {
                ...prevState, accountNumber: value
            }
        })
    }

    const handleAccNameChange = function (e) {
        const value = e.target.value;
        console.log(value);
        setUser((prevState) => {
            return {
                ...prevState, accountName: value
            }
        })
    }

    const handleAmountChange = function (e) {
        const value = e.target.value;
        console.log(value);
        setUser((prevState) => {
            return {
                ...prevState, amount: value
            }
        })
    }

    const handlePinChange = function (e) {
        const value = e.target.value;
        console.log(value);
        setUser((prevState) => {
            return {
                ...prevState, pin: value
            }
        })
    }

    const handleNarrationChange = function (e) {
        const value = e.target.value;
        console.log(value);
        setUser((prevState) => {
            return {
                ...prevState, narration: value
            }
        })
    }

    const data = {
        accountNumber: accountNumber,
        accountName: accountName,
        amount: amount,
        narration: narration,
        pin: pin
    }

    const header = { Authorization: localStorage.getItem("token") };
    const saveTransaction = (e) => {
        e.preventDefault();

        LocalTransferService.saveTransaction(user, header)
            .then((response) => {
                if (response.result !== null){
                    swal("Transfer successful!!!", { appearance: "success"});
                    setUser({data});
                }else{
                    swal("Error", response.message, "error");
                }
            })
            .catch((error) => {
                console.log(error);
                swal("An error occurred please try again later!!", { appearance: "error", });
            });
    }


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
                            <input
                                type="text"
                                placeholder="Account number"
                                onChange={handleAccNumChange}
                                className="local--transfer-input"/>
                            <label className="local--transfer-label">Account Name</label> <br />
                            <input
                                type="text"
                                placeholder="Account name"
                                onChange={handleAccNameChange}
                                className="local--transfer-input"/>
                            <label className="local--transfer-label">Amount</label> <br />
                            <input
                                type="text"
                                placeholder="Amount"
                                onChange={handleAmountChange}
                                className="local--transfer-input"/>
                            <label className="local--transfer-label">Pin</label>
                            <input
                                type="text"
                                placeholder="Pin"
                                onChange={handlePinChange}
                                className="local--transfer-input"/>
                            <label className="local--transfer-label">Narration</label>
                            <textarea
                                onChange={handleNarrationChange}
                                placeholder="message"></textarea>
                            <div className="btnContainer">
                                <button
                                    type="submit"
                                    onClick={saveTransaction}
                                    className="transferBtn">Send Money</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocalTransfer