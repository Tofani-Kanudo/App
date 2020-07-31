import React, { Component } from "react";
import { Divider, Typography } from "@material-ui/core";
import Chip from "./Chip";

class Description extends Component {
  render() {
    return (
      <div>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: "lighter", marginBottom: 30 }}
        >
          Nigeria
        </Typography>
        <Divider />
        <p className="main">
          Kobo360, is a privately owned, pan-african technology company
          disrupting and leading African third-party logistics industry.
          <br />
          <br />
          Through an all-in-one robust platform that instantly connects cargo
          owners to trucks and drivers, Kobo uses big data and agile technology
          to reduce friction and scale efficiency in the African logistics
          ecosystem.
          <br />
          <br /> The company has designed effective solutions for the challenges
          in the logistics space by connecting asset owners in the industry with
          the MSMEs that need their services.
          <br />
          <br /> Kobo is also preparing to enter the agro-trading space by
          developing a marketplace that connects farmers with buyers all over
          the world. The marketplace will effectively eliminate the high cost of
          middlemen for smallholder farmers and significantly increase their
          profits.
          <br />
          <br />
          <span style={{ fontWeight: "bolder", fontSize: 24 }}>
            Tech Stack :
          </span>
          <br />
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Chip label="SDL" />
            <Chip label="Mobile Application" />
            <Chip label="Docker" />
            <Chip label="Open-Souce Development" />
          </div>
        </p>
      </div>
    );
  }
}

export default Description;
