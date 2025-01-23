import React from "react";

function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <div className="left">
          <h1>Contact Us</h1>
          <p>To get special offers to your email</p>
          <div className="spans">
            <span>Amsterdam CA 90291</span>
            <span>email@site.com</span>
            <span>+1 (234) 56-78</span>
            <span>@natural.cosmetic</span>
          </div>
        </div>
        <div className="right">
          <div className="inputs">
            <div className="up">
              <input type="text" placeholder="Name*" />
              <input type="email" placeholder="Email*" />
            </div>
            <div className="down">
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
