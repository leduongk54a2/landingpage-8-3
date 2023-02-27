import React from "react";
import OnlyHeart from "../../image/only-heart";
import "./index.scss";

export default function GuideLine() {
  return (
    <div className="guideline-main center">
      <div className="guideline-wrapper">
        <div className="icon-guideline">
            <OnlyHeart />
        </div>
        <div className="guideline-name">
          <span>QUY CÁCH ẢNH DỰ THI</span>
        </div>
        <div className="main-guideline">
          <span>
            Ảnh chất lượng cao, chụp rõ mặt, chụp toàn thân <br />
            Ảnh chụp bằng máy ảnh, điện thoại di động hoặc các công cụ chụp ảnh
            khác
          </span>
        </div>
      </div>
      <div className="photo-demo">
        <div className="photo-1"></div>
        <div className="photo-2"></div>
      </div>
    </div>
  );
}
