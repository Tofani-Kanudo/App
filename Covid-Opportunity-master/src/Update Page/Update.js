import {Link} from "react-router-dom";
import React, { Component } from "react";
import $ from "jquery";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import "./Update.css";

class Update extends Component {
  state = {
    "id": "",
    "email": "",
    "full_name": "",
    "phone_number": "",
    "city": "",
    "location": "", 
    "college": "",
    "degree": "",
    "trade": "",
    "preferences": [],
    "preference_role": [],
    "skills": [],
    "profession": "",
    "linkedin": "",
    "github": "",
    "wechat": "",
    "lineid": "",
    "dribble": "",
    "portfolio": "",
    skillArray: [],
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios.get("https://api.covid-careers.com/accounts/dummy/id/", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        const id=res.data[0]["id"], email = res.data[0]["email"], full_name = res.data[0]["full_name"], phone_number = res.data[0]["phone_number"]
        // const { email, full_name, phone_number } = res.data[0];
        let name = full_name.split(" ");
        this.setState({
          id: id,
          email,
          number: phone_number,
          firstname: name[0],
          lastname: name[1],
        });
        console.log(this.state.number)
      })
      .catch((err) => {
        console.log(err.response);
      });
    var inputOpening = document.getElementById("add_skill");
    inputOpening.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        let array = this.state.skillArray;
        array.push(event.target.value);
        this.setState({ skillArray: array });
        event.target.value = "";
        $("#add_skill").hide();
      }
    });
  }

  renderSkills() {
    return this.state.skillArray.map((value) => {
      return (
        <div className="application-tag-container">
          <div className="application-tags">
            {value}
            <span
              style={{ marginLeft: 4, cursor: "pointer" }}
              id={`btn_${value}`}
              onClick={(e) => {
                let element = document.getElementById(e.target.id);

                element.parentElement.style.display = "none";
              }}
            >
              &times;
            </span>
          </div>
        </div>
      );
    });
  }

  renderEducation() {
    return this.state.skillArray.map((value) => {
      return (
        <div className="application-tag-container">
          <div className="application-tags">
            {value}
            <span
              style={{ marginLeft: 4, cursor: "pointer" }}
              id={`btn_${value}`}
              onClick={(e) => {
                let element = document.getElementById(e.target.id);

                element.parentElement.style.display = "none";
              }}
            >
              &times;
            </span>
          </div>
        </div>
      );
    });
  }

  sendData = () => {
    const {
      skillArray,
      city,
      github,
      linkedin,
      line,
      portfolio,
      wechat,
      college,
      degree,
      major,
      location,
      start_date,
      end_date,
    }=this.state;
    let token = localStorage.getItem("token");
    axios.post(`https://api.covid-careers.com/accounts/dummy/profile/`,
    {
      city: city,
      location: location,
      college: college,
      degree: degree,
      trade: major,
      start_date: start_date,
      end_date: end_date,
      skills: skillArray,
      linkedin: linkedin,
      github: github,
      wechat: wechat,
      lineid: line,
      portfolio: portfolio,
      first_time_login: true,
    },
    {
      headers: { Authorization: `JWT ${token}` },
    }
  )
  .then((res) => {
    alert("Info Saved Successfully.");
    this.props.history.push("/companyList")
  })
  .catch((err) => {
    console.log(err.response);
    alert("Some Error Occurred");
  });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="application-container">
            <h3
              style={{
                color: "#464646",
                marginBottom: "22px",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              Personal Information
            </h3>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container ">
                <label className="application-label application-label-required">
                  First name
                </label>
                <input className="application-input" required defaultValue={this.state.firstname} onChange={(e) => {
                    this.setState({ firstname: e.target.value });
                  }}/>
              </div>
              <div className="col-md-6 col-sm-12 application-input-container ">
                <label className="application-label application-label-required">
                  Last name
                </label>
                <input className="application-input" defaultValue={this.state.lastname} onChange={(e) => {
                    this.setState({ lastname: e.target.value });
                  }}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label application-label-required">
                  Email
                </label>
                <input className="application-input" defaultValue={this.state.email} onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}/>
              </div>
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label application-label-required">
                  Mobile Number
                </label>
                <PhoneInput
                  defaultCountry={"in"}
                  placeholder="Enter Your Mobile Number"
                  inputStyle={{
                    height: "30px",
                    width: "100%",
                    border: "1px solid #ddd",
                  }}
                  containerStyle={{ width: "100%" }}
                  country={"in"}
                  value={this.state.number}
                  onChange={phone => this.setState({ phone })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label">
                  Alternate Mobile Number
                </label>
                <PhoneInput
                  defaultCountry={"in"}
                  inputStyle={{
                    height: "30px",
                    width: "100%",
                    border: "1px solid #ddd",
                  }}
                  containerStyle={{ width: "100%" }}
                  country={"in"}
                  placeholder="Enter Alternate Mobile Number"
                />
              </div>
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label application-label-required">
                  Location(City)
                </label>
                <input className="application-input" defaultValue={this.state.location} onChange={(e) => {
                    this.setState({ city: e.target.value });
                  }}/>
              </div>
            </div>
          </div>
          <div className="application-container">
            <div className="row">
              <div className="col-md-1 col-sm-12">
                <h3
                  style={{
                    fontSize: "22px",
                    color: "#464646",
                    fontSize: "22px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Skills
                </h3>
              </div>
              <div className="col-md-9 col-sm-12">
                <div className="skills">
                  {this.renderSkills()}
                  <input
                    className="application-input application-skill"
                    id="add_skill"
                  />
                </div>
              </div>
              <div
                className="col-md-2 col-sm-12 "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => {
                    $("#add_skill").show();
                  }}
                  className="application-button-container"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
          <div className="application-container">
            <div className="row">
              <div className="col-md-1 col-sm-12">
                <h3
                  style={{
                    fontSize: "22px",
                    color: "#464646",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Education
                </h3>
              </div>
              <div className="col-md-9 col-sm-12"></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="col-md-2 col-sm-12"
              >
                <button
                  onClick={() => {
                    $("#edit_panel").show();
                  }}
                  className="application-button-container"
                >
                  + Add
                </button>
              </div>
            </div>
            <div className="edit-panel" id="edit_panel">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <label className="application-label">
                    College/University
                  </label>
                  <input className="application-input application-input-container" onChange={(e) => {
                    this.setState({ college: e.target.value });
                  }}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label className="application-label">
                    Major/Area of study
                  </label>
                  <input className="application-input application-input-container" onChange={(e) => {
                    this.setState({ major: e.target.value });
                  }}/>
                </div>

                <div className="col-md-6 col-sm-12">
                  <label className="application-label">Degree</label>
                  <input className="application-input application-input-container" onChange={(e) => {
                    this.setState({ degree: e.target.value });
                  }}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <label className="application-label">Location(City)</label>
                  <input className="application-input application-input-container" onChange={(e) => {
                    this.setState({ location: e.target.value });
                  }}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label className="application-label application-input-container">
                    From
                  </label>
                  <input
                    type="date"
                    className="application-input application-input-container"
                    onChange={(e) => {
                      this.setState({ start_date: e.target.value });
                    }}
                  />
                </div>

                <div className="col-md-6 col-sm-12">
                  <label className="application-label application-input-container">
                    To
                  </label>
                  <input
                    type="date"
                    className="application-input application-input-container"
                    onChange={(e) => {
                      this.setState({ end_date: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  margin: "15px 0",
                }}
              >
                <button
                  onClick={() => {
                    $("#edit_panel").hide();
                  }}
                  className=" panel-button"
                  style={{ backgroundColor: "#365679", color: "white" }}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    $("#edit_panel").hide();
                  }}
                  className="panel-button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="application-container">
            <h3
              style={{
                    fontSize: "22px",
                color: "#464646",
                marginBottom: "22px",
                fontWeight: "bold",
              }}
            >
              On The Web
            </h3>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container ">
                <label className="application-label">Github URL</label>
                <input className="application-input" defaultValue={this.state.github} onChange={(e) => {
                    this.setState({ github: e.target.value });
                  }}/>
              </div>
              <div className="col-md-6 col-sm-12 application-input-container ">
                <label className="application-label">LinkedIn URL</label>
                <input className="application-input" defaultValue={this.state.linkedin} onChange={(e) => {
                    this.setState({ linkedin: e.target.value });
                  }}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label">Line ID</label>
                <input className="application-input" defaultValue={this.state.lineid} onChange={(e) => {
                    this.setState({ lineid: e.target.value });
                  }}/>
              </div>
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label">Portfolio URL</label>
                <input className="application-input" defaultValue={this.state.portfolio} onChange={(e) => {
                    this.setState({ portfolio: e.target.value });
                  }}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label">WeChat ID</label>
                <input className="application-input" defaultValue={this.state.wechat} onChange={(e) => {
                    this.setState({ wechat: e.target.value });
                  }}/>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 35,
            }}
          >
            <button
              onClick={this.sendData}
              className="button"
              // style={{ width: "500%" }}
            >
              Update
            </button><Link to="/companyList">
            <button className="button">Skip For Now</button></Link>
          </div>
        </div>
        <br/>
        <br/>

      </div>
    );
  }
}

export default Update;
