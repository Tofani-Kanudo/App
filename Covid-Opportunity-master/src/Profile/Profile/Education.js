import React, { Component } from "react";
import $ from "jquery";

class Education extends Component {
  componentDidMount() {
    let skill = document.getElementById("skill_input");
    skill.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();

        let array = this.state.skills;
        array.push(event.target.value);
        this.setState({ skills: array });

        event.target.value = "";
        $("#skill_input, #profile_skill").toggle();
      }
    });
  }
  state = {
    college: "Amity University",
    skills: ["UI Design", "UX Design", "Adobe Xd", "App"],
  };

  renderTags = () => {
    let z = [];
    const { skills } = this.state;
    z = skills.map((value) => {
      return (
        <div className="profile-tags">
          {value}
          <span
            class="closebtn"
            id={`btn_${value}`}
            onClick={(e) => {
              let element = document.getElementById(e.target.id);
              element.parentElement.style.display = "none";
            }}
          >
            &times;
          </span>
        </div>
      );
    });
    return z;
  };
  render() {
    return (
      <div className="profile-fields">
        <div className="profile-input-container">
          <div className="profile-input">
            <div className="profile-input-title">College/University</div>
            <div id="college_name" className="profile-college-value">
              {this.state.college}
            </div>
            <input
              id="profile_college_input"
              value={this.state.college}
              className="profile-input-field"
              onChange={(e) => {
                this.setState({
                  college: e.target.value,
                });
              }}
            />
          </div>
          <div
            onClick={(e) => {
              $("#profile_college_input, #college_name").toggle();
              console.log(e.target.id);
              const element = document.getElementById(`${e.target.id}`);
              if (element.innerHTML == "Edit") {
                element.innerHTML = "Save";
              } else {
                element.innerHTML = "Edit";
              }
            }}
            className="profile-edit"
            id="college_edit"
          >
            Edit
          </div>
        </div>
        <div className="profile-input-title" style={{ marginBottom: 15 }}>
          Skills
        </div>
        <div className="profile-tag-container">
          {this.renderTags()}
          <div
            className="profile-tags"
            id="profile_skill"
            style={{ backgroundColor: "orange", color: "white" }}
            onClick={() => {
              $("#skill_input, #profile_skill").toggle();
            }}
          >
            + Add Skills
          </div>
          <input className="profile-input-field" id="skill_input" />
        </div>
      </div>
    );
  }
}

export default Education;
