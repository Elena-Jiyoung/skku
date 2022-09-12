import React from "react";
import "./Cardtype1.css";

function Cardtype1({ title, imgURL, content }) {
  return (
    <div className="cardview-container">
      <div className="image-container">
        <img src={imgURL} alt="" />
      </div>

      <div className="content-container">
        <div className="title">
          <h3>{title}</h3>
        </div>

        <div className="content">
          <p>{content}</p>
        </div>
      </div>

      <div className="btn">
        <button>
          <a href="/">View More</a>
        </button>
      </div>
    </div>
  );
}

export default Cardtype1;
