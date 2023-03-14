import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

export default function ListImage() {
  // const listImage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [listImage, setListImage] = useState([
    {
      image:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/335037548_749518363360620_5314436063022252934_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=UJBNROnl-Q4AX_GhrBB&_nc_ht=scontent.fhan3-2.fna&oh=00_AfAtq5y8cvrD0oJ7eT4Nt-9c9-qLmji0-nppip8LRhgnMw&oe=641403F7",
      name: "Quỳnh Ngân",
      title: "Giải Nhì & Beauty in Tech",
    },
    {
      image:
        "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/334981532_719781863216867_4429206588202658106_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=FQaxFe_fA-UAX_ligf2&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCQogE_0-_gj9QtxunYhJiPLTIewCppd3aDoFR3KVENlg&oe=6413EFD7",
      name: "Trang Hoàng",
      title: "Giải Nhì",
    },
    {
      image:
        "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/330556242_5759185450876012_5064434672465114836_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=VXkyxtYkjNkAX-RZK27&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBbhFbI-nNCaMahWaR1vW2fbP-djmN_hdvRlchJ9YSK8w&oe=6414BB0A",
      name: "Nguyên Đặng",
      title: "Giải Ba",
    },
    {
      image:
        "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/334991725_883906612842012_7502176584304538904_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=aFvX639m9aMAX-A4IiI&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBcz2f6fltPS5pKqEkq8B_Tfdo79v0RCtEK4rJItctu8g&oe=6414373B",
      name: "Diệu Hương",
      title: "Giải Ba",
    },
    {
      image:
        "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/335278162_107878992242203_7881780139081720700_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=iQXHplB2MOIAX8DfubU&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAXubiOEuazlB9zI4yZ57bMtPh7qBptmsczlCkJnWWOtg&oe=641440B8",
      name: "Ngọc Hà",
      title: "Giải Ba",
    },
    {
      image:
        "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/334954676_765855175163041_4951005103938713403_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=z4QPoX1kYkQAX_g11Iu&_nc_oc=AQlkJPyhI2asUDql86buUk-JKglKXYE-MRUimu2tRetLPbNne_tE9sLhdHSk02IvmLU&_nc_ht=scontent.fhan4-3.fna&oh=00_AfAA7JxzHAGpg1swtRUvdcVKMJbb2kShQh5dJ7qZXv_lpA&oe=641423AF",
      name: "Chang mắm",
      title: "Giải Khuyến Khích",
    },
    {
      image:
        "https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/330309630_765530651854346_1852254281031784273_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=IfJ5u3YiUssAX_sXfu3&_nc_ht=scontent.fhan4-2.fna&oh=00_AfAGeoItVaFtwHEeC6IaR5iICjNEqg5nSpjOBaKY-4izZg&oe=641584BA",
      name: "Phượng ớt",
      title: "Giải Khuyến Khích",
    },
    {
      image:
        "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/335253360_880067709942469_7886266526068406775_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2I5yfnRmKYAX8--B_h&_nc_ht=scontent.fhan3-1.fna&oh=00_AfDWBuzrMkgxNxQZXEn1zAbCASrwxvGIcre28qZuzyTLjg&oe=64149279",
      name: "Hải Anh",
      title: "Giải Khuyến Khích",
    },
    {
      image:
        "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/335069723_1238699920412165_1290750967397078629_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=bb2uIDiVb0UAX_EZhJo&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCk5Dq9TAWPYcq_5UehpGFWPOMEw1TrHTLiCvSVW_hCTQ&oe=6414E780",
      name: "An Nhiên",
      title: "Giải Khuyến Khích",
    },
    {
      image:
        "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/334944674_891646452111641_575486298007839559_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=S5O0z5hPAywAX_rzZX3&_nc_ht=scontent.fhan3-5.fna&oh=00_AfAQoozRUwDQ1WOi6RPWDxDk2Dee9UHwssGdDZx10osQRQ&oe=6415C31D",
      name: "Thu Ba",
      title: "Giải Khuyến Khích",
    },
    {
      image:
        "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/335198119_3433457923568827_3276805531215421142_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=rVdn6CL3i8sAX8yDDFh&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCrQ-CQ-pJh_I8tg8Es8Q_39CoFXZahEXlEZ89JuxtGtw&oe=64142B7F",
      name: "Thanh Dịu",
      title: "Giải Bức ảnh có lời bình ấn tượng",
    },
    {
      image:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/330412773_184953930907581_4712311757475659548_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=zyC9OBMt34YAX_Kgazt&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCtGTlTsWjtpr_W-qqYoeRJm4RsAOEnVg_kS5eY-HBYEw&oe=641597B7",
      name: "Thùy Dương",
      title: "Giải Bức ảnh ấn tượng",
    },
    {
      image:
        "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/334985814_609932583927198_8013100023526101187_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=DAUrxmcFDdQAX85mGn3&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBK0Wlwg2eXSAfnbkaRPOMtjXXYLnuVwkyAH6Pvw_M5GA&oe=64149574",
      name: "Chese",
      title: "Giải Bức ảnh ấn tượng",
    },
    {
      image:
        "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/334980307_157695997150216_3395538895905043398_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=QrEWbUAIg1QAX_Lvefl&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBFtBiWwsIl7ADymkYvSt_yiviTEgJeYLAr1NK3ADnuAA&oe=6414E1E8",
      name: "Hiền Linh",
      title: "Giải Miss Social Network",
    },
  ]);

  return (
    <div className="list-image-main center">
      <div className="description">
        <span>CÁC BỨC ẢNH ĐẠT GIẢI TRONG CUỘC THI</span>
      </div>
      <div className="list-image animation-element slide-left">
        {listImage?.map((item, index) => (
          <div className="item center" key={index}>
            <img
              src={item.image}
              alt=""
              onClick={() => {
                window.open(item.redirect, "_blank");
              }}
            />
            <div className="image-description center">
              <div className="name">{item?.name}</div>

              <div className="caption">{item?.title}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <div
        className="btn-direct center"
        onClick={() => {
          window.open(
            "https://facebook.com/story.php?story_fbid=pfbid02kcxrkhzxRnehvDmaw9tGR4Nh8AUDiTWsoaDGwpsmfUdEdQNcpmMg58RsDfUbd1WGl&id=100063522702301&mibextid=l066kq",
            "_blank"
          );
        }}
      >
        XEM THÊM ẢNH
      </div> */}
    </div>
  );
}
