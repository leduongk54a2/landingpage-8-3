import React from "react";
import Heart from "../../image/heart";
import "./index.scss";

export default function Schedule() {
  return (
    <div className="schedule-main  center">
      <div className="schedule-wrapper  center">
        <div className="main-description">
          <span>CÁC MỐC THỜI GIAN THAM DỰ</span>
        </div>
        <div className="time-line-wrapper animation-element slide-left center">
          <div className="time-line-content center">
            <div>Thời gian gửi ảnh dự thi</div>
            <div>28/02/2023 – 02/03/2023</div>
            <Heart></Heart>
            <div className="line-wrapper">
              <p className="circle"></p>
              <div className="hight-line line-1"></div>
            </div>
            <div className="timeline-title">MỐC 1</div>
          </div>
          <div className="time-line-content center">
            <div>Thời gian bình chọn</div>
            <div>06/03/2023 – 08/03/2023</div>
            <Heart></Heart>
            <div className="line-wrapper">
              <p className="circle"></p>
              <div className="hight-line"></div>
            </div>
            <div className="timeline-title">MỐC 2</div>
          </div>
          <div className="time-line-content center">
            <div>Thời gian công bố kết quả</div>
            <div>09/03/2023</div>
            <Heart></Heart>
            <div className="line-wrapper">
              <p className="circle"></p>
              <div className="hight-line"></div>
            </div>
            <div className="timeline-title">MỐC 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
