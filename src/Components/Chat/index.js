import "./style.css";
import React, { Component } from "react";
import "react-chat-elements/dist/main.css";
import avatar from "../../assets/avatar.PNG";
import { MessageBox, Input, Button } from "react-chat-elements";

export default class Setting extends Component {
  render() {
    return (
      <div className="box" id="chat">
        <img src={avatar} className="avatar" alt="user"/>
        <MessageBox
          type="text"
          position="left"
          date={new Date()}
          text="Hello !name, how are you feeling today "
        />
        <MessageBox
          type="text"
          position="right"
          date={new Date()}
          text="I'm ok my day could have been better"
        />
        <MessageBox
          type="text"
          position="left"
          date={new Date()}
          text="Oh thats not good to hear did you want to talk about it?"
        />
        <div className="inputDiv">
          <Input
            placeholder="Type here..."
            multiline={true}
            rightButtons={
              <Button
                text="Send"
                color="white"
                backgroundColor="rgba(81, 203, 206,1)"
              />
            }
          />
        </div>
      </div>
    );
  }
}
