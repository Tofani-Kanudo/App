import React from "react";
import "./Opening.css";
import Header from "./Header";
import Body from "./Body";
import { Hidden } from "@material-ui/core";
import Wheader from "./Wheader";

function Opening() {
  return (
    <div>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <Header />
        <Body />
      </Hidden>

      <Hidden only={["xs"]}>
        <Wheader />
      </Hidden>
    </div>
  );
}

export default Opening;
