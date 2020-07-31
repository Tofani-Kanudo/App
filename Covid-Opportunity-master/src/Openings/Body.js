import React, { Component } from "react";
import $ from "jquery";
import "./Opening.css";
class Body extends Component {
  render() {
    return (
      <div className="body">
        <div
          className="job-card"
          id="j_1"
          onClick={(e) => {
            $(`#j_1`).toggleClass("job-cards");
            $("#apply-button1").toggle(500);
          }}
        >
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/insta.svg" />
            </div>
          </div>
          <div className="job-content">
            <div className="job-title">Lead UI designer</div>
            <div className="job-salary">$10k-$16k</div>
          </div>
          <div className="job-apply" id="apply-button1">
            <div className="apply">Apply</div>
          </div>
        </div>
        <div
          className="job-card"
          id="j_2"
          onClick={(e) => {
            $(`#j_2`).toggleClass("job-cards");
            $("#apply-button2").toggle(500);
          }}
        >
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/skype.svg" />
            </div>
          </div>
          <div className="job-content">
            <div className="job-title">Senior Web Designer</div>
            <div className="job-salary">$8k-$10k</div>
          </div>
          <div className="job-apply" id="apply-button2">
            <div className="apply">Apply</div>
          </div>
        </div>
        <div
          className="job-card"
          id="j_3"
          onClick={(e) => {
            $(`#j_3`).toggleClass("job-cards");
            $("#apply-button3").toggle(500);
          }}
        >
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/google.svg" />
            </div>
          </div>
          <div className="job-content">
            <div className="job-title">UI/UX Designer</div>
            <div className="job-salary">$6k-$10k</div>
          </div>
          <div className="job-apply" id="apply-button3">
            <div className="apply">Apply</div>
          </div>
        </div>
        <div
          className="job-card"
          id="j_4"
          onClick={(e) => {
            $(`#j_4`).toggleClass("job-cards");
            $("#apply-button4").toggle(500);
          }}
        >
          <div className="icon">
            <div className="icon-container">
              <img src="mobile/UI/dribble.svg" />
            </div>
          </div>
          <div className="job-content">
            <div className="job-title">Graphic Designer</div>
            <div className="job-salary">$4k-$6k</div>
          </div>
          <div className="job-apply" id="apply-button4">
            <div className="apply">Apply</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
