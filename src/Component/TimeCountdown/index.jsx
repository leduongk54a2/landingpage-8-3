import React from "react";
import CountDown from "./CountDown";
import "./index.scss";

export default function TimeCountdown() {
  return (
    <div className="back-ground">
      <div className="time-wrapper">
        <div className="main-content">
          <CountDown></CountDown>
        </div>
      </div>
    </div>
  );
}
