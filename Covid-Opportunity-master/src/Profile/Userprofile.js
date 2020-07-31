import React from "react";
import { Hidden } from "@material-ui/core";
import "./profile.css";
import Profile from "./Profile";
import BackgroundSVG from "./Profile/BackgroundSVG";
import Form from "./Profile/Form";

function Userprofile() {
  return (
    <div>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <Profile />
      </Hidden>
      <Hidden only={["xs"]}>
        <div style={{ margin: "0 6%" }}>
          <div className="row">
            <BackgroundSVG />

            <Form />
          </div>
        </div>
      </Hidden>
    </div>
  );
}

export default Userprofile;
