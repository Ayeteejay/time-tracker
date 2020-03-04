import React, { useEffect, useState } from "react";
import { framer } from "framer-motion";

const Card = props => {
  const [taskTime, setTaskTime] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOn, setIsOn] = useState(false);

  const [seconds, setSeconds] = useState(0);

  function startTimer() {
    setIsOn(!isOn);
  }

  useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isOn && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, seconds]);

  let secs = ("0" + (Math.floor(seconds) % 60)).slice(-2);
  let minutes = ("0" + Math.floor(seconds / 60)).slice(-2);
  let hours = ("0" + Math.floor(seconds / 3600)).slice(-2);
  console.log(minutes);
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: isOn ? "green" : "gray",
          padding: "3em",
          width: "400px"
        }}
      >
        <p>Start Time of task: {time}</p>
        <h4>{props.cardName}</h4>
        <p>Time to complete: {props.cardTime}</p>
        <p>{props.cardInfo}</p>
        <hr />
        <button onClick={startTimer}>Start</button>
        {/* <p>{seconds}</p> */}
        <p>
          hours {hours} minutes {minutes} seconds {secs}
        </p>
        {/* <hr />
        <button
          onClick={() => {
            setSeconds(seconds + 5000);
          }}
        >
          Debug
        </button> */}
      </div>
    </React.Fragment>
  );
};
export default Card;
