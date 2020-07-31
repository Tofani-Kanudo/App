import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import $ from "jquery";

class Mdescription extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.getElementById(
      "mobile-description"
    ).innerText = this.props.location.state.company.Description;
  }
  renderChips = (tags) => {
    let z = [];
    z = tags.map((value) => {
      return <div className="tag-chip">{value}</div>;
    });
    return z;
  };
  render() {
    const {
      Description,
      location,
      tags,
      company_logo,
      company_name,
    } = this.props.location.state.company;
    const company_location = this.props.location.state.f_location.replace(
      "-",
      ", "
    );

    return (
      <div className="body">
        <div className="header">
          <div className="mainellipse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="415.228"
              height="399.021"
              viewBox="0 0 415.228 399.021"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M-44,268.217s2.018-67.16,49.831-62.106,208.305-10.39,275.991-10.39S371.228,130.8,371.228,130.8V-130.8H-44Z"
                transform="translate(44 130.804)"
                fill="#FEE9CE"
              />
            </svg>
          </div>

          <div className="blue-yellow-pink">
            <svg
              width="298"
              height="263"
              viewBox="0 0 298 263"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="179.5" cy="118" rx="118.5" ry="118" fill="#FEFFFD" />
              <ellipse cx="178.5" cy="118" rx="84.5" ry="83" fill="#FFDD83" />
              <ellipse cx="43.5" cy="167" rx="43.5" ry="43" fill="#4F51C0" />
              <ellipse cx="204" cy="239" rx="25" ry="24" fill="#FF91A5" />
            </svg>
          </div>
          <div className="description-top-blue">
            <div className="company-description">
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  color: "white",
                  marginBottom: 2,
                  position: "absolute",
                  top: 30,
                }}
              >
                {company_name}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "white",
                  position: "absolute",
                  top: 72,
                }}
              >
                {company_location}
              </div>
            </div>
          </div>
          <div
            className="back-button"
            onClick={() => {
              this.props.history.push("/companyList");
            }}
          >
            <svg
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.9231 11L12.524 19.3174C13.1587 19.9311 13.1587 20.9261 12.524 21.5397C11.8894 22.1534 10.8606 22.1534 10.226 21.5397L0.475951 12.1112C-0.158651 11.4975 -0.158651 10.5025 0.475951 9.88883L10.226 0.46026C10.8606 -0.153421 11.8894 -0.153421 12.524 0.46026C13.1587 1.07394 13.1587 2.06891 12.524 2.68259L3.9231 11Z"
                fill="#545151"
              />
            </svg>
          </div>
          <div className="description-logos">
            <img src={company_logo} />
          </div>
        </div>
        <p id="mobile-description" className="mobile-company-description"></p>

        <div className="tag">{this.renderChips(tags)}</div>

        <div
          className="des-button-wrapper"
          onClick={() => {
            window.scrollTo(0, 0);
            $("#modal").slideToggle("slow");
          }}
        >
          <div className="description-button">Get Employee Refferal</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Mdescription);
