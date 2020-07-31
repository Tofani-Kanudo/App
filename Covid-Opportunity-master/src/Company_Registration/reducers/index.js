import { combineReducers } from "redux";

const companyReducer = (state = "", action) => {
  switch (action.type) {
    case "Company_Value":
      return action.payload;

    default:
      return state;
  }
};
const logoReducer = (state = "", action) => {
  switch (action.type) {
    case "Logo_Value":
      return action.payload;

    default:
      return state;
  }
};
const assignmentReducer = (state = "", action) => {
  switch (action.type) {
    case "Assignment_Value":
      return action.payload;

    default:
      return state;
  }
};
const openingnoReducer = (state = 0, action) => {
  switch (action.type) {
    case "Openingno_Value":
      return action.payload;

    default:
      return state;
  }
};
const descriptionReducer = (state = "", action) => {
  switch (action.type) {
    case "Description_Value":
      return action.payload;

    default:
      return state;
  }
};
const tagReducer = (state = [], action) => {
  switch (action.type) {
    case "Tags_Value":
      return action.payload;

    default:
      return state;
  }
};

const techstackReducer = (state = [], action) => {
  switch (action.type) {
    case "Techstack_Value":
      return action.payload;

    default:
      return state;
  }
};
const openingReducer = (state = [], action) => {
  switch (action.type) {
    case "Opening_Value":
      return action.payload;

    default:
      return state;
  }
};
const customlocationReducer = (state = [], action) => {
  switch (action.type) {
    case "Custom_Location_Value":
      return action.payload;

    default:
      return state;
  }
};
const locationReducer = (state = [], action) => {
  switch (action.type) {
    case "Location_Value":
      return action.payload;

    default:
      return state;
  }
};
const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case "Fetch_Token":
      return action.payload;
    default:
      return state;
  }
};

const detailsReducer = (state = null, action) => {
  switch (action.type) {
    case "Company_Details":
      return action.payload;
    default:
      return state;
  }
};
const yetUpdateReducer = (state = true, action) => {
  switch (action.type) {
    case "Yet_Update":
      return action.payload;
    default:
      return state;
  }
};
const deslocationReducer = (state = true, action) => {
  switch (action.type) {
    case "Description_Location":
      return action.payload;
    default:
      return state;
  }
};

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "Fetch_Profile":
      return action.payload;
    default:
      return state;
  }
};

const skillReducer = (state = {}, action) => {
  switch (action.type) {
    case "Fetch_Skill":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
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
  tokenReducer,
  detailsReducer,
  yetUpdateReducer,
  deslocationReducer,
  profileReducer,
  skillReducer,
});
