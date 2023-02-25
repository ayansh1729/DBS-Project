import React from "react";
import "./MainCard.css";
import Card from "./Card";

function MainCard() {
  return (
    <div className="Main__Card">
      <div className="teams">
        <p>Our Team Members</p>
      </div>
      <div className="members">
        <Card
          name="Sanjeet"
          link="https://ayansh1729.github.io/sanjeet_cs21b2012.github.io/"
          path="../assets/Dp.jpg"
        />
        <Card name="Girik" link="https://girik-khullar.github.io" />
        <Card
          name="Hari"
          link="https://ayansh1729.github.io/cs21b1071_Hari.github.io/"
        />
        <Card
          name="Tanu"
          link="https://ayansh1729.github.io/Tanushree_CS21b1070.github.io/"
        />
      </div>
    </div>
  );
}

export default MainCard;
