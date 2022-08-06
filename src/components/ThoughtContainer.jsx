import React from "react";
import Thought from "./listThought.json";
import "./Work.css";
import "./Thought.css";

function ThoughtContainer() {
  return (
    <body>
      <div className="container">
        <div className="text-block">
          <div>
            <h1>A collection of my thoughts in reverse chronological order.</h1>
            <p>
              It is a representation of my opinions and perceptions on work and
              life-related matter. I try my best to post weekly sometimes I
              succeed sometimes I do not. I do not claim truth nor completeness
              at any time.
            </p>
            {Thought.map((item) => {
              return (
                <div>
                  <div className="line"></div>
                  <ul className="thought-data" key={item.id}>
                    <li className="thought-data-item">{item.date}</li>
                    <li className="thought-data-item">{item.location}</li>
                  </ul>
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </body>
  );
}

export default ThoughtContainer;

{
  /* <ul className="list-item" key={item.id}>
            <li style={style} className="item">
              {item.date}
            </li>
            <a href="" className="link">
              <li className="item">{item.name}</li>
            </a>
          </ul> */
}
