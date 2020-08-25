import React from "react";
import "./Cdescription.css";
import Mdescription from "./Mdescription";
import Sheader from "./Sheader";
import { Hidden, Container } from "@material-ui/core";
import Main from "./Main";
import Modal from "./Modal";

function CompanyDescription(props) {
  return (
    <div>
      <div className="company-description-container">
        <Hidden only={["xs"]}>
          <div
            className="back-button"
            onClick={() => {
              window.history.back();
            }}
            style={{ top: 80, left: 15 }}
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
          <Container>
            <Sheader />
            <Main />
          </Container>
        </Hidden>
        <Hidden only={["lg", "md", "sm", "xl"]}>
          <Mdescription />
        </Hidden>
      </div>

      <Modal />
    </div>
  );
}

export default CompanyDescription;
