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
            <span>CÁC TIÊU CHÍ CHỌN ẢNH</span>
          </div>
          <div className="main-guideline animation-element slide-left">
            <span>Ảnh chất lượng cao, chụp rõ mặt, chụp toàn thân</span>
            <span>
              Ảnh chụp bằng máy ảnh, điện thoại di động hoặc các công cụ chụp
              ảnh khác
            </span>
          </div>
          <div className="guideline-step-wrapper animation-element slide-left center">
            <div className="guideline-step">
              <div className="center hight-line-wrap">
                <div className="circle"></div>
                <div className="hight-line"></div>
              </div>
              <div className="guideline-step-content center">
                <span>1.</span>
                <span>
                  Mỗi một bức ảnh gửi kèm theo phần Mô tả ảnh/ Lời bình cho tác
                  phẩm không quá 200 ký tự.
                  <br />
                  Mỗi tác giả chỉ được gửi 01 sản phẩm dự thi. BTC sẽ nhận 01
                  bài dự thi đầu tiên của tác giả, các tác phẩm gửi quá số lượng
                  sẽ không được chấp nhận
                </span>
              </div>
            </div>
            <div className="guideline-step">
              <div className="center hight-line-wrap">
                <div className="circle"></div>
                <div className="hight-line"></div>
              </div>
              <div className="guideline-step-content center">
                <span>2.</span>
                <span>
                  Tác giả chịu trách nhiệm về tính pháp lý và chi phí bản quyền
                  hình ảnh, bản quyền tư liệu sử dụng trong tác phẩm dự thi,
                  tính xác thực các thông tin được thể hiện trong tác phẩm và
                  thông tin gửi cho Ban Tổ chức
                </span>
              </div>
            </div>
            <div className="guideline-step">
              <div className="hight-line-wrap">
                <div className="circle"></div>
              </div>
              <div className="guideline-step-content center">
                <span>3.</span>
                <span>
                  Tác phẩm dự thi phải đảm bảo không vi phạm thuần phong mỹ tục,
                  tôn giáo, không vi phạm pháp luật Việt Nam
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
