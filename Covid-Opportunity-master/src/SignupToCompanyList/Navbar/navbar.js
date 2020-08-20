import React, { Component } from "react";
import { Link, NavLink, Redirect, withRouter } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { tokenAuth } from "../../Company_Registration/actions";
import { compose } from "redux";
import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Hidden } from "@material-ui/core";
import $ from "jquery";

class Navbar extends Component {
  state = {
    menu: false,
  };

  renderMenu = () => {
    if (this.state.menu) {
      return (
        <CloseIcon
          onClick={() => {
            this.setState({ menu: false });
            $("#mobile-menu-navbar").slideToggle("fast");
          }}
          color={"inherit"}
        />
      );
    } else {
      return (
        <MenuIcon
          onClick={() => {
            this.setState({ menu: true });
            $("#mobile-menu-navbar").slideToggle("fast");
          }}
          color={"inherit"}
        />
      );
    }
  };
  renderNav = (token) => {
    console.log(this.props.tokenReducer);
    if (token) {
      return (
        <div
          id="navbarSupportedContent"
          style={{
            background:"white",
            display: "flex",
            // zIndex: 1000,
            // position: "fixed",
            top: 0,
            left: 0,
            height: 58,
            width: "100%",
            backgroundColor:"#F6F6FA",
            // marginBottom: "25px"
            // boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <Hidden only={["xs"]}>
            <ul style={{ marginRight: "auto",listStyleType: "none" }}>
              <li>
                <Link
                  id="Banner"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "18px 0px",
                    font: "16px Roboto",
                    textDecoration: "none",
                    
                    marginLeft: 0,
                  }}
                  to="/"
                >
                  COVID Opportunities
                </Link>
              </li>
            </ul>
            <ul
              style={{
                flexFlow: "row",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <li class="nav-item">
                <Link
                  style={{ fontSize:"18px", textDecoration: "none" }}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  style={{ fontSize:"18px", textDecoration: "none" }}
                  to="/companyList"
                >
                  Companies
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  style={{ fontSize:"18px", textDecoration: "none" }}
                  to="/project"
                >
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  style={{ fontSize:"18px", textDecoration: "none" }}
                  to="/interview"
                >
                  Interview
                </Link>
              </li>
              <li
              
                onClick={() => {
                  const token = localStorage.getItem("token");
                  Axios.get("https://morning-plateau-86103.herokuapp.com/api/logout/", {
                    headers: { Authorization: `JWT ${token}` },
                  })
                    .then((res) => {
                      console.log(res);
                      localStorage.removeItem("token");
                      this.props.tokenAuth(localStorage.getItem("token"));

                      this.props.history.push("/");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
                class="nav-item"
              >
                <Link style={{ fontSize:"18px", textDecoration: "none" }}>
                Logout</Link>
              </li>
            </ul>
          </Hidden>
          <Hidden only={["xl", "lg", "md", "sm"]}>
            <ul style={{ marginRight: "auto",listStyleType: "none" }}>
              <li>
                <Link
                  id="Banner"
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    padding: "18px 0px",
                    font: "16px Roboto",
                    textDecoration: "none",
                    
                    marginLeft: 0,
                  }}
                  to="/"
                >
                  COVID Opportunities
                </Link>
              </li>
            </ul>
            <ul
              style={{
                flexFlow: "row",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <li class="nav-item">{this.renderMenu()}</li>
            </ul>
          </Hidden>
        </div>
      );
    } else {
      return (
        <div
          id="navbarSupportedContent"
          style={{
            background:"white",
            display: "flex",
            zIndex: 1000,
            // position: "fixed",
            top: 0,
            left: 0,
            height: 58,
            width: "100%",
            backgroundColor:"#F6F6FA"
            // boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          }}
        >
          <Hidden only={["xs"]}>
            <ul style={{ marginRight: "auto",listStyleType: "none" }}>
              <li>
                <Link
                  id="Banner"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "18px 0px",
                    font: "16px Roboto",
                    textDecoration: "none",
                    
                    marginLeft: 0,
                  }}
                  to="/"
                >
                  COVID Opportunities
                </Link>
              </li>
            </ul>
            <ul
              style={{
                flexFlow: "row",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <li class="nav-item">
                <Link
                  style={{ fontSize:"18px", textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  style={{ fontSize:"18px", textDecoration: "none" }}
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </Hidden>
          <Hidden only={["xl", "lg", "md", "sm"]}>
            <ul style={{ marginRight: "auto",listStyleType: "none" }}>
              <li>
                <Link
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    padding: "18px 0px",
                    font: "16px Roboto",
                    textDecoration: "none",
                    
                    marginLeft: 0,
                  }}
                  to="/"
                >
                  COVID Opportunities
                </Link>
              </li>
            </ul>
            <ul
              style={{
                flexFlow: "row",
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <li class="nav-item">{this.renderMenu()}</li>
            </ul>
          </Hidden>
        </div>
      );
    }
  };
  renderList(token) {
    if (token) {
      return (
        <ul
          style={{
            flexFlow: "column",
            justifyContent: "flex-end",
            display: "flex",
            padding: 0,
            margin: 0,
          }}
        >
        <li class="nav-item">
          <Link
            style={{ fontSize:"18px", textDecoration: "none" }}
            to="/profile"
          >
            Profile
          </Link>
        </li>
          <li class="nav-item">
            <Link
              style={{ fontSize:"18px", textDecoration: "none" }}
              to="/companyList"
            >
              Companies
            </Link>
          </li>
          <li class="nav-item">
            <Link
              style={{ fontSize:"18px", textDecoration: "none" }}
              to="/project"
            >
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <Link
              style={{ fontSize:"18px", textDecoration: "none" }}
              to="/interview"
            >
              Interview
            </Link>
          </li>
          <li
          
            onClick={() => {
              const token = localStorage.getItem("token");
              Axios.get("https://morning-plateau-86103.herokuapp.com/api/logout/", {
                headers: { Authorization: `JWT ${token}` },
              })
                .then((res) => {
                  console.log(res);
                  localStorage.removeItem("token");
                  this.props.tokenAuth(localStorage.getItem("token"));

                  this.props.history.push("/");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            class="nav-item"
          >
            <Link style={{ fontSize:"18px", textDecoration: "none" }}>
            Logout</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul
          style={{
            flexFlow: "column",
            justifyContent: "flex-end",
            display: "flex",
            padding: 0,
            margin: 0,
          }}
        >
          <li class="nav-item">
            <Link
              style={{ fontSize:"18px", textDecoration: "none" }}
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li class="nav-item">
            <Link
              style={{ fontSize:"18px", textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }
  render() {
    console.log(this.props);
    const { tokenReducer } = this.props;

    return (
      <div>
        <nav class="navbar navbar-expand-lg container" style={{padding:"18px 24px", marginRight:"12px"}}>
          {/* <div class="navbar-brand">COVID Opportunities</div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          {this.renderNav(tokenReducer)}
        </nav>
        <div
          style={{
            width: "100%",

            display: "flex",
            flexDirection: "column",
            background:"white",
            zIndex: 1000,
            display: "none",
          }}
          id="mobile-menu-navbar"
        >
          {this.renderList(tokenReducer)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ tokenReducer }) => {
  return { tokenReducer };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { tokenAuth })
)(Navbar);
