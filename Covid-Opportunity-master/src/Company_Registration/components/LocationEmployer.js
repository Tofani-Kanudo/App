import React from "react";
import $ from "jquery";
import Accordion from "./Accordion";

export default function LocationSelect() {
  const continentData = ["Asia", "Europe", "Australia", "Africa"];
  const renderAccordions = () => {
    let z = [];
    z = continentData.map((value) => {
      return <Accordion id={value} />;
    });

    return z;
  };
  return (
    <div className="location-container" >
      <div className="select_country_header">
        Select Locations
        <span
          className="expand"
          id="expand"
          onClick={() => {
            $("#select_continent").toggle(400);
            var x = document.getElementById("expand");
            if (x.innerHTML === "+") {
              x.innerHTML = "-";
            } else {
              x.innerHTML = "+";
            }
          }}
        >
          +
        </span>
      </div>
      <div id="select_continent" className="continents">
        {renderAccordions()}
      </div>
    </div>
  );
}
