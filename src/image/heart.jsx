import React, { Component } from "react";

export default class Heart extends Component {
  render() {
    return (
      <img
        height={160}
        width={160}
        src={window.location.origin + "/image/diamond.png"}
      ></img>
    );
  }
}
