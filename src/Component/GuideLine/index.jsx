import React from "react";
import Heart from "../../image/heart";
import OnlyHeart from "../../image/only-heart";
import "./index.scss";

export default function GuideLine() {
  return (
    <div className="guideline-main center">
      <div className="guideline-layout center">
        <div className="guideline-wrapper ">
          <div className="icon-guideline"></div>
          <div className="guideline-name center">
            <Heart />
            <span>CÁCH THỨC TÍNH ĐIỂM</span>
          </div>
          <div className="main-guideline animation-element slide-left">
            <span>BTC sẽ tiến hành bính chọn trực tuyến tác phẩm được yếu thích nhất trên Facebook VTI life từ ngày 06/03 - 12h00 ngày 09/03. Đồng thời triển khai vote nội bộ trong VTI Group</span>
           
          </div>
          <div className="guideline-step-wrapper animation-element slide-left center">
            <div className="guideline-step">
              <div className="center hight-line-wrap">
                <div className="circle"></div>
                <div className="hight-line"></div>
              </div>
              <div className="guideline-step-content center">
                <span>
                  Trọng số tính điểm:
                  <br />
                  Căn cứ lượt react trên ảnh và lượt vote nội bộ
                </span>
              </div>
            </div>
            <div className="guideline-step">
              <div className="center hight-line-wrap">
                <div className="circle"></div>
                <div className="hight-line"></div>
              </div>
              <div className="guideline-step-content center">
                <span>
                 Tổng điểm dự thi = tổng điểm thứ hạng trên facebook + 1,5 x tổng điểm thứ hạng bình chọn nội bộ
                </span>
              </div>
            </div>
            <div className="guideline-step">
              <div className="hight-line-wrap">
                <div className="circle"></div>
              </div>
              <div className="guideline-step-content center">
                <span>
                  Trong trường hợp có tranh chấp, khiếu nại, gian lận,... BTC sẽ lập ban điểm tra và thảo luận, quyết định của BTC sẽ là quyết định cuối cùng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photo-demo  center animation-element slide-left">
        <div className="photo-1"></div>
      </div>
    </div>
  );
}
