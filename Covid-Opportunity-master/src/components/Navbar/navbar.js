import React, { Component } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";
import { tokenAuth } from "../../Company_Registration/actions";
class Navbar extends Component {
  renderNav = (token) => {
    console.log(this.props);
    if (token) {
      return (
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/login">
            <a class="navbar-brand" href="">
              <h4>Scholarly-Science</h4>
            </a>
          </Link>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <Link to="/companyList">
                <a class="nav-link" href="">
                  Company List
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/opening">
                <a class="nav-link" href="">
                  Opening
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/registration">
                <a class="nav-link" href="">
                  Registration
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/dreamjob">
                <a class="nav-link" href="">
                  Dream Job
                </a>
              </Link>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0 fetch-btns">
            <button
              class="btn btn-outline-info my-2 my-sm-0"
              id="logout"
              onClick={() => {
                Axios.get("http://scholarly-api.herokuapp.com/api/logout")
                  .then((res) => {
                    console.log(res);
                    localStorage.removeItem("token");
                    this.props.tokenAuth(localStorage.getItem("token"));
                    return <Redirect to="/login" />;
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/login">
            <a class="navbar-brand" href="">
              <h4>Scholarly-Science</h4>
            </a>
          </Link>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <div class="form-inline my-2 my-lg-0 fetch-btns">
            <Link to="/login">
              <button
                class="btn btn-outline-info my-2 my-sm-0"
                id="defaultAPIbtn"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                class="btn btn-outline-info my-2 my-sm-0"
                id="customAPIbtn"
              >
                Signup
              </button>
            </Link>
          </div>
        </div>
      );
    }
  };
  render() {
    console.log(this.props);
    const { tokenReducer } = this.props;

    return (
      <NavLink activeClassName="active" to="/">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          {this.renderNav(tokenReducer)}
        </nav>
      </NavLink>
    );
  }
}
const mapStateToProps = ({ tokenReducer }) => {
  return { tokenReducer };
};
export default connect(mapStateToProps, { tokenAuth })(Navbar);
