import React from 'react';

import './Checkbox.css';

const CheckboxToggle = props => (
    <div className="radio-group">
        <div className="flex-container">
        <label className="red">
            <input type="radio" value="1" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="lightred">
            <input type="radio" value="2" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="lightorange">
            <input type="radio" value="4" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="orange">
            <input type="radio" value="3" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="lightestorange">
            <input type="radio" value="5" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="yellow">
            <input type="radio" value="6" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="neonyellow">
            <input type="radio" value="7" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="limegreen">
            <input type="radio" value="8" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="neongreen">
            <input type="radio" value="9" name="feeliing"></input>
            <span> </span>
        </label>
        <label className="green">
            <input type="radio" value="10" name="feeliing"></input>
            <span> </span>
        </label>
        </div>
    </div>


);
export default CheckboxToggle;