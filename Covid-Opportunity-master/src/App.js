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
import Update from "./Update Page/Update";
import User from "./Userregistration/User";
import Usernext from "./Userregistration/Usernext";
import Interview from "./Interview/Interview";

class App extends Component {
  componentDidMount() {
    const token = sessionStorage.getItem("token");
    this.props.tokenAuth(token);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              {sessionStorage.getItem("token")!=null ? (
                <Redirect to="/companyList" />
              ) : (
                <Home />
              )}
            </Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/assignmentKey" >
              {/* <Navbar /> */}
              <ForgotPassword/>
              </Route>
            <Route path="/thankyou" >
              {/* <Navbar /> */}
              <ThankYouLayout/>
              </Route>
            <Route path="/interview" >
              {/* <Navbar /> */}
              <Interview/>
              </Route>

            <Route path="/admin" >
              {/* <Navbar /> */}
              <Registration/>
              </Route>
            <Route path="/dreamjob" >
              {/* <Navbar /> */}
              <DreamJob/>
              </Route>
            <Route path="/opening" >
              {/* <Navbar /> */}
              <Opening/>
              </Route>
            <Route path="/user1" >
              {/* <Navbar /> */}
              <User/>
              </Route>
            <Route path="/demo" >
              {/* <Navbar /> */}
              <Demo/>
              </Route>
            <Route path="/user2" >
              {/* <Navbar /> */}
              <Usernext/>
              </Route>
            <Route path="/update" >
              <Update/>
              </Route>
            <Route path="/profile">
                {/* <Navbar /> */}
                <Update/>
            </Route>
            <Route path="/companyList" >
              {/* <Navbar /> */}
              <CompanyList/>
              </Route>
            <Route path="/description" >
              {/* <Navbar /> */}
              <CompanyDescription/>
              </Route>

            <Route exact path="/project" >
              {/* <Navbar /> */}
              <CompanyProject/>
              </Route>
            <Route
              exact
              path="/project/:id">
                {/* <Navbar /> */}
                <ProjectDescription/>
              </Route>
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
