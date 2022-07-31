import React from "react";
import BigContainer from "./BigContainer";
import ListItem from "./projectList.json";
import "./Work.css";

function Work() {
  return (
    <div className="container">
      <div className="text-block">
        <BigContainer />
        {/* <h1>Projects {"&"} Explorations </h1> */}
        <p>
          My most recent work and explorations, which I use to broaden my
          horizon and learn tools that could be helpful for my work.
        </p>
        <div className="line"></div>
        {ListItem.map((item) => {
          return (
            <ul className="list-item" key={item.id}>
              <li className="item">{item.date}</li>
              <a href="" className="link">
                <li className="item">{item.name}</li>
              </a>
              {/* <li className="item">{item.sideproject}</li> */}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
