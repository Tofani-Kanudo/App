import React from "react";
import logo from "../img/Kobo360.png";

const Ffooter = (props) => {
  return (
    <div className="f_footer">
      {/* <div className="header_logo">
        
      </div>
      <div className={props.label}>
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            EXPLORE
          </a>
          <a href="#" className="link">
            Communities
          </a>
          <a href="#" className="link">
            Students
          </a>
          <a href="#" className="link">
            Recruits
          </a>
          <a href="#" className="link">
            Discover
          </a>
        </div>
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            COMPANY
          </a>
          <a href="#" className="link">
            Teams
          </a>
          <a href="#" className="link">
            Careers
          </a>
        </div>
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            FOLLOW
          </a>
          <a href="#" className="link">
            Instagram
          </a>
          <a href="#" className="link">
            Facebook
          </a>
          <a href="#" className="link">
            LinkedIn
          </a>
        </div>
        <div className={props.tlabel}>
          <a href="#" className="linkh">
            CONTACT
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 16,
                textDecoration: "none",
                marginBottom: 5,
                color: "black",
              }}
            >
              General Inquiries
            </div>
            <a
              href="#"
              style={{ fontSize: 16, textDecoration: "none", color: "blue" }}
            >
              ritik@gmail.com
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 16,
                textDecoration: "none",
                marginBottom: 5,
                color: "black",
              }}
            >
              General Inquiries
            </div>
            <a
              href="#"
              style={{ fontSize: 16, textDecoration: "none", color: "blue" }}
            >
              ritik@gmail.com
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 16,
                textDecoration: "none",
                marginBottom: 5,
                color: "black",
              }}
            >
              General Inquiries
            </div>
            <a
              href="#"
              style={{ fontSize: 16, textDecoration: "none", color: "blue" }}
            >
              ritik@gmail.com
            </a>
          </div>
        </div>

        <div className={props.tlabel}></div>
      </div> */}
      <div className="f_footercontent">
        <img
          style={{ maxHeight: 70, maxWidth: 70, borderRadius: 60 }}
          src={logo}
        />
        <ul className="f_footerul">
          <li className="f_footerli_header">EXPLORE</li>
          <li className="f_footerli">
            <a href="#" className="link">
              Communities
            </a>
          </li>
          <li className="f_footerli">
            <a href="#" className="link">
              Students
            </a>
          </li>
          <li className="f_footerli">
            <a href="#" className="link">
              Recruits
            </a>
          </li>
          <li className="f_footerli">
            <a href="#" className="link">
              Discover
            </a>
          </li>
        </ul>
        <ul className="f_footerul">
          <li className="f_footerli_header">COMPANY</li>

          <li className="f_footerli">
            <a href="#" className="link">
              Team
            </a>
          </li>
          <li className="f_footerli">
            <a href="#" className="link">
              Careers
            </a>
          </li>
        </ul>
        <ul className="f_footerul">
          <li className="f_footerli_header">FOLLOW</li>

          <li className="f_footerli">
            <a href="#" className="link">
              Instagram
            </a>
          </li>
          <li className="f_footerli">
            <a href="#" className="link">
              Facebook
            </a>
          </li>
          <li className="f_footerli">
            <a href="#" className="link">
              LinkedIn
            </a>
          </li>
        </ul>
        <ul className="f_footerul">
          <li className="f_footerli_header">CONTACT</li>
          <li className="f_footerli">
            General Inquiries
            <br />
            <a href="#" className="link" style={{ color: "#1a73e8" }}>
              info@jumpstart.me
            </a>
          </li>
          <li className="f_footerli">
            New Business
            <br />
            <a href="#" className="link" style={{ color: "#1a73e8" }}>
              sales@jumpstart.me
            </a>
          </li>
          <li className="f_footerli">
            Press Inquiries
            <br />
            <a href="#" className="link" style={{ color: "#1a73e8" }}>
              press@jumpstart.me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ffooter;
