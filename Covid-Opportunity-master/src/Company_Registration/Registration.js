import React from "react";
import { Hidden } from "@material-ui/core";
import "./App.css";
import Form from "./components/Form";

function Registration() {
  return (
    <div>
      <h2 className="header-form">Registration</h2>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <Form class="form_containers" />
      </Hidden>
      <Hidden only={["xs"]}>
        <Form class="form_container" />
      </Hidden>
    </div>
  );
}

export default Registration;
