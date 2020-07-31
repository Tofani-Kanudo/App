import React from "react";

import "./Usernext.css";
import FormSvg from "./FormSvg";
import JobForm from "./JobForm";

function Usernext() {
  return (
    <div className="row">
      <FormSvg />
      <JobForm />
      <div class="illus-2 col-md-1">
        <img src="Group 246.svg" class="illus-img" />
      </div>
    </div>
  );
}

export default Usernext;
