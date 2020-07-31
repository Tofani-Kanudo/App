import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Scards from "./Scards";
import logo from "../img/Kobo360.png";

class Sfooter extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(246,244,252)", padding: 10 }}>
        <div style={{ marginTop: 25, marginBottom: 25 }}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Scards
                    image={logo}
                    post="Supply chain Intern "
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Scards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Scards
                    image={logo}
                    post="Software Development Internship"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Scards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Scards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Scards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Sfooter;
