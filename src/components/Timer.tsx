import { useState, useEffect, useRef } from "react";
//  import cardImage from "../assets/card.jpg";
import "../App.css";
import { Form } from "react-router-dom";

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  //  const name = 'Damola'

  const timer = useRef;

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
  }, [running]);
  const Format = (time: number) => {
    let days = Math.floor((time / 60 / 60 / 24) % 7);
    let hours = Math.floor((time / 60 / 60) % 24);
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    days = days < 10 ? 0 + days : days;
    hours = hours < 10 ? 0 + hours : hours;
    minutes = minutes < 10 ? 0 + minutes : minutes;
    seconds = seconds < 10 ? 0 + seconds : seconds;
    //  hours = hours < 10 ? 0 + hours : hours
    return (
      <section className="watch">
        <div>
          <h1>{days}</h1>
          <p>{days >= 2 ? "DAYS" : "DAY"}</p>
        </div>
        <div>
          <h1>{hours}</h1>
          <p>{hours >= 2 ? "HOURS" : "HOUR"}</p>
        </div>
        <div>
          <h1>{minutes}</h1>
          <p>{minutes >= 2 ? "MINUTES" : "MINUTE"}</p>
        </div>
        <div>
          <h1>{seconds}</h1>
          <p>{seconds >= 2 ? "SECONDS" : "SECOND"}</p>
        </div>
      </section>
    );
  };
  return (
    <div className="count_box">
      {/* <h1>WE'RE LAUNCHING SOON</h1> */}
      <h2 style={{ fontFamily: "OnestBold" }}>IT'LL BE MY BIRTHDAY IN.....</h2>
      <section>
        <>{Format(time)}</>
        <button onClick={() => setTime(0)}>RESET</button>
      </section>
    </div>
  );
}

export default Timer;
