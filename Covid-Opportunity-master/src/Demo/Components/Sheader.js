import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "../App.css";
import logo from "../img/Kobo360.png";
class Sheader extends Component {
  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <div className="header_logo">
          <img src={logo} alt="logo" style={{ height: 150 }} />
        </div>
        <div className="header">
          <div className="heading">Kobo 360</div>
        </div>
      </div>
    );
  }
}

export default Sheader;
