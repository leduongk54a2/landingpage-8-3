import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./index.scss";
const Ranking = () => {
  const [listRanking, setListRanking] = useState([]);
  const [time, setTime] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/leduongk54a2/data-landingpage/main/data-landingpage.json"
      )
      .then((resp) => {
        setListRanking(resp.data.data);
        setTime(resp.data.time);
      });
  }, []);
  return (
    <div className="ranking-main center">
      <div className="main-description center">
        <span>GIẢI NHẤT CUỘC THI</span>
        <span>MISS PHOTO PANDORA 2023</span>
      </div>
      <div className="ranking-wrapper animation-element slide-left">
        {listRanking?.map((item, index) => (
          <div className="image-wrapper " key={index}>
            <div
              style={{
                height: "66%",
                aspectRatio: "350 / 430",
                overflow: "hidden",
              }}
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
      {/* <div
        className="center clock"
        style={{ marginTop: "20px", fontSize: "16px" }}
      >
        {` Kết quả cập nhật lúc  ${time}`}
      </div> */}
    </div>
  );
};

export default Ranking;
