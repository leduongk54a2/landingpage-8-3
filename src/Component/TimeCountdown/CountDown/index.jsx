import moment from "moment/moment";
import React, { useEffect, useState } from "react";

const CountDown = () => {
  const getTime = () => {
    var start = moment(new Date());
    var end = moment("2023031010", "YYYYMMDDhh");
    return moment.duration(end?.diff(start))?._data;
  };

  const TimeDelay = getTime();
  const [delay, setDelay] = useState({ ...TimeDelay } || {});

  const days = delay?.days > 0 ? delay?.days : 0;
  const hours = delay?.hours > 0 ? delay?.hours : 0;
  const minutes = delay?.minutes > 0 ? delay?.minutes : 0;
  const seconds = delay?.seconds > 0 ? delay?.seconds : 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeDelay = getTime();
      setDelay({ ...newTimeDelay });
    }, 1000);

    if (delay?.asSeconds === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="time-item-wrapper">
      <div className="time-item center">
        <span>NGÀY</span>
        <span>{days < 10 ? `0${days}` : days}</span>
      </div>
      <div className="time-item center">
        <span>GIỜ</span>
        <span>{hours < 10 ? `0${hours}` : hours}</span>
      </div>
      <div className="time-item center">
        <span>PHÚT</span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
      </div>
      <div className="time-item center">
        <span>GIÂY</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
};

export default CountDown;
