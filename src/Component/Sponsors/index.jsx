import React from "react";
import Logo from "../../image/logo";
import LogoVbs from "../../image/logo-vbs";
import "./index.scss";

export default function Sponsor() {
  return (
    <div className="sponsor-container center">
      <div className="description">Sponsors</div>
      <div className="animation-element slide-left">
        <Logo />
        <LogoVbs />
      </div>
    </div>
  );
}
