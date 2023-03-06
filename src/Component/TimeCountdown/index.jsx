import React from "react";
import CountDown from "./CountDown";
import "./index.scss";

export default function TimeCountdown() {
  return (
    <div className="back-ground">
      <div className="time-wrapper  center">
        <div className="main-content animation-element slide-left">
          <div className="main-description center ">
            <span>THỜI GIAN BÌNH CHỌN</span>
          </div>
          <div className="sub-description">
            <span>ban tổ chức sẽ liên tục cập nhật điểm số</span>
          </div>
          <CountDown></CountDown>
          <div className="btn-description">
            Hãy bình chọn cho bức ảnh mà bạn yêu thích nhất !!!
          </div>
          <div
            className="btn-open-form center"
            onClick={() => {
              window.open("https://forms.gle/goXhWLbdt1McEMK68", "_blank");
            }}
          >
            <span>BÌNH CHỌN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
