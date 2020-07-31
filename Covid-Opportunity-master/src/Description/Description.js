import React, { Component } from "react";
import { Divider, Typography, Hidden } from "@material-ui/core";
import Chip from "./Chip";

import { withRouter } from "react-router-dom";
class Description extends Component {
  state = {
    Description: "",
    location: "",
    tags: [],
  };

  componentDidMount() {
    const { Description, location, tags } = this.props.location.state.company;
    window.scrollTo(0, 0);
    const company_location = this.props.location.state.f_location.replace(
      "-",
      ", "
    );
    document.getElementById("main_value").innerText = Description;

    this.setState({
      Description,
      location: company_location,
      tags,
    });
  }
  renderChip = (tags) => {
    let z = [];
    z = tags.map((value) => {
      return <Chip label={value} />;
    });
    return z;
  };
  render() {
    const { Description, location, tags } = this.state;
    console.log(this.props);

    return (
      <div>
        <div className="description-location">{location}</div>
        <Divider />

        <p className="main" id="main_value" style={{ paddingRight: 60 }}></p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {this.renderChip(tags)}
        </div>
      </div>
    );
  }
}

export default withRouter(Description);
