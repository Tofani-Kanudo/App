import React from "react";
import $ from "jquery";

const Modal = () => {
  return (
    <div className="modals" id="modal">
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 30,
          fontSize: 20,
          fontWeight: 700,
          color: "black",
          cursor: "pointer",
        }}
        onClick={() => {
          $("#modal").slideToggle("slow");
        $("#navbarSupportedContent").slideToggle("slow");
        window.scrollTo(0, 0);
        }}
      >
        X
      </div>
      <div className="modal-heading">
        In order to request Employee Referral, <br/> View openings And connect with various Companies,<br/>
      </div>
      <div className="modal-subheading">
        Complete Profile Verification and Log into your Account!
      </div>
      {/* <div className=" description-button description-modal-button">
        Go To Signup
      </div> */}
    </div>
  );
};

export default Modal;
