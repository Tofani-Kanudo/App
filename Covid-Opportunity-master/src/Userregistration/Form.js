import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { fetchProfile } from "../Company_Registration/actions";
import axios from "axios";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Divider, Grid } from "@material-ui/core";
class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    f_country: "India",
    city: "",
    college: "",
    degree: "",
    major: "",
    start: "",
    end: "",
    country: ["India", "Pakistan", "Bangladesh", "China"],
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://scholarly-science.herokuapp.com/accounts/dummy/id", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        const { email, full_name, phone_number } = res.data[0];

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
  }

  renderCountry = () => {
    let z = [];
    z = this.state.country.map((value) => {
      return (
        <a
          class="dropdown-item"
          href="#"
          onClick={() => {
            this.setState({ f_country: value });
          }}
        >
          {value}
        </a>
      );
    });
    return z;
  };
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", marginTop: 25 }}>
          Let's setup your profile first!
        </h3>

        <div style={{ padding: "25px 10%" }}>
          <div className="registration-input-container">
            <label
              htmlFor="firstname"
              className="registration-input-container-label"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              id="firstname"
              style={{ borderRadius: 19 }}
              value={this.state.firstname}
            />
          </div>

          <div className="registration-input-container">
            <label
              htmlFor="lastname"
              className="registration-input-container-label"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              id="lastname"
              style={{ borderRadius: 19 }}
              value={this.state.lastname}
            />
          </div>

          <div className="registration-input-container">
            <label
              htmlFor="email"
              className="registration-input-container-label"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              style={{ borderRadius: 19 }}
              value={this.state.email}
            />
          </div>

          <div className="registration-input-container">
            <label htmlFor="tel" className="registration-input-container-label">
              Mobile Number
            </label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              style={{ borderRadius: 19 }}
              className="form-control"
              size="50"
              value={this.state.number}
            />
          </div>

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div className="registration-input-container">
                <label
                  className="registration-input-container-label"
                  htmlFor="city"
                >
                  Country
                </label>
                <div class="dropdown show">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ width: "100%", borderRadius: 19 }}
                  >
                    {this.state.f_country}
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                    style={{
                      width: "100%",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {this.renderCountry()}
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="registration-input-container">
                <label
                  htmlFor="city"
                  className="registration-input-container-label"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  id="city"
                  style={{ borderRadius: 19 }}
                  onChange={(e) => {
                    this.setState({
                      city: e.target.value,
                    });
                  }}
                  value={this.state.city}
                />
              </div>
            </Grid>
          </Grid>
          <h4 className="f-head">Education</h4>

          <div className="registration-input-container">
            <label
              htmlFor="college"
              className="registration-input-container-label"
            >
              College/University
            </label>
            <input
              type="text"
              name="college"
              className="form-control"
              id="college"
              style={{ borderRadius: 19 }}
              value={this.state.college}
              onChange={(e) => {
                this.setState({
                  college: e.target.value,
                });
              }}
            />
          </div>

          <div className="registration-input-container">
            <label
              className="registration-input-container-label"
              htmlFor="degree"
            >
              Degree
            </label>
            <input
              type="text"
              name="degree"
              className="form-control"
              id="degree"
              value={this.state.degree}
              style={{ borderRadius: 19 }}
              onChange={(e) => {
                this.setState({
                  degree: e.target.value,
                });
              }}
            />
          </div>

          <div className="registration-input-container">
            <label
              className="registration-input-container-label"
              htmlFor="majorCon"
            >
              Major/Area of study
            </label>
            <input
              type="text"
              name="field"
              className="form-control"
              id="majorCon"
              style={{ borderRadius: 19 }}
              value={this.state.major}
              onChange={(e) => {
                this.setState({
                  major: e.target.value,
                });
              }}
            />
          </div>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div className="registration-input-container">
                <label
                  htmlFor="sDate"
                  className="registration-input-container-label"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="sDate"
                  className="form-control"
                  id="sdate"
                  style={{ borderRadius: 19 }}
                  value={this.state.start}
                  onChange={(e) => {
                    this.setState({
                      start: e.target.value,
                    });
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="registration-input-container">
                <label
                  htmlFor="eDate"
                  className="registration-input-container-label"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="eDate"
                  className="form-control"
                  id="eDate"
                  style={{ borderRadius: 19 }}
                  value={this.state.end}
                  onChange={(e) => {
                    this.setState({
                      end: e.target.value,
                    });
                  }}
                />
              </div>
            </Grid>
          </Grid>
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
              Next Step
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withRouter, connect(null, { fetchProfile }))(Form);
