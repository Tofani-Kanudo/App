import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Description from "./Description";
import Buttons from "./Buttons";

class Main extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={8}>
            <Description />
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={11} wrap>
                <Buttons />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Main;
