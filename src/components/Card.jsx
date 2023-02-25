import React from "react";
import Sanjeet from "../assets/Sanjeet.jpeg";
import Hari from "../assets/Hari.jpeg";
import Girik from "../assets/Girik.jpeg";
import Tanu from "../assets/Tanu.jpeg";

import "./Card.css";

function Card({ name, link }) {
  let imgsrc;
  switch (name) {
    case "Sanjeet":
      imgsrc = Sanjeet;
      break;
    case "Hari":
      imgsrc = Hari;
      break;
    case "Tanu":
      imgsrc = Tanu;
      break;
    case "Girik":
      imgsrc = Girik;
      break;
  }
  return (
    <div className="Card">
      <a href={link}>
        <p>{name}</p>
        <img src={imgsrc}></img>
      </a>
    </div>
  );
}

export default Card;
