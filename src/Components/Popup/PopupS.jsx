import React from 'react'
import './PopupS.css'
const PopupS = ({ isVisible, onClose }) => {
    if (!isVisible) return null; // Don't render if not visible
  return (
    <div className='popup-overlay' onClick={onClose}>
    <div className='popup-container' onClick={(e) => e.stopPropagation()}>
      <div className='popup-content'>
        <h2>Login</h2>
        <form>
           <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='example@email.com' required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='********' required />
          <div className='btn'>
          <button type="submit" className='popup-button1'>Login</button>
          <button type="button" onClick={onClose} className='popup-button2'>Exit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default PopupS
