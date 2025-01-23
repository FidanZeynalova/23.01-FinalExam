import React from "react";
import { CiFaceSmile, CiHeart } from "react-icons/ci";
import { MdSunny } from "react-icons/md";

function About() {
  return (
    <div className="About">
      <div className="container">
        <h1>ABOUT US</h1>
        <div className="card-wrapper">
          <div className="card">
            <p>
              <CiHeart />
            </p>
            <h2>MADE WITH LOVE</h2>
            <span>
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </span>
          </div>
          <div className="card">
            <p>
              <CiFaceSmile />
            </p>
            <h2>FOR YOUR HAPPINESS</h2>
            <span>
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </span>
          </div>
          <div className="card">
            <p>
              <MdSunny />
            </p>
            <h2>NATURAL CARE</h2>
            <span>
              Magna at erat pretium mattis id non odio quisque nec tempor sapien
              quis eget ligula ispsum sagittis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
