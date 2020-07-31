import React, { Component } from "react";
import $ from "jquery";
class Title extends Component {
  state = {
    username: "Username",
  };
  render() {
    return (
      <div>
        <div className="profile-title" id="profile_username">
          {this.state.username}
        </div>
        <div className="profile-title">
          <input
            id="profile_username_input"
            value={this.state.username}
            className="profile-input-field"
            onChange={(e) => {
              this.setState({
                username: e.target.value,
              });
            }}
          />
        </div>
        <div
          onClick={(e) => {
            $("#profile_username_input, #profile_username").toggle();
            console.log(e.target.id);
            const element = document.getElementById(`${e.target.id}`);
            if (element.innerHTML == "Edit") {
              element.innerHTML = "Save";
            } else {
              element.innerHTML = "Edit";
            }
          }}
          className="profile-edit"
          id="username_edit"
        >
          Edit
        </div>
      </div>
    );
  }
}

export default Title;
