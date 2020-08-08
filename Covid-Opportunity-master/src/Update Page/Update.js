import React, { Component } from "react";
import $ from "jquery";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import "./Update.css";

class Update extends Component {
  state = {
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
    axios.get("http://scholarly-science.herokuapp.com/accounts/dummy/user/", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        const email = res.data[0]["email"], full_name = res.data[0]["full_name"], phone_number = res.data[0]["phone_number"]
        // const { email, full_name, phone_number } = res.data[0];
        let name = full_name.split(" ");
        this.setState({
          email,
          number: phone_number,
          firstname: name[0],
          lastname: name[1],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get("http://scholarly-science.herokuapp.com/accounts/dummy/profile/", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        const city=res.data[0]["location"],skillArray=res.data[0]["skills"],git=res.data[0]["github"],lin=res.data[0]["linkedin"],line=res.data[0]["lineid"],port=res.data[0]["portfolio"],wec=res.data[0]["wechat"]
        this.setState({
          city: city,skillArray:skillArray,github:git,linkedin: lin,lineid:line,portfolio:port,wechat:wec
        });
        console.log(res.data[0])
      })
      .catch((err) => {
        console.log(err);
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
              }}
            >
              Personal Information
            </h3>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container ">
                <label className="application-label application-label-required">
                  First name
                </label>
                <input className="application-input" required value={this.state.firstname}/>
              </div>
              <div className="col-md-6 col-sm-12 application-input-container ">
                <label className="application-label application-label-required">
                  Last name
                </label>
                <input className="application-input" value={this.state.lastname}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label application-label-required">
                  Email
                </label>
                <input className="application-input" value={this.state.email}/>
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
                <input className="application-input" value={this.state.city}/>
              </div>
            </div>
          </div>
          <div className="application-container">
            <div className="row">
              <div className="col-md-1 col-sm-12">
                <h3
                  style={{
                    color: "#464646",

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
                  <input className="application-input application-input-container" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label className="application-label">
                    Major/Area of study
                  </label>
                  <input className="application-input application-input-container" />
                </div>

                <div className="col-md-6 col-sm-12">
                  <label className="application-label">Degree</label>
                  <input className="application-input application-input-container" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <label className="application-label">Location(City)</label>
                  <input className="application-input application-input-container" />
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
                  />
                </div>

                <div className="col-md-6 col-sm-12">
                  <label className="application-label application-input-container">
                    To
                  </label>
                  <input
                    type="date"
                    className="application-input application-input-container"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <input style={{ marginRight: 7 }} type="checkbox" />
                  <label className="application-label">
                    I currently attend
                  </label>
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
                <input className="application-input" value={this.state.github}/>
              </div>
              <div className="col-md-6 col-sm-12 application-input-container ">
                <label className="application-label">LinkedIn URL</label>
                <input className="application-input" value={this.state.linkedin}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label">Line ID</label>
                <input className="application-input" value={this.state.lineid}/>
              </div>
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label">Portfolio URL</label>
                <input className="application-input" value={this.state.portfolio}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12 application-input-container">
                <label className="application-label">WeChat ID</label>
                <input className="application-input" value={this.state.wechat}/>
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
              onClick={(e) => {
                e.preventDefault();

                const {
                  firstname,
                  lastname,
                  number,
                  email,
                  city,
                  country,
                  college,
                  degree,
                  major,
                  start,
                  end,
                  f_country,
                } = this.state;
                this.props.fetchProfile({
                  firstname,
                  lastname,
                  number,
                  email,
                  city,
                  country,
                  college,
                  degree,
                  major,
                  start,
                  end,
                  f_country,
                });
                console.log("done");
                this.props.history.push("/user2");
              }}
              className="button"
              style={{ width: "80%" }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
