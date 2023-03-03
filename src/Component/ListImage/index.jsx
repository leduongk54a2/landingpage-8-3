import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

export default function ListImage() {
  const listImage = [1, 2, 3, 4, 5, 6];
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
                window.open("https://forms.gle/8zGBD1QyrkJt9ynp7", "_blank");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
