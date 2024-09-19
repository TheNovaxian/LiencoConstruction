
import './Home.css'
import Popup from '../Popup/Popup'
import React, { useState } from 'react'
import PopupS from '../Popup/PopupS'

const Background = () => {
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleSignUpPopup = () => {
    setIsSignUpVisible(!isSignUpVisible);
  };




  return (
    <div className="background">
       <div className="frontbox">
        <h1>LienCo Construction</h1> <br />
        <div className='line'></div>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4><br />
        
        <div className="btn">
            <button className='login' onClick={togglePopup}>Log in</button>
            <button className='signup' onClick={toggleSignUpPopup}>Sign up</button>
        </div>
      

        <Popup isVisible={isPopupVisible} onClose={togglePopup} />
        <PopupS isVisible={isSignUpVisible} onClose={toggleSignUpPopup} />
    </div>
    </div>
  )
}

export default Background
