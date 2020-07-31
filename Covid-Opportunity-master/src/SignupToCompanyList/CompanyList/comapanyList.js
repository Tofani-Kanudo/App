import React, { Component } from "react";
import axios from "axios";
import { details, desLocation } from "../../Company_Registration/actions";
import "./companyList.css";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";

class CompanyList extends Component {
  state = {
    companies: [],
    countries: [
      "India",
      "Pakistan",
      "Indonesia",
      "China",
      "Bangladesh",
      "Vietnam",
      "Myanmar",
      "Japan",
      "Thailand",
      "Cambodia",
      "Philippines",
      "Taiwan",
      "South Korea",
      "Malaysia",
      "Iran",
      "Israel",
      "Nepal",
      "Saudi Arabia",
      "Sri Lanka",
      "Afghanistan",
      "Uzbekistan",
      "Iraq",
      "Lebanon",
      "Mongolia",
      "Armenia",
      "UAE",
      "Qatar",
      "Jordan",
      "Kuwait",
      "Kyrgyztan",
      "Oman",
      "Bahrain",
      "Tajikistan",
      "Laos",
      "Germany",
      "Italy",
      "Spain",
      "United Kingdom",
      "France",
      "Switzerland",
      "Sweden",
      "Denmark",
      "Netherlands",
      "Greece",
      "Poland",
      "Belgium",
      "Austria",
      "Australia",
      "Croatia",
      "Ukraine",
      "Norway",
      "Romania",
      "Czech Republic",
      "Finland",
      "Iceland",
      "Ireland",
      "Hungary",
      "Bulgaria",
      "Slovenia",
      "Albania",
      "Belarus",
      "Cyprus",
      "Slovakia",
      "Estonia",
      "Serbia",
      "Lithuania",
      "South Africa",
      "Kenya",
      "Ghana",
      "Ethiopia",
      "DR Congo",
      "Tanzania",
      "Morocco",
      "Uganda",
      "Senegal",
      "Algeria",
      "Madagascar",
      "Mali",
      "Angola",
      "Zambia",
      "Rwanda",
      "Somalia",
      "Sudan",
      "Cameroon",
      "Zimbabwe",
      "Liberia",
      "Libya",
      "Tunisia",
      "Mozambique",
      "Egypt",
      "Singapore",
      "Canada",
      "Nigeria",
      "Hong Kong",
      "Turkey",
      "United States",
      "Azerbaijan",
      "Brazil",
      "Argentina",
      "Colombia",
      "Peru",
      "Bolivia",
      "Venezuela",
      "Paraguay",
      "Portugal",
    ],
    "United States": [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    Canada: ["British Columbia", "Alberta", "Ontario", "Quebec", "Nova Scotia"],
    no_of_cards: 8,
    countryFilter: "",
    availableTags: [
      "Artificial Intelligence",
      "Machine Learning",
      "Fintech",
      "Edtech",
      "Software as a Service",
      "Healthcare",
      "E-Commerce",
      "Blockchain",
      "Financial Services",
      "Data Science",
      "Developer Tools",
    ],
    selectedTags: [],
  };
  showMoreCompanies = () => {
    this.setState({ ...this.state, no_of_cards: this.state.no_of_cards + 8 });
  };
  tagsToBeRemoved = () => {
    return [
      "Ride hailing",
      "Custom tag1",
      "Custom tag2",
      "undefined",
      "Curated Experiences",
      "Experience Sharing",
      "Local Entertainment",
      "Mapping services",
      "Transportation",
      "Hyperlocal Solutions",
    ];
  };
  componentDidMount = () => {
    // React.initializeTouchEvents(true);
    // get company list from backend
    // var token= JSON.parse(localStorage.getItem('token'))
    var token = localStorage.getItem("token");
    // console.log(token)
    axios
      .get("http://scholarly-science.herokuapp.com/company-list", {
        headers: { Authorization: `JWT ${token}` },
      })
      .then((res) => {
        this.setState({ companies: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    window.scrollTo(0, 0);
  };

  handleChange = (e) => {
    // console.log(e.target.value)
    if (e.target.value !== "Select your country")
      this.setState({
        ...this.state,
        countryFilter: e.target.value,
        no_of_cards: 8,
      });
    else {
      this.setState({ ...this.state, countryFilter: "" });
    }
    // console.log("filter: ", this.state.countryFilter);
    window.scrollTo(0, 0);
  };
  handleTagToggle = (e) => {
    // console.log("toggle")
    // console.log(e.target.id)
    var tag = e.target.id;
    // console.log(tag)
    var idx = this.state.selectedTags.indexOf(tag);
    // console.log(idx)
    if (idx === -1) this.state.selectedTags.push(tag);
    else this.state.selectedTags.splice(idx, 1);
    // console.log(this.state.selectedTags)
    this.setState({
      ...this.state,
      selectedTags: this.state.selectedTags,
      no_of_cards: 8,
    });
    if (
      document.getElementById(tag).style.backgroundColor === "rgb(49, 75, 127)"
    ) {
      document.getElementById(tag).style.backgroundColor = "#c8d3e9";
      document.getElementById(tag).style.color = "#314b7f";
    } else {
      document.getElementById(tag).style.backgroundColor = "#314b7f";
      document.getElementById(tag).style.color = "#ffffff";
    }
  };

  render() {
    const { companies } = this.state;
    console.log(this.state);
    const { countryFilter } = this.state;

    function shuffle(o, no_of_cards) {
      if (no_of_cards > 8) return o;
      for (
        var j, x, i = o.length;
        i;
        j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
      );
      return o;
    }

    var random = shuffle(this.state.companies, this.state.no_of_cards);
    // console.log(random);
    var count = 0;
    var displayedCards = 0;
    return (
      <div className="company-wrapper">
        <svg
          className="circle-svg"
          width="527"
          height="545"
          viewBox="0 0 527 545"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <ellipse
              cx="255.243"
              cy="320.064"
              rx="163.176"
              ry="162.373"
              transform="rotate(121.519 255.243 320.064)"
              fill="#FFDD83"
            />
            <ellipse
              cx="255.663"
              cy="319.379"
              rx="115.751"
              ry="114.143"
              transform="rotate(121.519 255.663 319.379)"
              fill="white"
            />
            <ellipse
              cx="295.175"
              cy="125.791"
              rx="66.7174"
              ry="65.9136"
              transform="rotate(121.519 295.175 125.791)"
              fill="#4F51C0"
            />
            <ellipse
              cx="95.7499"
              cy="261.858"
              rx="34.5645"
              ry="32.9568"
              transform="rotate(121.519 95.7499 261.858)"
              fill="#FF91A5"
            />
          </g>
        </svg>

        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          <p className="company-page-title">
            Engineering teams that fit your preferences
          </p>
          <p className="company-page-subtitle">
            Search by culture, tech stack, values or perks. Sort by
            science-based match score
          </p>
        </div>
        <div className="row">
          <div className="tags_filters col-md-3 col-sm-12">
            <div className="filters">
              <div className="country-filters">
                <FormControl
                  className="search-form"
                  style={{ width: "200px", backgroundColor: "#c8d3e9" }}
                  variant="outlined"
                >
                  <InputLabel
                    style={{ color: "#314b7f", zIndex:'0' }}
                    id="demo-simple-select-outlined-label"
                  >
                    Select your country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined country-filter"
                    value={this.state.countryFilter}
                    className="country-filter"
                    onChange={this.handleChange}
                    label="Select your country"
                    style={{ border: "none", color: "#314b7f" }}
                  >
                    {this.state.countries.sort()}
                    {this.state.countries.map((country, i) => (
                      <MenuItem
                        key={i}
                        className="country-option"
                        value={country}
                      >
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* <form>
                  <select
                    onChange={this.handleChange}
                    className="country-filter"
                    id="country-filter"
                  >
                    {this.state.countries.map((country, i) => (
                      <option
                        key={i}
                        onClick={this.handleChange}
                        onTouchStart={this.handleChange}
                        className="country-option"
                        value={country}
                      >
                        {country}
                      </option>
                    ))}
                  </select>
                </form> */}
              </div>
              <div className="fa fa-search search"></div>
            </div>
            <div className="tags_wrapper">
              <p className="tags_title">Tags</p>
              <div className="each_tag_container">
                {this.state.availableTags.map((tag, i) => (
                  <span
                    key={i}
                    onClick={this.handleTagToggle}
                    id={tag}
                    className="each-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="companies col-md-9 col-sm-12" style={{ zIndex: 0 }}>
            <div className="flex-container">
              {random.map((company, i) => {
                const locations = company.location;
                var countiesArray = locations.map((location, i) => {
                  // if (location.includes("-"))
                  //   return location.replace(/'/g, "").split("-")[1];
                  // return location.replace(/'/g, "").split(", ")[1];
                  if (location.includes("-"))
                    var countryExtracted = location
                      .replace(/'/g, "")
                      .split("-")[2]
                      ? location.replace(/'/g, "").split("-")[2]
                      : location.replace(/'/g, "").split("-")[1];
                  else
                    var countryExtracted = location
                      .replace(/'/g, "")
                      .split(", ")[1];
                  if (this.state["United States"].includes(countryExtracted))
                    return "United States";
                  else if (this.state["Canada"].includes(countryExtracted))
                    return "Canada";
                  else return countryExtracted;
                });
                var citiesArray = locations.map((location, i) => {
                  // if (location.includes("-"))
                  //   return location.replace(/'/g, "").split("-")[0];
                  // return location.replace(/'/g, "").split(", ")[0];
                  if (location.includes("-"))
                    var cityExtracted = location
                      .replace(/'/g, "")
                      .split("-")[0];
                  else
                    var cityExtracted = location
                      .replace(/'/g, "")
                      .split(", ")[0];
                  if (this.state["United States"].includes(cityExtracted))
                    return "United States";
                  else if (this.state["Canada"].includes(cityExtracted))
                    return "Canada";
                  else return cityExtracted;
                });
                // console.log(company.tags)
                var tagsArray = this.state.selectedTags.map((eachTag) =>
                  company.tags.includes(eachTag)
                );
                // console.log(tagsArray)
                // console.log(countiesArray);
                if (
                  (countiesArray.includes(countryFilter) ||
                    citiesArray.includes(countryFilter) ||
                    this.state.countryFilter === "") &&
                  (tagsArray.includes(true) ||
                    this.state.selectedTags.length == 0)
                ) {
                  count += 1;
                  if (count > this.state.no_of_cards) return;
                  var flag = 0;
                  var flags = 0;
                  var f_location = "";
                  displayedCards += 1;
                  company.location.map((location, i) => {
                    if (location.includes(countryFilter) && flags == 0) {
                      flags = 1;
                      f_location = location;
                    }
                  });
                  return (
                    <span key={i}>
                      <Link
                        style={{ textDecoration: "none" }}
                        className="descriptionLink"
                        to={{
                          pathname: "./description",
                          state: {
                            company,
                            f_location,
                          },
                        }}
                      >
                        {" "}
                        <div className="col-md-6" style={{ zIndex: "1" }}>
                          <div className="card-container">
                            <div
                              className="card"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                height: "60%",
                                backgroundColor: "#FFFFFF",
                                border: "none",
                              }}
                            >
                              <div className="company-logo">
                                <div>
                                  <img
                                    className=" company-image"
                                    src={company.company_logo}
                                    alt="comapny logo"
                                  />
                                </div>
                              </div>
                              <div
                                className="company-details"
                                style={{ justifyContent: "right" }}
                              >
                                <p className="card-title">
                                  {company.company_name}
                                </p>
                                {company.location.map((location, i) => {
                                  if (this.state[countryFilter])
                                    if (
                                      (location.includes(countryFilter) ||
                                        this.state[countryFilter].includes(
                                          location.split("-")[2]
                                            ? location.split("-")[2]
                                            : location.split("-")[1]
                                        ) ||
                                        this.state[countryFilter].includes(
                                          location.split("-")[0]
                                        ) ||
                                        this.state[countryFilter].includes(
                                          location.split(", ")[1]
                                        ) ||
                                        this.state[countryFilter].includes(
                                          location.split(", ")[0]
                                        ) ||
                                        this.state[countryFilter].includes(
                                          location.split(", ")[1]
                                        )) &&
                                      flag == 0
                                    ) {
                                      flag = 1;
                                      return (
                                        <p className="comapny-location" key={i}>
                                          {location
                                            .replace(/'/g, "")
                                            .replace(", ", "-")
                                            .replace("-", ", ")}
                                        </p>
                                      );
                                    }
                                })}
                                <p className="no_of_assignments">
                                  {company.No_of_Assignments === 1
                                    ? `${company.No_of_Assignments} Assignment`
                                    : `${company.No_of_Assignments} Assignments`}
                                </p>
                                <div
                                  className="card-body"
                                  style={{ margin: "-20px" }}
                                >
                                  {company.location.map((location, i) => {
                                    if (
                                      location.includes(countryFilter) &&
                                      flag == 0
                                    ) {
                                      flag = 1;
                                      return (
                                        <p className="comapny-location" key={i}>
                                          {location
                                            .replace(/'/g, "")
                                            .replace(", ", ",")
                                            .replace(",", "-")
                                            .replace("-", ", ")}
                                        </p>
                                      );
                                    }
                                  })}

                                  <p
                                    className="jobs-number"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    {company.No_of_Openings === 0
                                      ? "Openings yet to be updated"
                                      : company.No_of_Openings > 1
                                      ? `${company.No_of_Openings} Openings`
                                      : `${company.No_of_Openings} Opening`}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="tech-stacks flex-conatiner">
                              {company.tags.map((stack, i) => (
                                <div className="stack" key={i}>
                                  <span className="stack-text">{stack}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </span>
                  );
                }
              })}
            </div>
            {this.state.no_of_cards < this.state.companies.length &&
            displayedCards % 8 == 0 &&
            displayedCards !== 0 ? (
              <button
                className="show-more"
                onClick={this.showMoreCompanies}
                type="submit"
              >
                SHOW MORE COMPANIES
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { details, desLocation })(CompanyList);
