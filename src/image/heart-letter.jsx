import React, { Component } from "react";

export default class HeartLetter extends Component {
  render() {
    return (
      <img
        style={{ transform: "scale(2.5)" }}
        height={160}
        width={160}
        src={window.location.origin + "/image/gift.png"}
      ></img>
    );
  }
}
