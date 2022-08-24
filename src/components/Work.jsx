import React, { useState } from "react";
import ListItem from "./listWork";
import "./Work.css";

function Work() {
  const style = {
    color: "#898989",
  };
  const [image, setImage] = useState("https://placehold.jp/1920x1080.png");

  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }
  return (
    <body>
      <div className="container">
        <div className="text-block">
          <body>
            <img className="header-image" src={image} alt="" />
          </body>
          <p>
            Recent projects and explorations, I use to discover new stuff and
            learn tools that could be helpful for my work.
          </p>
          <div className="line"></div>
          <div>
            {ListItem.map((item) => {
              return (
                <div
                  className="item-work"
                  onMouseOver={handleMouseEnter(item.src)}
                >
                  <ul className="list-item" key={item.id}>
                    <li style={style} className="item">
                      {item.date}
                    </li>
                    <a href="" className="link">
                      <li className="item">{item.name}</li>
                    </a>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Work;
