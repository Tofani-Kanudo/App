import React, { Component } from "react";
import $ from "jquery";
import data from "../countryStats.json";

import { connect } from "react-redux";
import { CustomLocationValue } from "../actions";

class Accordion extends Component {
  state = {
    city: [],
  };
  renderCity = (country) => {
    let z = [];

    let array = data.cityData[country];
    let f_array = this.state.city;
    z = array.map((value, index) => {
      var x = value;

      for (let i = 0; i < x.length; i++) {
        x = x.replace(" ", "_");
      }
      return (
        <div
          id={`${x}`}
          onClick={(e) => {
            const { id } = e.target;

            $(`#${id}`).toggleClass("city_chip_change");

            if (e.target.className == "city_chip city_chip_change") {
              f_array = this.props.customlocationReducer;
              f_array.push(`${value}-${country}`);

              this.setState({ city: f_array });
            } else {
              var index = f_array.findIndex((element) => {
                return element == `${value}-${country}`;
              });
              if (index != -1) {
                f_array.splice(index, 1);
                this.setState({ city: f_array });
              }
            }

            this.props.CustomLocationValue(f_array);
          }}
          className="city_chip"
        >
          {value}
        </div>
      );
    });
    z.push(
      <div
        id={`c_${country}`}
        className="city_chip"
        onClick={(e) => {
          const { id } = e.target;

          $(`#${id}`).toggleClass("city_chip_change");
          $(`#${id}`)
            .toggleClass("btn-outline-primary")
            .toggleClass("btn-primary");
        }}
      >
        Remote
      </div>
    );
    return z;
  };
  renderCountry = (id) => {
    let z = [];
    let array = data.countryData[id];
    z = array.map((value) => {
      return (
        <div className="city">
          <div style={{ flex: 1, fontSize: 12, paddingLeft: 10 }}> {value}</div>
          <div className="city_wrapper">{this.renderCity(value)}</div>
        </div>
      );
    });

    return z;
  };

  render() {
    const x = `elements_${this.props.id}`;

    return (
      <div className="accordion_container" id={this.props.id}>
        <div className="continent_header">
          {this.props.id}
          <span
            className="expand"
            id={`b${x}`}
            onClick={(e) => {
              $(`#${x}`).toggle(400);
              var c = document.getElementById(`${e.target.id}`);
              if (c.innerHTML === "+") {
                c.innerHTML = "-";
              } else {
                c.innerHTML = "+";
              }
            }}
          >
            +
          </span>
        </div>
        <div className="accordion_elements" id={x}>
          <div className="registration_country">
            {this.renderCountry(this.props.id)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ customlocationReducer }) => {
  return { customlocationReducer };
};

export default connect(mapStateToProps, { CustomLocationValue })(Accordion);
