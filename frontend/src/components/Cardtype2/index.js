import React from "react";
import "./Cardtype2.css";

function Cardtype2({ title, imgURL, content }) {
  return (
    <div className="cardview2-container">
      <div className="image2-container">
        <img src={imgURL} alt="" />
      </div>

      <div className="content2-container">
        <div className="title">
          <h3>{title}</h3>
        </div>

        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Cardtype2;
