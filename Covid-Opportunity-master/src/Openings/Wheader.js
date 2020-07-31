import React from "react";
import { Grid } from "@material-ui/core";
import "./Opening.css";
const Wheader = () => {
  return (
    <div>
      <div className="wheader">
        <img className="web-mainellipse" src="web/webEllipse.svg" />
        <img className="sort-icon" src="web/sort.svg" />
        <img className="blue-yellow-pink" src="web/Group 35.svg" />

        <div className="web-header">
          <div className="web-header-title">UI/UX DESIGNER</div>
          <div className="web-header-sub-title">4 Job Opportunities</div>
        </div>
      </div>
      <div className="web-card-container">
        <Grid container>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply1").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply1").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/insta.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Lead UI designer</div>
                <div className="web-job-pay">$16k-$10k</div>
              </div>
              <div className="apply-button" id="apply1">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply2").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply2").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/skype.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Senior Web Designer</div>
                <div className="web-job-pay">$8k-$10k</div>
              </div>
              <div className="apply-button" id="apply2">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply3").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply3").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/google.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">UI/UX Designer</div>
                <div className="web-job-pay">$8k-$10k</div>
              </div>
              <div className="apply-button" id="apply3">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply4").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply4").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/dribble.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Graphic Designer</div>
                <div className="web-job-pay">$12k-$16k</div>
              </div>
              <div className="apply-button" id="apply4">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply5").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply5").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/insta.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Lead UI designer</div>
                <div className="web-job-pay">$16k-$10k</div>
              </div>
              <div className="apply-button" id="apply5">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply6").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply6").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/insta.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Lead UI designer</div>
                <div className="web-job-pay">$16k-$10k</div>
              </div>
              <div className="apply-button" id="apply6">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply7").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply7").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/insta.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Lead UI designer</div>
                <div className="web-job-pay">$16k-$10k</div>
              </div>
              <div className="apply-button" id="apply7">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply8").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply8").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/insta.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Lead UI designer</div>
                <div className="web-job-pay">$16k-$10k</div>
              </div>
              <div className="apply-button" id="apply8">
                Apply
              </div>
            </div>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <div
              className="web-card"
              onMouseOver={() => {
                document.getElementById("apply9").style.visibility = "visible";
              }}
              onMouseOut={() => {
                document.getElementById("apply9").style.visibility = "hidden";
              }}
            >
              <div className="web-icon-container">
                <img className="web-icon" src="web/insta.svg" />
              </div>
              <div className="web-title-container">
                <div className="web-job-title">Lead UI designer</div>
                <div className="web-job-pay">$16k-$10k</div>
              </div>
              <div className="apply-button" id="apply9">
                Apply
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Wheader;
