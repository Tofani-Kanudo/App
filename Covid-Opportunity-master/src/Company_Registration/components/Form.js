import React, { Component } from "react";
import LocationSelect from "./LocationEmployer";
import data from "../countryStats.json";
import $ from "jquery";
import {
  LogoValue,
  CompanyValue,
  AssignmentValue,
  OpeningnoValue,
  DescriptionValue,
  TagsValue,
  TechstackValue,
  OpeningValue,
  LocationValue,
  YetUpdateValue,
} from "../actions";
import { connect } from "react-redux";
import Submit from "./Submit";

class Form extends Component {
  state = {
    company: "",
    logo: "",
    assignment: 0,
    opening: 0,
    description: "",
    add_tag: [],
    add_techStack: [],
    add_openings: [],
    final_add_tag: [],
  };

  componentDidMount() {
    console.log(this.props);

    // var inputOpening = document.getElementById("add_opening");
    // inputOpening.addEventListener("keyup", (event) => {
    //   if (event.keyCode === 13) {
    //     event.preventDefault();
    //     let array = this.state.add_openings;
    //     array.push(event.target.value);
    //     this.setState({ add_openings: array });
    //     let f_array = this.state.final_add_opening;
    //     f_array.push(event.target.value);
    //     this.setState({ final_add_opening: f_array });
    //     event.target.value = "";
    //     $("#add_opening,#opening_chip_wrapper").toggle();
    //   }
    // });
    var inputTag = document.getElementById("add_tag");
    inputTag.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        let array = this.state.add_tag;
        let f_array = this.props.tagReducer;
        let check = event.target.value.split(",");
        check.map((value) => {
          array.push(value);
          f_array.push(value);
        });
        this.setState({ add_tag: array });
        this.props.TagsValue(f_array);
        event.target.value = "";
        $("#add_tag,#tag_chip_wrapper").toggle();
      }
    });

    var locationTag = document.getElementById("add_location");
    locationTag.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        let city = this.props.locationReducer;
        city.push(event.target.value);
        this.props.LocationValue(city);
        alert(`location added as ${locationTag.value}`);
        event.target.value = "";

        $("#add_location,#location_chip_wrapper").toggle();
      }
    });
    // TO Toggle all Add buttons and input Field
    $("#add-tag-button").click(() => {
      $("#add-tag-button").hide();
      $("#add_tag").show();
    });

    // $("#add-openings-button").click(() => {
    //   $("#add-openings-button").hide();
    //   $("#add_openings").show();
    // });
  }

  addTagChip(chip) {
    let array = this.state[chip];
    let f_array = this.state[`final_${chip}`];
    let z = [];
    z = array.map((value) => {
      return (
        <div
          class="new_chip_change"
          style={{ marginRight: 5, marginBottom: 10 }}
        >
          {value}
          <span
            class="closebtn"
            id={`btn_${value}`}
            onClick={(e) => {
              let element = document.getElementById(e.target.id);
              var index = f_array.findIndex((element) => {
                return element == value;
              });
              if (index != -1) {
                f_array.splice(index, 1);
                this.setState({ [`final_${chip}`]: f_array });
                this.props.TagsValue(f_array);
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
  }

  // addOpeningChip(chip) {
  //   let array = this.state[chip];
  //   let f_array = this.state[`final_${chip}`];
  //   let z = [];
  //   z = array.map((value) => {
  //     return (
  //       <div class="new_chip_change">
  //         {value}
  //         <span
  //           class="closebtn"
  //           id={`btn_${value}`}
  //           onClick={(e) => {
  //             let element = document.getElementById(e.target.id);

  //             var index = f_array.findIndex((element) => {
  //               return element == value;
  //             });
  //             if (index != -1) {
  //               f_array.splice(index, 1);
  //               this.setState({ [`final_${chip}`]: f_array });
  //               this.props.OpeningValue(f_array);
  //             }

  //             element.parentElement.style.display = "none";
  //           }}
  //         >
  //           &times;
  //         </span>
  //       </div>
  //     );
  //   });
  //   return z;
  // }

  RenderTagchip = (array, key) => {
    let z = [];
    let f_array = this.props.tagReducer;
    console.log(f_array, "array");
    z = array.map((value) => {
      let x = value.replace(/ /g, "");
      return (
        <div className="chip_wrapper">
          <div
            onClick={(e) => {
              const { id } = e.target;

              $(`#${id}`).toggleClass("new_chip_change");
              const { style } = document.getElementById(`${id}`);
              if (e.target.className == "chips new_chip_change") {
                f_array.push(value);

                style.backgroundColor = "#314b7f";
                this.setState({ [key]: f_array });
                this.props.TagsValue(f_array);
                console.log(f_array);
              } else {
                style.backgroundColor = "#c8d3e9";
                console.log("else block running");
                var index = f_array.findIndex((element) => {
                  return element == value;
                });
                if (index != -1) {
                  console.log(index);
                  f_array.splice(index, 1);
                  this.setState({ [key]: f_array });
                  this.props.TagsValue(f_array);
                }
              }
            }}
            className="chips"
            id={`${x}`}
          >
            {value}
            <span
              class="closebtn"
              id={`btn_${value}`}
              onClick={(e) => {
                let element = document.getElementById(e.target.id);
                var index = f_array.findIndex((element) => {
                  return element == value;
                });
                if (index != -1) {
                  f_array.splice(index, 1);
                  this.setState({ [key]: f_array });
                  this.props.TagsValue(f_array);
                }
                element.parentElement.style.display = "none";
              }}
            >
              &times;
            </span>
          </div>
        </div>
      );
    });
    return z;
  };

  // RenderOpeningchip = (array, key) => {
  //   let z = [];
  //   let f_array = this.state[key];
  //   z = array.map((value) => {
  //     let x = value.replace(/ /g, "");
  //     return (
  //       <div className="chip_wrapper">
  //         <div
  //           onClick={(e) => {
  //             const { id } = e.target;
  //             $(`#${id}`).toggleClass("new_chip_change");

  //             if (e.target.className == "chip new_chip_change") {
  //               f_array.push(value);
  //               this.setState({ [key]: f_array });
  //               this.props.OpeningValue(f_array);
  //             } else {
  //               var index = array.findIndex((element) => {
  //                 return element == value;
  //               });
  //               if (index != -1) {
  //                 f_array.splice(index, 1);
  //                 this.setState({ [key]: f_array });
  //                 this.props.OpeningValue(f_array);
  //               }
  //             }
  //           }}
  //           className="chip"
  //           id={`${x}`}
  //         >
  //           {value}
  //           <span
  //             class="closebtn"
  //             id={`btn_${value}`}
  //             onClick={(e) => {
  //               let element = document.getElementById(e.target.id);
  //               var index = f_array.findIndex((element) => {
  //                 return element == value;
  //               });
  //               if (index != -1) {
  //                 f_array.splice(index, 1);
  //                 this.setState({ [key]: f_array });
  //                 this.props.OpeningValue(f_array);
  //               }
  //               element.parentElement.style.display = "none";
  //             }}
  //           >
  //             &times;
  //           </span>
  //         </div>
  //       </div>
  //     );
  //   });
  //   return z;
  // };

  render() {
    const { tag, techStack, openings } = data.tagData;
    const {
      company,
      logo,
      assignment,
      opening,
      final_add_tag,
      description,
      final_add_techStack,
      final_add_opening,
    } = this.state;

    return (
      <div className={this.props.class} id="form">
        <div class="form_input">
          <div className="input_label">Company </div>
          <input
            className="input_field_container"
            placeholder="Name Of The Company"
            value={this.state.company}
            onChange={(e) => {
              this.setState({ company: e.target.value });
              this.props.CompanyValue(e.target.value);
            }}
          />
        </div>
        <div className="form_input">
          <div className="input_label">Logo </div>
          <input
            className="input_field_container"
            placeholder="Logo URL"
            value={this.state.logo}
            onChange={(e) => {
              this.setState({ logo: e.target.value });
              this.props.LogoValue(e.target.value);
            }}
          />
        </div>

        <div className="form_input">
          <div className="input_label">No. Of Assignments </div>
          <input
            type="Number"
            className="input_field_container"
            placeholder="No. Of assignments"
            value={this.state.assignment}
            onChange={(e) => {
              this.setState({ assignment: e.target.value });
              this.props.AssignmentValue(e.target.value);
            }}
          />
        </div>
        <div className="form_input">
          <div className="input_label">No. of opening </div>

          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <input
                type="Number"
                className="input_field_container"
                id="i_4"
                placeholder="Number of openings"
                value={this.state.opening}
                onChange={(e) => {
                  this.setState({ opening: e.target.value });
                  this.props.OpeningnoValue(e.target.value);
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div className="chip_wrapper">
                <div
                  onClick={(e) => {
                    const { id } = e.target;
                    // $(`#${id}`).toggleClass("");
                    $(`#${id}`)
                      .toggleClass("btn-outline-primary")
                      .toggleClass("btn-primary");

                    // Toogle Disable
                    if ($("#i_4").attr("disabled")) {
                      this.props.YetUpdateValue(true);
                      this.props.OpeningnoValue(0);
                      $("#i_4").removeAttr("disabled");
                    } else {
                      this.props.YetUpdateValue(false);
                      $("#i_4").attr("disabled", true);
                    }
                  }}
                  id="c_2"
                  className="btn btn-outline-primary"
                >
                  Yet to be Updated
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form_input">
          <div className="input_label">Tags</div>
          <div className="chip_block">
            {this.RenderTagchip(tag, "final_add_tag")}
            {this.addTagChip("add_tag")}
            <input
              id="add_tag"
              placeholder="Add "
              style={{ display: "none" }}
              className="input_field_container"
            />
            <div className="chip_wrapper" id="tag_chip_wrapper">
              <div
                className="btn btn-outline-primary newAddBtn"
                onClick={(e) => {
                  $("#add_tag,#tag_chip_wrapper").toggle();
                }}
              >
                + Add Tags
              </div>
            </div>
          </div>
        </div>
        <div className="form_input">
          <div className="input_label">Company Description</div>
          <div className="chip_block">
            <textarea
              className="input_field_container"
              style={{ height: 150 }}
              onChange={(e) => {
                this.setState({ description: e.target.value });
                this.props.DescriptionValue(e.target.value);
              }}
            />
          </div>
        </div>

        {/* <div className="form_input">
          <div className="input_label">Openings</div>
          <div className="chip_block">
            {this.RenderOpeningchip(openings, "final_add_opening")}
            {this.addOpeningChip("add_openings")}
            <input
              id="add_opening"
              placeholder="Add "
              style={{ display: "none" }}
              className="input_field_container"
            />
            <div className="chip_wrapper" id="opening_chip_wrapper">
              <div
                className=" newAddBtn btn btn-outline-primary"
                onClick={(e) => {
                  $("#add_opening,#opening_chip_wrapper").toggle();
                }}
              >
                + Add Openings
              </div>
            </div>
          </div>
        </div> */}

        <div className="form_input">
          <div className="input_label"> Locations</div>
          <div className="chip_wrapper" id="location_chip_wrapper">
            <div
              className="newAddBtn btn btn-outline-primary"
              onClick={(e) => {
                $("#add_location,#location_chip_wrapper").toggle();
              }}
            >
              + Add Custom Locations
            </div>
          </div>
          <input
            id="add_location"
            placeholder="Add "
            style={{ display: "none" }}
            className="input_field_container"
          />
          <LocationSelect />
        </div>
        <Submit />
      </div>
    );
  }
}
const mapStateToProps = ({ locationReducer, tagReducer, yetUpdateReducer }) => {
  return { locationReducer, tagReducer };
};
export default connect(mapStateToProps, {
  LogoValue,
  CompanyValue,
  AssignmentValue,
  OpeningnoValue,
  DescriptionValue,
  TagsValue,
  TechstackValue,
  OpeningValue,
  LocationValue,
  YetUpdateValue,
})(Form);
