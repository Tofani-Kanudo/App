import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import $ from "jquery";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Divider } from "@material-ui/core";

export default class Form extends Component {
  state = {
    name: "Ritik",
    email: "sinharitik18112835@gmail.com",
    location: "Munger,India",
    number: "6202165155",
    github: "Sinharitik589.github.io",
    linkedin: "https://linkedin.com",
    portfolio: "www.user_portfolio.com",
    college: "Unknown University",
    skills: ["UI designer", "Adobe Xd", "MERN"],
  };

  componentDidMount() {
    var inputSkill = document.getElementById("web_skill_input");
    inputSkill.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        let f_array = this.state.skills;
        f_array.push(event.target.value);
        this.setState({
          skills: f_array,
        });
        $("#web_skill_input, #web_profile_skill").toggle();
      }
    });
    var inputEmail = document.getElementById("email_edit_web");
    inputEmail.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          email: event.target.value,
        });
        $("#email_web,#email_edit_web").toggle();
      }
    });
    var inputName = document.getElementById("name_edit_web");
    inputName.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          name: event.target.value,
        });
        $("#name_web,#name_edit_web").toggle();
      }
    });
    var inputNumber = document.getElementById("number_edit_web");
    inputNumber.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          number: event.target.value,
        });
        $("#number_web,#number_edit_web").toggle();
      }
    });
    var inputLocation = document.getElementById("location_edit_web");
    inputLocation.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          location: event.target.value,
        });
        $("#location_web,#location_edit_web").toggle();
      }
    });
    var inputGithub = document.getElementById("github_edit_web");
    inputGithub.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          github: event.target.value,
        });
        $("#github_web,#github_edit_web").toggle();
      }
    });
    var inputLinkedin = document.getElementById("linkedin_edit_web");
    inputLinkedin.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          linkedin: event.target.value,
        });
        $("#linkedin_web,#linkedin_edit_web").toggle();
      }
    });
    var inputPortfolio = document.getElementById("portfolio_edit_web");
    inputPortfolio.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          portfolio: event.target.value,
        });
        $("#portfolio_web,#portfolio_edit_web").toggle();
      }
    });
    var inputCollege = document.getElementById("college_edit_web");
    inputCollege.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        this.setState({
          college: event.target.value,
        });
        $("#college_web,#college_edit_web").toggle();
      }
    });
  }

  renderTags = () => {
    let z = [];
    let f_array = this.state.skills;
    z = f_array.map((value) => {
      return (
        <div className="web-profile-tags">
          {value}
          <span
            class="closebtn"
            style={{ marginLeft: 4, fontSize: 18, cursor: "pointer" }}
            id={`btn_${value.replace(" ", "_")}`}
            onClick={(e) => {
              let element = document.getElementById(e.target.id);
              var index = f_array.findIndex((element) => {
                return element == value;
              });
              if (index != -1) {
                f_array.splice(index, 1);
                this.setState({ skills: f_array });
                console.log(this.state.skills);
              }
              element.parentElement.style.display = "none";
            }}
          >
            &times;
          </span>
        </div>
      );
    });
    return z;
  };

  render() {
    const {
      email,
      name,
      number,
      location,
      github,
      linkedin,
      portfolio,
      college,
    } = this.state;
    return (
      <div className="col-lg-6 col-md-6 col-sm-10 ">
        <div onClick={(e) => e.preventDefault()}>
          <div
            className="form-container"
            style={{
              lineHeight: "1.1rem",
              padding: "30px 5px",
              textAlign: "left",
            }}
          >
            <form>
              <div
                className="prof-image-wrapper"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 10,
                  fontFamily: "Roboto",
                }}
              >
                <h2>Profile</h2>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 group">
                  <div
                    className="prof-image-wrapper"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src=""
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                    <AddAPhotoIcon
                      style={{ position: "relative", top: 60, right: 10 }}
                    />
                    <input
                      id="imageSelector"
                      style={{ display: "none" }}
                      type="file"
                    />
                  </div>
                </div>
                <div className="form-group col-md-4 gap"></div>
                <div className="form-group col-md-4 group">
                  <input
                    type="text"
                    name="web_name"
                    className="form-control web-profile-input"
                    id="name_edit_web"
                    style={{ borderRadius: 19, display: "none" }}
                    value={name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                  <div
                    id="name_web"
                    className="profile-web-input-container"
                    style={{ justifyContent: "center" }}
                  >
                    <div
                      className="profile-web-value"
                      style={{ fontSize: 25, marginBottom: 7 }}
                    >
                      {name}
                    </div>
                    <div
                      onClick={() => {
                        $("#name_web,#name_edit_web").toggle();
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-4 gap"></div>
              </div>
              <h4
                className="f-head"
                style={{ fontFamily: "Roboto", marginBottom: 5, marginTop: 0 }}
              >
                About
              </h4>
              <Divider />
              <div className="form-row" style={{ marginTop: 12 }}>
                <div className="form-group col-md-7 group">
                  <label htmlFor="email" className="web-profile-label">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control web-profile-input"
                    style={{ borderRadius: 19, display: "none" }}
                    id="email_edit_web"
                    value={email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />

                  <div id="email_web" className="profile-web-input-container">
                    <div className="profile-web-value">{email}</div>
                    <div
                      onClick={() => {
                        $("#email_web,#email_edit_web").toggle();
                        console.log("clicked");
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>

                <div className="form-group col-md-5 group">
                  <label className="web-profile-label">Mobile Number</label>
                  {
                    <input
                      type="text"
                      name="email"
                      className="form-control web-profile-input"
                      id="number_edit_web"
                      value={number}
                      style={{ borderRadius: 19, display: "none" }}
                      onChange={(e) => {
                        this.setState({ number: e.target.value });
                      }}
                    />
                  }
                  <div id="number_web" className="profile-web-input-container">
                    <div className="profile-web-value">{number}</div>
                    <div
                      onClick={() => {
                        $("#number_web,#number_edit_web").toggle();
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-5 group">
                  <label className="web-profile-label">Location</label>
                  {
                    <input
                      type="text"
                      name="email"
                      className="form-control web-profile-input"
                      id="location_edit_web"
                      style={{ borderRadius: 19, display: "none" }}
                      value={location}
                      onChange={(e) => {
                        this.setState({ location: e.target.value });
                      }}
                    />
                  }
                  <div
                    id="location_web"
                    className="profile-web-input-container"
                  >
                    <div className="profile-web-value">{location}</div>
                    <div
                      onClick={() => {
                        $("#location_web,#location_edit_web").toggle();
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="f-head"
                style={{ fontFamily: "Roboto", marginBottom: 5, marginTop: 10 }}
              >
                Social
              </h4>
              <Divider />
              <div className="form-row" style={{ marginTop: 12 }}>
                <div className="form-group col-md-5 group">
                  <label htmlFor="email" className="web-profile-label">
                    Github
                  </label>
                  {
                    <input
                      type="email"
                      name="email"
                      className="form-control web-profile-input"
                      id="github_edit_web"
                      value={github}
                      style={{ borderRadius: 19, display: "none" }}
                      onChange={(e) => {
                        this.setState({ github: e.target.value });
                      }}
                    />
                  }
                  <div id="github_web" className="profile-web-input-container">
                    <div className="profile-web-value">{github}</div>
                    <div
                      onClick={() => {
                        $("#github_web,#github_edit_web").toggle();
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-2 gap"></div>
                <div className="form-group col-md-5 group">
                  <label htmlFor="email" className="web-profile-label">
                    LinkedIn
                  </label>
                  {
                    <input
                      type="email"
                      name="email"
                      className="form-control web-profile-input"
                      id="linkedin_edit_web"
                      style={{ borderRadius: 19, display: "none" }}
                      value={linkedin}
                      onChange={(e) => {
                        this.setState({ linkedin: e.target.value });
                      }}
                    />
                  }
                  <div
                    id="linkedin_web"
                    className="profile-web-input-container"
                  >
                    <div className="profile-web-value">{linkedin}</div>
                    <div
                      onClick={() => {
                        $("#linkedin_web,#linkedin_edit_web").toggle();
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-5 group">
                  <label htmlFor="email" className="web-profile-label">
                    Portfolio
                  </label>
                  {
                    <input
                      type="email"
                      name="email"
                      className="form-control web-profile-input"
                      id="portfolio_edit_web"
                      style={{ borderRadius: 19, display: "none" }}
                      value={portfolio}
                      onChange={(e) => {
                        this.setState({ portfolio: e.target.value });
                      }}
                    />
                  }
                  <div
                    id="portfolio_web"
                    className="profile-web-input-container"
                  >
                    <div className="profile-web-value">{portfolio}</div>
                    <div
                      onClick={() => {
                        $("#portfolio_web,#portfolio_edit_web").toggle();
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>
              </div>
              <h4
                className="f-head"
                style={{ fontFamily: "Roboto", marginBottom: 5, marginTop: 10 }}
              >
                Education
              </h4>
              <Divider />
              <div className="form-row" style={{ marginTop: 12 }}>
                <div className="form-group col-md-5 group">
                  <label htmlFor="email" className="web-profile-label">
                    College/University
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control web-profile-input"
                    style={{ borderRadius: 19, display: "none" }}
                    id="college_edit_web"
                    value={college}
                    onChange={(e) => {
                      this.setState({ college: e.target.value });
                    }}
                  />

                  <div id="college_web" className="profile-web-input-container">
                    <div className="profile-web-value">{college}</div>
                    <div
                      onClick={() => {
                        $("#college_web,#college_edit_web").toggle();
                      }}
                      className="profile-web-edit"
                    >
                      edit
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-12 group">
                  <label
                    htmlFor="email"
                    className="web-profile-label"
                    style={{ textAlign: "left" }}
                  >
                    Skills
                  </label>

                  <div className="web-profile-tag-container">
                    {this.renderTags()}
                    <div
                      className="web-profile-tags"
                      id="web_profile_skill"
                      style={{
                        backgroundColor: "orange",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        $("#web_skill_input, #web_profile_skill").toggle();
                      }}
                    >
                      + Add Skills
                    </div>
                    <input
                      type="text"
                      name="email"
                      className="form-control web-profile-input"
                      id="web_skill_input"
                      style={{
                        width: "30%",
                        borderRadius: 19,
                        display: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="btn-div">
                  <button type="submit" className="button">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
