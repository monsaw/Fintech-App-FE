import React, { useState } from 'react';
import './walletcard.css';
import { IoWalletOutline } from 'react-icons/io5';
import { MdOutlineContentCopy } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';


const Walletcard = () => {
    const [show, setShow] = useState(false);
    const [balance, setBalance] = useState('N2,000,000');

    const hideBalance = () => {
        setBalance('****');
        setShow((prevState) => !prevState)

    }

    const showBalance = () => {
        setBalance('N2,000,000');
        setShow((prevState) => !prevState)

    }

  return (
    <>
    <section className='walletcase'>
        <div className='boxcontain'>
            <div className='contains'>
                <div className='walleticon'>
                    <span>
                        <IoWalletOutline className='io'/>
                    </span>
                </div>
                <div className='digits'>
                    <p>Account Balance</p>
                    <p className='balance'><b>{balance}</b></p>
                    <p className='wema'>Wema Bank</p>
                    <p>
                        <button className='copyBtn'>
                            <span>
                            <MdOutlineContentCopy/>
                        </span>
                        </button>
                        
                        938933939394
                    </p>
                </div>
            </div>
            <div className='showBal'>
                {
                    !show ? (
                        <button className='show' onClick={hideBalance}>
                            <span>
                            <AiOutlineEye className='showIcon'/> 
                            </span>
                        </button>
                    ) : (
                        <button className='hide' onClick={showBalance}>
                            <span>
                                <AiOutlineEyeInvisible className='hideIcon'/>
                            </span>
                    
                        </button>
                    )
                }
                
                
            </div>
        </div>
        <div className='nextdiv'>
            <div className='trans'>
                <a href="#">Transfer</a>
            </div>
            <div className='prof'>
                <a href="#">Profile</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Walletcard