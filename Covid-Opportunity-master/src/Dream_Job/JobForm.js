import React, { Component } from "react";
import $ from "jquery";
import "./Dream.css";
import "./style.css";
class JobForm extends Component {
  state = {
    role: [],
    skills: [],
  };

  componentDidMount() {
    var inputRole = document.getElementById("input_role");
    inputRole.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && event.target.value != "") {
        event.preventDefault();
        console.log(event.value);
        let x = document.getElementById("role_input").childNodes.length;
        let flag = 0;
        let array = this.state.role;
        for (let i = 0; i < x; i++) {
          if (
            document.getElementById("role_input").childNodes[i].id ==
            `role_${event.target.value}`
          ) {
            flag = 1;
          }
        }

        if (flag == 0) {
          array.push(event.target.value);
          this.setState({ role: array });
          event.target.value = "";
        }
      } else if (event.keyCode === 8 && event.target.value == "") {
        if (document.getElementById(`role_input`).childNodes.length != 0) {
          const { id } = document.getElementById("role_input").lastElementChild;
          if (id != event.target.id) {
            $(`#${id}`).remove();
          }
        }
      }
    });
    var inputSkills = document.getElementById("input_skill");
    inputSkills.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && event.target.value) {
        let x = document.getElementById("skill_input").childNodes.length;
        let flag = 0;
        let array = this.state.skills;
        for (let i = 0; i < x; i++) {
          if (
            document.getElementById("skill_input").childNodes[i].id ==
            `skill_${event.target.value}`
          ) {
            flag = 1;
          }
        }

        if (flag == 0) {
          array.push(event.target.value);
          this.setState({ skills: array });
          event.target.value = "";
        }
      } else if (event.keyCode === 8 && event.target.value == "") {
        if (document.getElementById(`skill_input`).childNodes.length != 0) {
          const { id } = document.getElementById(
            "skill_input"
          ).lastElementChild;
          if (id != event.target.id) {
            $(`#${id}`).remove();
          }
        }
      }
    });
  }
  renderRole = (array, key) => {
    let z = [];
    z = array.map((value, index) => {
      return (
        <span className="tag" id={`${key}_${value}`}>
          <span className="tag-text" id={`span_${value}`}>
            {value}
          </span>
          <span
            id={`b_${value}`}
            className="tag-remove"
            onClick={(e) => {
              let element = document.getElementById(e.target.id);
              $(`#${element.parentElement.id}`).remove();
              let array = this.state[key];

              let index = array.findIndex((ind) => {
                return ind == value;
              });

              if (index == -1) {
                console.log("not find");
              } else {
                array.splice(index, 1);
                console.log(this.state.role);
              }
            }}
          ></span>
        </span>
      );
    });
    z.push(<span id={`${key}_dummy`}></span>);
    return z;
  };
  render() {
    return (
      <div class="option col-md-7">
        <div class="job-section">
          <h2>What's your dream job?</h2>
          <p>
            Your next job should be on your terms. Set your perferences and get
            in front of the best opportunities for you!
          </p>
          <div class="tags">
            <ul class="tag-list">
              <li>
                <input
                  type="checkbox"
                  name="tag"
                  id="checkboxOne"
                  value="Accounting"
                />
                <label for="checkboxOne">Accounting</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="tag"
                  id="checkboxTwo"
                  value="Consulting"
                />
                <label for="checkboxTwo">Consulting</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxThree"
                  name="tag"
                  value="Creative/Design"
                />
                <label for="checkboxThree">Creative/Design</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxFour"
                  name="tag"
                  value="Engineering"
                />
                <label for="checkboxFour">Engineering</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxFive"
                  name="tag"
                  value="Finance"
                />
                <label for="checkboxFive">Finance</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="tag"
                  id="checkboxSix"
                  value="Legal"
                />
                <label for="checkboxSix">Legal</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSeven"
                  name="tag"
                  value="Marketing"
                />
                <label for="checkboxSeven">Marketing</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxEight"
                  name="tag"
                  value="Nursing"
                />
                <label for="checkboxEight">Nursing</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="tag"
                  id="checkboxNine"
                  value="Operations"
                />
                <label for="checkboxNine">Operations</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTen"
                  name="tag"
                  value="Research"
                />
                <label for="checkboxTen">Research</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="tag"
                  id="checkboxEleven"
                  value="Sales/Business Development"
                />
                <label for="checkboxEleven">Sales/Business Development</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwelve"
                  name="tag"
                  value="Software Engineering"
                />
                <label for="checkboxTwelve">Software Engineering</label>
              </li>
            </ul>
          </div>
        </div>

        <div class="skill-section">
          <div class="form-part col-md-8">
            <p>Add your preferred roles:</p>
            <div class="roles">
              <div
                className="tagsinput"
                style={{
                  width: "auto",
                  minHeight: "auto",
                  height: "auto",
                  display: "flex",
                }}
              >
                <span
                  id="role_input"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {this.renderRole(this.state.role, "role")}
                </span>

                <input
                  className="input_tag"
                  id="input_role"
                  style={{ outline: "none" }}
                  placeholder="Add a role..."
                />
              </div>
            </div>
          </div>
          <div class="form-part col-md-8">
            <p>Add up to 10 skills (e.g, HTML, Java-Script).</p>
            <div class="roles">
              <div
                className="tagsinput"
                style={{ width: "auto", minHeight: "auto", height: "auto" }}
              >
                <span
                  id="skill_input"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {this.renderRole(this.state.skills, "skill")}
                </span>
                <input
                  placeholder="Add a skill..."
                  className="input_tag"
                  id="input_skill"
                  style={{ outline: "none" }}
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
              value="professional"
            />
            <label for="professional">I am a working professional </label>
            <br />
            <input type="radio" id="fresher" name="work-type" value="fresher" />
            <label for="fresher">I am a fresher</label>
            <br />
            <input type="radio" id="student" name="work-type" value="student" />
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
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newGithub">
                <input
                  type="url"
                  class="social-input form-control"
                  name="github"
                  placeholder="GitHub URL.."
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newWechat">
                <input
                  type="text"
                  class="social-input form-control"
                  name="wechat"
                  placeholder="WeChat ID.."
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newLine">
                <input
                  type="text"
                  class="social-input form-control"
                  name="line"
                  placeholder="Line ID.."
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newDribble">
                <input
                  type="url"
                  class="social-input form-control"
                  name="dribbble"
                  placeholder="Dribbble URL.."
                />
              </div>
              <div class="col-lg-6 social-input-div" id="newOther">
                <input
                  type="text"
                  class="social-input form-control"
                  name="portfolio"
                  placeholder="Portfolio URL.."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="approve-section">
          <div class="form-part col-md-12">
            <input type="checkbox" name="ShareCom" />
            <span>Share my profile with companies.</span>
            <br />
            <input type="checkbox" name="opportunities" />
            <span>Let companies reach out to me for new opportunities.</span>
          </div>
        </div>
        <div class="button-section">
          <div class="form-part col-md-8">
            <button class="button" type="submit">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default JobForm;
