import React from "react";
import BackgroundSVG from "../Profile/Profile/BackgroundSVG";
import "./user.css";
import Form from "./Form";
import { Grid, Hidden } from "@material-ui/core";

function User() {
  return (
    <div>
      <Hidden only={["xs"]}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "60%", position: "fixed", top: 40 }}>
            <img
              src="Group 10.png"
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
          <div style={{ width: "40%", left: "60%", position: "relative" }}>
            <Form />
          </div>
        </div>
      </Hidden>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <div>
          <Form />
        </div>
      </Hidden>
    </div>
  );
}

export default User;
