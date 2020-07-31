import React from "react";
import { Hidden } from "@material-ui/core";

const CompanyCard = (props) => {
  console.log(props);

  return (
    <div>
      <Hidden only={["xs"]}>
        <div class="card-custom">
          <div class="row">
            <div class="col-7">
              <img
                class="card-image"
                alt={props.data.companyname}
                src={props.data.imgsrc}
              />
            </div>
          </div>
          <div class="row">
            <div class="position-title col" style={{ fontFamily: "Roboto" }}>
              {props.data.title}
            </div>
          </div>
          <div class="row">
            <div class="company-name col" style={{ fontFamily: "Roboto" }}>
              {props.data.companyname}
              &nbsp;&nbsp;<span style={{ fontWeight: 600 }}>&#183;</span>&nbsp;
              <div class="text-muted job-type" style={{ fontFamily: "Roboto" }}>
                {props.data.type}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              &nbsp;&nbsp;
              <div class="location-text">{props.data.location}</div>
            </div>
          </div>
          <div class="row dated">
            <div class="col deadline">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              &nbsp;&nbsp;
              <div class="location-text">{props.data.deadline}</div>
            </div>
          </div>
          <hr />
          <div class="row cardFooter">
            <div class="col-6 learn-more-btn">
              <button class="btn btn-outline-secondary">Apply Now</button>
            </div>
          </div>
        </div>
      </Hidden>
      <Hidden only={["xl", "sm", "md", "lg"]}>
        <div class="card-custom" style={{ margin: "15px 0" }}>
          <div class="row">
            <div class="col-7">
              <img
                class="card-image"
                alt={props.data.companyname}
                src={props.data.imgsrc}
              />
            </div>
          </div>
          <div class="row">
            <div class="position-title col" style={{ fontFamily: "Roboto" }}>
              {props.data.title}
            </div>
          </div>
          <div class="row">
            <div class="company-name col" style={{ fontFamily: "Roboto" }}>
              {props.data.companyname}
              &nbsp;&nbsp;<span style={{ fontWeight: 600 }}>&#183;</span>&nbsp;
              <div class="text-muted job-type" style={{ fontFamily: "Roboto" }}>
                {props.data.type}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              &nbsp;&nbsp;
              <div class="location-text">{props.data.location}</div>
            </div>
          </div>
          <div class="row dated">
            <div class="col deadline">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              &nbsp;&nbsp;
              <div class="location-text">{props.data.deadline}</div>
            </div>
          </div>
          <hr />
          <div class="row cardFooter">
            <div class="col-6 learn-more-btn">
              <button class="btn btn-outline-secondary">Apply Now</button>
            </div>
          </div>
        </div>
      </Hidden>
    </div>
  );
};

export default CompanyCard;
