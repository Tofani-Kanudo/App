import React, { Component } from "react";
import Signup from "./SignupToCompanyList/signup/signup";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./SignupToCompanyList/login/login";
import ThankYouLayout from "./SignupToCompanyList/Layout/layout";
import CompanyList from "./SignupToCompanyList/CompanyList/comapanyList";
import Navbar from "./SignupToCompanyList/Navbar/navbar";
import Registration from "./Company_Registration/Registration";
import DreamJob from "./Dream_Job/Dream_Job";
import Opening from "./Openings/Opening";
import Demo from "./Demo/Demo";
import { tokenAuth } from "./Company_Registration/actions";
import { connect } from "react-redux";
import CompanyProject from "./CompanyProjects/companyProjects";
import ProjectDescription from "./ProjectDescription/projectDescription";
import CompanyDescription from "./Description/CompanyDescription";
import ForgotPassword from "./ForgotPassword/forgotPassword";
import Home from "./Landing/home";

import User from "./Userregistration/User";
import Usernext from "./Userregistration/Usernext";
import Interview from "./Interview/Interview";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.tokenAuth(token);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              {this.props.tokenReducer ? (
                <Redirect to="/companyList" />
              ) : (
                <Home />
              )}
            </Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/assignmentKey" component={ForgotPassword}></Route>
            <Route path="/thankyou" component={ThankYouLayout}></Route>
            <Route path="/interview" component={Interview}></Route>

            <Route path="/admin" component={Registration}></Route>
            <Route path="/dreamjob" component={DreamJob}></Route>
            <Route path="/opening" component={Opening}></Route>
            <Route path="/user1" component={User}></Route>
            <Route path="/demo" component={Demo}></Route>
            <Route path="/user2" component={Usernext}></Route>

            <Route path="/companyList" component={CompanyList}></Route>
            <Route path="/description" component={CompanyDescription}></Route>

            <Route exact path="/project" component={CompanyProject}></Route>
            <Route
              exact
              path="/project/:id"
              component={ProjectDescription}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = ({ tokenReducer }) => {
  return { tokenReducer };
};

export default connect(mapStateToProps, { tokenAuth })(App);
