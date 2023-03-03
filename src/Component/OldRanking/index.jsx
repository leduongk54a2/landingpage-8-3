import React from "react";
import Comment from "../../image/comment";
import Heart from "../../image/heart";
import HeartLetter from "../../image/heart-letter";
import "./index.scss";

export default function OldRanking() {
  return (
    <div className="old-ranking-main center">
      <div className="old-ranking-wrapper center">
        <div className="main-description">
          <span>
            TOP <span className="number">3</span> MÙA{" "}
            <span className="number">2021</span>
          </span>
        </div>
        <div className="list-old-ranking-wrapper animation-element slide-left">
          <div className="old-ranking-item center">
            <div className="avatar">
              <img
                src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/156646580_2927675220886082_4507494913119174649_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=ObSvRhCPzO8AX_WAkUI&_nc_ht=scontent.fhan3-4.fna&oh=00_AfDrRTjI64xey3lwYKf4kG-vFc0lQ8sEXKbxfx6xpIg24g&oe=6426239F"
                alt="Avatar"
              ></img>
            </div>
            <Comment />
            <div className="name">Trương Nguyên Hà - VTI.BO</div>
            <div className="caption">
              “Nghe nói anh làm IT
              <br />
              Tại sao không đến like me đi nè”
              <br />
            </div>
          </div>
          <div className="old-ranking-item center">
            <div className="avatar">
              <img
                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/157010338_2927675594219378_8529013475932484600_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZMWzWYfAM58AX_RXX2C&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCNMBDOfUizYINrfYxSz4dHgbP1Zegu7vfWFV40MbbM2w&oe=64262A89"
                alt="Avatar"
              ></img>
            </div>
            <Comment />
            <div className="name"> Vũ Thị Mai Phương - VTI.BO</div>
            <div className="caption">
              "Xưa Phương thần thái ngút trời Dòng đời xô đẩy biến thành nàng
              Sale <br />
              Sale gì? Sale app sale tool <br />
              Dzô đây công nghệ, thích.... là mình sale =)))))"
              <br />
            </div>
          </div>
          <div className="old-ranking-item center">
            <div className="avatar">
              <img
                src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/156197784_2927675544219383_3825232995692513635_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=jXyEihvByk8AX8sBmVD&_nc_ht=scontent.fhan4-3.fna&oh=00_AfA33ocZpJ4rpQdtTY0vS60LvTQBTyrXAkhekhZflABzuw&oe=64264DDE"
                alt="Avatar"
              ></img>
            </div>
            <Comment />
            <div className="name">Nguyễn Khánh Linh - VTI.D5</div>
            <div className="caption">
              "Cám ơn VTI đã cho em cơ hội làm việc tại công ty <br />
              và cám ơn các anh chị trong D5 đã giúp đỡ em rất nhiều ạ."
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
