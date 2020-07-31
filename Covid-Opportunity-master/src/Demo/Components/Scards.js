import React from "react";

const Scards = (props) => {
  return (
    <div>
      <div className="scards">
        <div className="scard_container">
          <img src={props.image} className="small_cards" />
        </div>
        <div className="scard_text">
          <div className="spost">{props.post}</div>
          <div className="company">{props.company}</div>
        </div>
      </div>
    </div>
  );
};

export default Scards;
