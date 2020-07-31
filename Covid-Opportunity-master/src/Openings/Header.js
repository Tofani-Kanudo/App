import React from "react";
import "./Opening.css";
const Header = () => {
  return (
    <div className="header">
      <img className="mainellipse" src="mobile/Rectangle 2.svg" />
      <div className="bodyrect">
        <img src="mobile/body.svg" />
      </div>

      <img className="white-circle" src="mobile/Whitecircle.svg" />

      <img className="yellow-circle" src="mobile/Yellowcircle.svg" />
      <img className="blue-circle" src="mobile/bluecircle.svg" />
      <img className="pink-circle" src="mobile/Pinkcircle.svg" />
      <img className="black-button" src="mobile/blackbutton.svg" />
      <img className="sort-button" src="mobile/sort.svg" />
      <img className="back-button" src="mobile/backbutton.svg" />
      <div className="header-title">
        <div className="category">UI/UX DESIGNER</div>
        <div className="jobs">4 Job Oppurtinities</div>
      </div>
    </div>
  );
};

export default Header;
