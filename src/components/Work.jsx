import React, { useState, useLocation } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ListItem from "../components/Data/listWork";
import DayDate from "./DayDate";
import "./Work.css";

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
            <DayDate />
            <h1>Mostly side-projects.</h1>
            <p className="spacer">⌘</p>
            <img
              className="header-image"
              src={image}
              alt="Sorry, something went wrong."
            />
          </body>

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
        </div>
      </div>
    </body>
  );
}

export default Work;
