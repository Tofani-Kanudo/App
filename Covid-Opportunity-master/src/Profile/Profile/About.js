import React, { Component } from "react";
import { Divider } from "@material-ui/core";
import $ from "jquery";

class About extends Component {
  state = {
    username: "Username",
    email: "user@gmail.com",
    location: "Mumbai,India",
    number: "6202165155",
  };
  render() {
    return (
      <div className="profile-fields">
        <div className="profile-input-container">
          <div className="profile-input">
            <div className="profile-input-title">Email</div>
            <div id="profile_email" className="profile-input-value">
              {this.state.email}
            </div>
            <input
              id="profile_email_input"
              value={this.state.email}
              className="profile-input-field"
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={(e) => {
              $("#profile_email_input, #profile_email").toggle();
              console.log(e.target.id);
              const element = document.getElementById(`${e.target.id}`);
              if (element.innerHTML == "Edit") {
                element.innerHTML = "Save";
              } else {
                element.innerHTML = "Edit";
              }
            }}
            className="profile-edit"
            id="email_edit"
          >
            Edit
          </div>
        </div>
        <div className="profile-input-container">
          <div className="profile-input">
            <div className="profile-input-title">Location</div>
            <div id="profile_location" className="profile-input-value">
              {this.state.location}
            </div>
            <input
              id="profile_location_input"
              value={this.state.location}
              className="profile-input-field"
              onChange={(e) => {
                this.setState({
                  location: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={(e) => {
              $("#profile_location_input, #profile_location").toggle();
              console.log(e.target.id);
              const element = document.getElementById(`${e.target.id}`);
              if (element.innerHTML == "Edit") {
                element.innerHTML = "Save";
              } else {
                element.innerHTML = "Edit";
              }
            }}
            className="profile-edit"
            id="location_edit"
          >
            Edit
          </div>
        </div>
        <div className="profile-input-container">
          <div className="profile-input">
            <div className="profile-input-title">Mobile Number</div>
            <div id="profile_number" className="profile-input-value">
              {this.state.number}
            </div>
            <input
              id="profile_number_input"
              value={this.state.number}
              className="profile-input-field"
              onChange={(e) => {
                this.setState({
                  number: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={(e) => {
              $("#profile_number_input, #profile_number").toggle();
              console.log(e.target.id);
              const element = document.getElementById(`${e.target.id}`);
              if (element.innerHTML == "Edit") {
                element.innerHTML = "Save";
              } else {
                element.innerHTML = "Edit";
              }
            }}
            className="profile-edit"
            id="number_edit"
          >
            Edit
          </div>
        </div>
      </div>
    );
  }
}

export default About;
