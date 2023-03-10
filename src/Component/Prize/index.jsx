import React from "react";
import Heart from "../../image/heart";
import HeartLetter from "../../image/heart-letter";
import "./index.scss";

export default function Prize() {
  return (
    <div className="prize-main center">
      {/* <div className="prize-wrapper center">
        <div className="main-description">
          <span>GIẢI THƯỞNG CỦA CHƯƠNG TRÌNH</span>
        </div>
        <div className="list-prize-wrapper animation-element slide-left">
          <div className="prize-item center">
            <HeartLetter></HeartLetter>
            <div className="prize-description">02 Giải Nhì</div>
          </div>
          <div className="prize-item center">
            <HeartLetter></HeartLetter>
            <div className="prize-description">01 Giải Nhất</div>
          </div>
          <div className="prize-item center">
            <HeartLetter></HeartLetter>
            <div className="prize-description">03 Giải Ba</div>
          </div>
          <div className="prize-item center">
            <HeartLetter></HeartLetter>
            <div className="prize-description">05 Giải Khuyến khích</div>
          </div>
        </div>
        <div className="sub-prize-description animation-element slide-left">
          Các giải phụ:<br />
          <div className="prize-description">01 Giải Bức ảnh ấn tượng</div>
          <div className="prize-description">
            01 Giải Bức ảnh có lời bình hay nhất
          </div>
        </div>
      </div> */}
      <div
        className="btn-direct center"
        onClick={() => {
          window.open(
            "https://www.facebook.com/vti.com.vn/posts/pfbid034mRSH428xup7jmdfbR9kVAJo16RQkUrN4XYCWUNtp2grUEcJmghBa8GLi8NTNu6jl",
            "_blank"
          );
        }}
      >
        DỰ ĐOÁN
      </div>
    </div>
  );
}
