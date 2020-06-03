import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.setSideMenuState} />
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
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
      </div>
    </nav>
  </header>
);

export default toolbar;
