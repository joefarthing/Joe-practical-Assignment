import "./style.css";
import React, { Component } from "react";

export default class Chat extends Component {
  render() {
    return (
      <div className="boxLogin" id="login">
        <h3 className="loginIntro">
          Please login here with your university credentials
        </h3>
        <input className="loginInput" placeholder="Email" />
        <input className="loginInput" placeholder="Password" />
        <button className="loginBut">Login</button>
      </div>
    );
  }
}
