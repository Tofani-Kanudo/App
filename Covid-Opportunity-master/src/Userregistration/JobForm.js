import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import axios from "axios";
class JobForm extends Component {
  state = {
    role: [],
    skills: [],
    f_tags: [],
    tags: [
      "Accounting",
      "Consulting",
      "Creative/Design",
      "Engineering",
      "Finance",
      "Legal",
      "Marketing",
      "Nursing",
      "Operations",
      "Research",
      "Sales/Business Development",
      "Software Engineering",
    ],
    linkedin: "",
    github: "",
    wechat: "",
    portfolio: "",
    dribble: "",
    line: "",
    describe: "",
    shareProfile: false,
    letCompany: false,
  };

  componentDidMount() {
    var inputSkills = document.getElementById("skill_input");
    inputSkills.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && event.target.value) {
        let f_array = this.state.skills;
        f_array.push(event.target.value);
        this.setState({
          skills: f_array,
        });
        $("#skill_value, #skill_input").toggle();
        event.target.value = "";
      }
    });
    var inputRoles = document.getElementById("role_input");
    inputRoles.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && event.target.value) {
        let f_array = this.state.role;
        f_array.push(event.target.value);
        this.setState({
          role: f_array,
        });
        $("#role_value, #role_input").toggle();
        event.target.value = "";
      }
    });
  }

  renderSkills = () => {
    let z = [];
    let f_array = this.state.skills;
    z = f_array.map((value) => {
      return (
        <div className="web-profile-tags">
          {value}
          <span
            class="closebtn"
            style={{ marginLeft: 2, fontSize: 18, cursor: "pointer" }}
            id={`btn_${value.replace(" ", "_")}`}
            onClick={(e) => {
              let element = document.getElementById(e.target.id);
              var index = f_array.findIndex((element) => {
                return element == value;
              });
              if (index != -1) {
                f_array.splice(index, 1);
                this.setState({ skills: f_array });
                console.log(this.state.skills);
              }
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

  renderRoles = () => {
    let z = [];
    let f_array = this.state.role;
    z = f_array.map((value) => {
      return (
        <div className="web-profile-tags">
          {value}
          <span
            class="closebtn"
            style={{ marginLeft: 2, fontSize: 18, cursor: "pointer" }}
            id={`btn_${value.replace(" ", "_")}`}
            onClick={(e) => {
              let element = document.getElementById(e.target.id);
              var index = f_array.findIndex((element) => {
                return element == value;
              });
              if (index != -1) {
                f_array.splice(index, 1);
                this.setState({ role: f_array });
                console.log(this.state.role);
              }
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

  renderTags = () => {
    let z = [];
    let f_array = this.state.tags;
    let array = this.state.f_tags;
    z = f_array.map((value, i) => {
      return (
        <li>
          <input
            type="checkbox"
            name="tag"
            id={`profile_tag${i}`}
            value={value}
            onChange={(e) => {
              if ($(`#${e.target.id}`).prop("checked") == true) {
                array.push(e.target.value);
              } else {
                var index = array.findIndex((element) => {
                  return element == value;
                });
                if (index != -1) {
                  array.splice(index, 1);
                  this.setState({ f_tags: array });
                  console.log(array);
                }
              }
            }}
          />
          <label for={`profile_tag${i}`}>{value}</label>
        </li>
      );
    });
    return z;
  };

  sendData = () => {
    const {
      city,
      college,
      degree,
      end,
      start,
      major,
      f_country,
    } = this.props.profileReducer;
    const {
      role,
      skills,
      f_tags,
      linkedin,
      github,
      wechat,
      portfolio,
      dribble,
      line,
      describe,
      shareProfile,
      letCompany,
    } = this.state;
    console.log(
      city,
      college,
      degree,
      end,
      start,
      major,
      f_country,

      role,
      skills,
      f_tags,
      linkedin,
      github,
      wechat,
      portfolio,
      dribble,
      line,
      describe,
      shareProfile,
      letCompany
    );
    let token = localStorage.getItem("token");

    axios
      .post(
        `https://scholarly-science.herokuapp.com/accounts/dummy/profile/`,

        {
          city,
          location: f_country,
          college,
          degree,
          trade: major,
          start_date: end,
          end_date: start,
          preferences: f_tags,
          preference_role: role,
          skills,
          profession: describe,
          share_profile: shareProfile,
          opportunities: letCompany,
          linkedin,
          github,
          wechat,
          lineid: line,
          dribble,
          portfolio,
          first_time_login: true,
        },
        {
          headers: { Authorization: `JWT ${token}` },
        }
      )
      .then((res) => {
        alert("Info Saved Successfully.");
      })
      .catch((err) => {
        console.log(err);
        alert("Some Error Occurred");
      });
  };

  render() {
    return (
      <div class="option col-md-7">
        <div class="job-section">
          <h2>What's your dream job?</h2>
          <p style={{ fontSize: "18px" }}>
            Your next job should be on your terms. Set your perferences and get
            in front of the best opportunities for you!
          </p>
          <div class="tags" style={{ width: "90%", margin: "12px 0%" }}>
            <ul class="tag-list">{this.renderTags()}</ul>
          </div>
        </div>

        <div class="skill-section">
          <div class="form-part col-md-8" style={{ maxWidth: "100%" }}>
            <p>Add your preferred roles:</p>

            <div class="roles">
              <div className="web-profile-tag-container">
                {this.renderRoles()}
                <div
                  className="web-profile-tags"
                  id="role_value"
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    $("#role_value, #role_input").toggle();
                  }}
                >
                  + Add Roles
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control web-profile-input"
                  id="role_input"
                  style={{
                    width: "40%",
                    borderRadius: 19,
                    display: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div class="form-part col-md-8" style={{ maxWidth: "100%" }}>
            <p>Add up to 10 skills (e.g, HTML, Java-Script).</p>
            <div class="roles">
              <div className="web-profile-tag-container">
                {this.renderSkills()}
                <div
                  className="web-profile-tags"
                  id="skill_value"
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    $("#skill_value, #skill_input").toggle();
                  }}
                >
                  + Add Skills
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control web-profile-input"
                  id="skill_input"
                  style={{
                    width: "40%",
                    borderRadius: 19,
                    display: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div class="form-part col-md-8">
            <p>Which describes you the best?</p>
            <input
              type="radio"
              id="professional"
              name="work-type"
              value="1"
              onChange={(e) => {
                this.setState({ describe: e.target.value });
              }}
            />
            <label for="professional">I am a working professional </label>
            <br />
            <input
              type="radio"
              id="fresher"
              name="work-type"
              value="2"
              onChange={(e) => {
                this.setState({ describe: e.target.value });
              }}
            />
            <label for="fresher">I am a fresher</label>
            <br />
            <input
              type="radio"
              id="student"
              name="work-type"
              value="3"
              onChange={(e) => {
                this.setState({ describe: e.target.value });
              }}
            />
            <label for="fresher">I am a student</label>
            <br />
          </div>
        </div>

        <div class="web-section">
          <div class="form-part col-md-12">
            <p>On the web</p>
            <div class="row social-box" id="">
              <div class="col-md-12">
                <span class="social" id="Linkedin">
                  <i class="fa fa-linkedin"></i>
                </span>
                <span class="social" id="github-id">
                  <i class="fa fa-github"></i>
                </span>

                <span class="social" id="wechat-id">
                  <i class="fa fa-weixin"></i>
                </span>

                <span class="social">
                  <img src="LINE_APP.png" />
                </span>

                <span class="social" id="dribbble-id">
                  <i class="fa fa-dribbble"></i>
                </span>

                <span class="social" id="portfolio">
                  <i class="fa fa-link"></i>
                </span>
              </div>
              <div class="col-lg-6 social-input-div" id="newLinkedin">
                <input
                  type="url"
                  class="social-input form-control"
                  name="linkedin"
                  placeholder="LinkedIn URL.."
                  value={this.state.linkedin}
                  style={{ borderRadius: 19 }}
                  onChange={(e) => {
                    this.setState({ linkedin: e.target.value });
                  }}
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newGithub">
                <input
                  type="url"
                  class="social-input form-control"
                  name="github"
                  placeholder="GitHub URL.."
                  value={this.state.github}
                  style={{ borderRadius: 19 }}
                  onChange={(e) => {
                    this.setState({ github: e.target.value });
                  }}
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newWechat">
                <input
                  type="text"
                  class="social-input form-control"
                  name="wechat"
                  placeholder="WeChat ID.."
                  value={this.state.wechat}
                  onChange={(e) => {
                    this.setState({ wechat: e.target.value });
                  }}
                  style={{ borderRadius: 19 }}
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newLine">
                <input
                  type="text"
                  class="social-input form-control"
                  name="line"
                  placeholder="Line ID.."
                  value={this.state.line}
                  onChange={(e) => {
                    this.setState({ line: e.target.value });
                  }}
                  style={{ borderRadius: 19 }}
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newDribble">
                <input
                  type="url"
                  class="social-input form-control"
                  name="dribbble"
                  placeholder="Dribbble URL.."
                  value={this.state.dribble}
                  onChange={(e) => {
                    this.setState({ dribble: e.target.value });
                  }}
                  style={{ borderRadius: 19 }}
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newOther">
                <input
                  type="text"
                  class="social-input form-control"
                  name="portfolio"
                  placeholder="Portfolio URL.."
                  value={this.state.portfolio}
                  onChange={(e) => {
                    this.setState({ portfolio: e.target.value });
                  }}
                  style={{ borderRadius: 19 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="approve-section">
          <div class="form-part col-md-12">
            <input
              type="checkbox"
              name="ShareCom"
              checked={this.state.shareProfile}
              onChange={(e) => {
                if (this.state.shareProfile) {
                  this.setState({ shareProfile: false });
                } else {
                  this.setState({ shareProfile: true });
                }
              }}
            />
            <span>Share my profile with companies.</span>
            <br />
            <input
              type="checkbox"
              name="opportunities"
              checked={this.state.letCompany}
              onChange={(e) => {
                if (this.state.letCompany) {
                  this.setState({ letCompany: false });
                } else {
                  this.setState({ letCompany: true });
                }
              }}
            />
            <span>Let companies reach out to me for new opportunities.</span>
          </div>
        </div>
        <div class="button-section">
          <div class="form-part col-md-8">
            <button class="button" type="submit" onClick={this.sendData}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profileReducer }) => {
  return { profileReducer };
};

export default connect(mapStateToProps)(JobForm);
