import "./style.css";
import React, { Component } from "react";
import facebook from "../../assets/facebook.png";

export default class Setting extends Component {
  render() {
    return (
      <div className="boxsetting" id="setting">
        <h3 className="settingIntro">Setting</h3>
        <p className="settingLink">Diary entry history</p>
        <p className="settingLink">Personalisation</p>
        <p className="settingLink">Privacy</p>
        <p className="settingLink">Terms and Conditions</p>
        <div className="settingLinkBox">
          <img src={facebook} height="70" alt="FacebookIcon"/>
          <img src={facebook} height="70" alt="FacebookIcon"/>
          <img src={facebook} height="70"alt="FacebookIcon"/>
        </div>
      </div>
    );
  }
}
