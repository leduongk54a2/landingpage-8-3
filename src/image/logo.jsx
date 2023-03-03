import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <img
        height={160}
        width={250}
        src={window.location.origin + "/image/logo.png"}
      ></img>
    );
  }
}
