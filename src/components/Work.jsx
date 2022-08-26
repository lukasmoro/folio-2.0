import React, { useState, useLocation } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ListItem from "./listWork";
import "./Work.css";

//Components
import Arch from "./Arch";

function Work() {
  const style = {
    color: "#898989",
  };
  const [image, setImage] = useState("https://placehold.jp/1920x1080.png");

  function handleMouseState(imagePath) {
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

          <a>
            {ListItem.map((item) => {
              return (
                <Link
                  to={item.to}
                  className="item-work"
                  onMouseOver={handleMouseState(item.src)}
                  onMouseOut={handleMouseState(
                    "https://placehold.jp/1920x1080.png"
                  )}
                >
                  <ul className="list-item" key={item.id}>
                    <li style={style} className="item">
                      {item.date}
                    </li>
                    <a href="" className="link">
                      <li className="item">{item.name}</li>
                    </a>
                  </ul>
                </Link>
              );
            })}
          </a>

          <Routes>
            <Route path="/arch" element={<Arch />} />
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default Work;
