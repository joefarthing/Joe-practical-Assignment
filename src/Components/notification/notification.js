import React from 'react'

import './notification.css';

const Notification = props => (
    <div className="flex-containerr">
        <div className="chat-box">
        <div className="note-flex">
        <h2>help is available</h2>
        <h3> now</h3>
        </div>
        <p> If you need a chat (name) is available!</p>
        <button class="button" ><span>Take me there </span></button>
        </div>
        <div className="diary">
        <div className="note-flex">
            <h2> Diary</h2>
            <h3>now</h3>
        </div>
            <p> How was your day?</p>
            <button class="button" ><span>Take me there </span></button>
        
        </div>
        </div>

);

export default Notification;