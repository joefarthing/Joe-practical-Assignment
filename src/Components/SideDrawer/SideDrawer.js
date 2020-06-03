import React from "react";
import "./SideDrawer.css";

const sideDrawer = () => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/#chat">Live Chat</a>
      </li>
      <li>
        <a href="/#diary">Diary</a>
      </li>
      <li>
        <a href="/#setting">Settings</a>
      </li>
      <li>
        <a href="/#login">Login</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
