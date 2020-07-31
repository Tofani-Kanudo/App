import React, { Component } from "react";
import $ from "jquery";

class Social extends Component {
  state = {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    portfolio: "https://user_portfolio.com",
  };
  render() {
    return (
      <div className="profile-fields">
        <div className="profile-input-container">
          <div className="profile-input">
            <div className="profile-input-title">Github</div>
            <div id="github_link" className="profile-input-value">
              <a
                id="social-link"
                className="github-profile-link"
                href={this.state.github}
              >
                {this.state.github}
              </a>
            </div>
            <input
              id="social_github_input"
              value={this.state.github}
              className="profile-input-field"
              onChange={(e) => {
                this.setState({
                  github: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={(e) => {
              $("#social_github_input, #github_link").toggle();
              console.log(e.target.id);
              const element = document.getElementById(`${e.target.id}`);
              if (element.innerHTML == "Edit") {
                element.innerHTML = "Save";
              } else {
                element.innerHTML = "Edit";
              }
            }}
            className="profile-edit"
            id="github_edit"
          >
            Edit
          </div>
        </div>
        <div className="profile-input-container">
          <div className="profile-input">
            <div className="profile-input-title">LinkedIn</div>
            <div id="social_linkedin" className="profile-input-value">
              <a
                id="social-link"
                className="linkedin-link"
                href={this.state.linkedin}
              >
                {this.state.linkedin}
              </a>
            </div>
            <input
              id="social_linkedin_input"
              value={this.state.linkedin}
              className="profile-input-field"
              onChange={(e) => {
                this.setState({
                  linkedin: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={(e) => {
              $("#social_linkedin_input, #social_linkedin").toggle();
              console.log(e.target.id);
              const element = document.getElementById(`${e.target.id}`);
              if (element.innerHTML == "Edit") {
                element.innerHTML = "Save";
              } else {
                element.innerHTML = "Edit";
              }
            }}
            className="profile-edit"
            id="linkedin_edit"
          >
            Edit
          </div>
        </div>
        <div className="profile-input-container">
          <div className="profile-input">
            <div className="profile-input-title">Portfolio</div>
            <div id="profile_portfolio" className="profile-input-value">
              <a
                id="social-link"
                className="portfolio-link"
                href={this.state.portfolio}
              >
                {this.state.portfolio}
              </a>
            </div>
            <input
              id="profile_portfolio_input"
              value={this.state.portfolio}
              className="profile-input-field"
              onChange={(e) => {
                this.setState({
                  portfolio: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={(e) => {
              $("#profile_portfolio_input, #profile_portfolio").toggle();
              console.log(e.target.id);
              const element = document.getElementById(`${e.target.id}`);
              if (element.innerHTML == "Edit") {
                element.innerHTML = "Save";
              } else {
                element.innerHTML = "Edit";
              }
            }}
            className="profile-edit"
            id="portfolio_edit"
          >
            Edit
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
