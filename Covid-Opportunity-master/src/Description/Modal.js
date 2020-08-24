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
        This is a premium-only feature: join to unlock this feature
      </div>
      <div className="modal-subheading">
        Want unlimited access to thousands of commercial-ready premium products?
      </div>
      <div className=" description-button description-modal-button">
        Go Premium
      </div>
    </div>
  );
};

export default Modal;
