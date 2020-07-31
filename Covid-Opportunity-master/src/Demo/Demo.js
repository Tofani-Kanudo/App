import React, { Component } from "react";
import { Hidden, Grid } from "@material-ui/core";

import "./Demo.css";
import InputCard from "./Components/InputCard";
import Logo from "./Components/Logo";

import Slogo from "./Components/Slogo";
class Demo extends Component {
  render() {
    return (
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hidden only={["lg", "md", "sm", "xl"]}>
          <div className="main_containers">
            <div className="header_wrap">
              <div className="first_header">Schedule your demo.</div>
              <p className="para">
                Fill out the form, and one of our experts will personally walk
                you through what Jumpstart can do for your company.
              </p>
            </div>
            <InputCard label="input_card" tlabel="sinput_field" />

            <div className="main_containers">
              <div className="s_second_header">
                Trusted by the world's best.
              </div>
              <p>
                Join hundreds of companies that discover passionate and diverse
                talent with Jumpstart.
              </p>
            </div>
          </div>
          <Slogo />
        </Hidden>
        <Hidden only={["xs"]}>
          <div className="main_container">
            <Grid container>
              <Grid item sm={5}>
                <div>
                  <div className="first_header">Schedule your demo.</div>
                  <p className="para">
                    Fill out the form, and one of our experts will personally
                    walk you through what Jumpstart can do for your company.
                  </p>
                </div>
                <div>
                  <div className="second_header">
                    Trusted by the world's best.
                  </div>
                  <p className="para">
                    Join hundreds of companies that discover passionate and
                    diverse talent with Jumpstart.
                  </p>
                </div>
                <Logo />
              </Grid>

              <Grid item sm={7}>
                <InputCard label="input_cards" tlabel="input_field" />
              </Grid>
            </Grid>
          </div>
        </Hidden>
      </div>
    );
  }
}

export default Demo;
