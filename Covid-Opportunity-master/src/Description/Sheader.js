import React, { Component } from "react";

import "./Cdescription.css";
import { withRouter } from "react-router-dom";

class Sheader extends Component {
  state = {
    company_name: "",
    company_logo: "",
  };
  componentDidMount() {
    const { company_name, company_logo } = this.props.location.state.company;

    this.setState({
      company_logo,
      company_name,
    });
  }
  render() {
    const { company_name, company_logo } = this.state;

    return (
      <div style={{ marginBottom: 10 }}>
        <div className="header_logo">
          <img
            src={company_logo}
            alt="logo"
            style={{ height: 100, width: 100, borderRadius: 19 }}
          />
        </div>
        <div className="header">
          <div className="heading"> {company_name}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ detailsReducer }) => {
  return { detailsReducer };
};

export default withRouter(Sheader);
