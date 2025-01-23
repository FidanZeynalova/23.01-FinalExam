import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
<div className="container">
  <div className="card">
    <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-2-96x96.png" alt="" />
  </div>
  <div className="card">
    <div className="spans">
      <span>About</span>
      <span>FAQ</span>
      <span>Products</span>
      <span>Terms</span>
      <span>Policy</span>
    </div>
  </div>
  <div className="card">
    <div className="spans">
      <span>INSTAGRAM
      </span>
      <span>TWITTER</span>
      <span>FACEBOOK</span>
      <span>PINTERESTBLOG</span>
      <span>Policy</span>
    </div>
  </div>
  <div className="card">
    <span style={{fontSize:"25px",fontWeight:"bold"}}>SUBSCRIBE TO OUR NEWSLETTER</span>
    <div className="inputs">
      <input type="email" placeholder='Your Email'/>
      <button style={{border:"2px solid black"}}>Send</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Footer