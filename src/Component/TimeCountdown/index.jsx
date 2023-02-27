import React from "react";
import CountDown from "./CountDown";
import "./index.scss";

export default function TimeCountdown() {
  return (
    <div className="back-ground">
      <div className="time-wrapper center">
        <div className="main-content">
          <div className="main-description center">
            <span>THỜI GIAN KẾT THÚC SỰ KIỆN</span>
          </div>
          <div className="sub-description">
            <span>ban tổ chức sẽ liên tục cập nhật đơn đăng ký</span>
          </div>
          <CountDown></CountDown>
          <div className="btn-description">
            nhanh tay đăng ký để không bỏ lỡ cơ hội này nhé
          </div>
          <div
            className="btn-open-form center"
            onClick={() => {
              window.open("https://forms.gle/Nx5Bm7n6zfYanS5M9", "_blank");
            }}
          >
            <span>CALL TO ACTION</span>
          </div>
        </div>
      </div>
    </div>
  );
}