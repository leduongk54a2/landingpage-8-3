import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

export default function ListImage() {
  const [listImage, setListImage] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/leduongk54a2/data-landingpage/main/listimage.json"
      )
      .then((resp) => {
        setListImage(resp.data);
      });
  }, []);
  return (
    <div className="list-image-main center">
      <div className="description">
        <span>ẢNH DỰ THI</span>
      </div>
      <div className="list-image animation-element slide-left">
        {listImage?.map((item, index) => (
          <div className="item" key={index}>
            <img
              src={item.image}
              alt=""
              onClick={() => {
                window.open(item.redirect, "_blank");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
