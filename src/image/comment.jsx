import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    return (
      <img
        style={{ transform: "scale(0.75) translateY(-60px)" }}
        height={160}
        width={160}
        src={window.location.origin + "/image/commentvti.png"}
      ></img>
    );
  }
}
