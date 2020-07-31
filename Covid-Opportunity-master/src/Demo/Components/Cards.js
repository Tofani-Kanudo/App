import React from "react";
import "../App.css";

const Cards = (props) => {
  return (
    <div>
      <div className="cards">
        <div className="card_container">
          <img src={props.image} className="large_cards " />
        </div>
        <div className="card_text ">
          <div className="post">{props.post}</div>
          <div className="company">{props.company}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
