import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./index.scss";
const Ranking = () => {
  const [listRanking, setListRanking] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/leduongk54a2/data-landingpage/main/db.json"
      )
      .then((resp) => {
        setListRanking(resp.data);
      });
  }, []);
  return (
    <div className="ranking-main center">
      <div className="main-description center">
        <span>CÁC THÍ SINH ĐANG DẪN ĐẦU</span>
      </div>
      <div className="ranking-wrapper animation-element slide-left">
        {listRanking?.map((item, index) => (
          <div className="image-wrapper " key={index}>
            <div
              style={{ height: "380px", width: "300px", overflow: "hidden" }}
            >
              <img src={item?.src} className="image" />
            </div>
            <div className="image-description center">
              <div className="name">{item?.name}</div>

              <div className="caption">{item?.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="center clock"
        style={{ marginTop: "20px", fontSize: "16px" }}
      >
        {` Kết quả cập nhật lúc 15:00:00 ${
          moment().hour() < 15
            ? moment().subtract(1, "day").format("DD/MM/YYYY")
            : moment().format("DD/MM/YYYY")
        }`}
      </div>
    </div>
  );
};

export default Ranking;
