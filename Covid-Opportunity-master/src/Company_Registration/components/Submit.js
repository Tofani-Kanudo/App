import React from "react";
import { connect } from "react-redux";
import axios from "axios";

const Submit = (props) => {
  const {
    companyReducer,
    logoReducer,
    openingnoReducer,
    tagReducer,
    descriptionReducer,
    assignmentReducer,
    locationReducer,
    customlocationReducer,
    yetUpdateReducer,
  } = props;

  function submitForm() {
    //Request to submit form
    var locationCustom = locationReducer.concat(customlocationReducer);
    console.log(props);
    var token = localStorage.getItem("token");
    axios
      .post(
        "http://scholarly-science.herokuapp.com/company/",
        {
          company_name: companyReducer,
          company_logo: logoReducer,
          No_of_Assignments: assignmentReducer,
          No_of_Openings: openingnoReducer,
          tags: tagReducer,
          Description: descriptionReducer,
          //remote to be added
          location: locationCustom,
        },
        {
          headers: { Authorization: `JWT ${token}` },
        }
      )
      .then((result) => {
        alert("Submission Successful.");
        console.log(result, "Redirect to Next PAGE"); // Redirect to next page
      });
  }

  return (
    <button className="btn btn-primary" onClick={submitForm}>
      Submit
    </button>
  );
};

const mapStateToProps = ({
  companyReducer,
  logoReducer,
  openingReducer,
  openingnoReducer,
  tagReducer,
  descriptionReducer,
  assignmentReducer,
  techstackReducer,
  locationReducer,
  customlocationReducer,
  yetUpdateReducer,
}) => {
  return {
    companyReducer,
    logoReducer,
    openingReducer,
    openingnoReducer,
    tagReducer,
    descriptionReducer,
    assignmentReducer,
    techstackReducer,
    locationReducer,
    customlocationReducer,
    yetUpdateReducer,
  };
};

export default connect(mapStateToProps)(Submit);
