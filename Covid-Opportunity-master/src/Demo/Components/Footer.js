import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import Cards from "./Cards";

import logo from "../img/Kobo360.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Grid container>
            <Grid item sm={12}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item md={4} sm={6}>
                  <Cards
                    image={logo}
                    post="Software Development Internship"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item md={4} sm={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>

                <Grid item md={4} sm={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
                <Grid item md={4} sm={6}>
                  <Cards
                    image={logo}
                    post="Supply chain Intern"
                    company="Kobo360"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Footer;
