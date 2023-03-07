import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

export default function ListImage() {
  const listImage = [1, 2, 3, 4, 5, 6, 7, 8];
  // const [listImage, setListImage] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://raw.githubusercontent.com/leduongk54a2/data-landingpage/main/listimage.json"
  //     )
  //     .then((resp) => {
  //       setListImage(resp.data);
  //     });
  // }, []);
  return (
    <div className="list-image-main center">
      <div className="description">
        <span>ẢNH DỰ THI</span>
      </div>
      <div className="list-image animation-element slide-left">
        {listImage?.map((item, index) => (
          <div className="item" key={index}>
            <img
              src={
                window.location.origin + `/image/list-image/${index + 1}.jpg`
              }
              alt={item}
              onClick={() => {
                window.open(
                  "https://facebook.com/story.php?story_fbid=pfbid02kcxrkhzxRnehvDmaw9tGR4Nh8AUDiTWsoaDGwpsmfUdEdQNcpmMg58RsDfUbd1WGl&id=100063522702301&mibextid=l066kq",
                  "_blank"
                );
              }}
            />
          </div>
        ))}
      </div>
      <div
        className="btn-direct center"
        onClick={() => {
          window.open(
            "https://facebook.com/story.php?story_fbid=pfbid02kcxrkhzxRnehvDmaw9tGR4Nh8AUDiTWsoaDGwpsmfUdEdQNcpmMg58RsDfUbd1WGl&id=100063522702301&mibextid=l066kq",
            "_blank"
          );
        }}
      >
        XEM THÊM ẢNH
      </div>
    </div>
  );
}
