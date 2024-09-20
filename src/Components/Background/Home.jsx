
import './Home.css'
import Popup from '../Popup/Popup'
import React, { useState } from 'react'


const Background = () => {
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };




  return (
    <div className="background">
       <div className="frontbox">
        <h1>LienCo Construction</h1> <br />
        <div className='line'></div>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4><br />
        
        <div className="btn">
            <button className='login' onClick={togglePopup}>Log in</button>
            <button className='signup' >Sign up</button>
        </div>
      

        <Popup isVisible={isPopupVisible} onClose={togglePopup} />
       
    </div>
    </div>
  )
}

export default Background
