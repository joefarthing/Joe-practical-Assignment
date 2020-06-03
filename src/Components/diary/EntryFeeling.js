import React, {useState} from "react";
import "./EntryFeeling.css";
import plus from "./plus.png";
import minus from "./minus.png";

function EntryFeeling(props) {
  const [count, setCount] = useState(0);
  const [today,setToday] =useState(0);
  const [tomorow, setTommorow] = useState(0);

  if (count > 10) {
    setCount(10);
  }

  if (count < 0) {
    setCount(0);
  }
  if (today > 10) {
    setToday(10);
  }

  if (today < 0) {
    setToday(0);
  }
  if (tomorow > 10) {
    setTommorow(10);
  }

  if (tomorow < 0) {
    setTommorow(0);
  }

  return (
  <div className="mainContainer" id="diary">
    <h1> Diary</h1>
    <div className="flex-containerrr">
      <div className="diaryBox">
        <h3>Yesterday</h3>
        <p>{count}</p>
        <div>
        <button onClick={() => setCount(count + 1)}><img src={plus} alt="plus icon" /></button>
        <button onClick={() => setCount(count - 1)}><img src={minus} alt="minus icon" /></button>
        </div>
      </div>
      <div className="diaryBox">
        <h3>Today</h3>
        <p>{today}</p>
        <div>
        <button onClick={() => setToday(today + 1)}><img src={plus} alt="plus icon" /></button>
        <button onClick={() => setToday(today - 1)}><img src={minus} alt="minus icon" /></button>
        </div>
      </div>
      <div className="diaryBox">
        <h3>Tomorrow</h3>
        <p>{tomorow}</p>
        <div>
        <button onClick={() => setTommorow(tomorow + 1)}><img src={plus} alt="plus icon" /></button>
        <button onClick={() => setTommorow(tomorow - 1)}><img src={minus} alt="minus icon" /></button>
        </div>
      </div>
      <div className="diaryBox"></div>
      <div className="diaryBox"></div>
    </div>
    <div className="diaryFooter">
      <div className="inputBox">
        <input className="diaryInput" />
        <button className="submitButton">Submit</button>
      </div>
    </div>
  </div>
);

};
export default EntryFeeling;
