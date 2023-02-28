import axios from "axios";
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
        console.log(resp);
        setListRanking(resp.data);
      });
  }, []);
  return (
    <div className="ranking-main center">
      <div className="main-description center">
        <span>CÁC THÍ SINH ĐANG DẪN ĐẦU</span>
      </div>
      <div className="ranking-wrapper">
        {listRanking?.map((item, index) => (
          <div className="image-wrapper" key={index}>
            <img src={item?.src} className="image" />
            <div className="image-description">
              <div className="name">{item?.name}</div>

              <div className="caption">{item?.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
