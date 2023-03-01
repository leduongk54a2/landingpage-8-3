import React from "react";
import Logo from "../../image/logo";
import "./index.scss";

export default function Sponsor() {
  return (
    <div className="sponsor-container center">
      <div className="description">Our Sponsors</div>
      <div className="animation-element slide-left">
        <Logo />
      </div>
    </div>
  );
}
