import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header__left">
          <p>DBS Project</p>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="Header__right">
            <p>Login/signup</p>
      </div>
    </div>
  );
}

export default Header;
