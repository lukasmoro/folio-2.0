import React from "react";
import Thoughts from "./listThought.json";
import "./Work.css";
import DayDate from "./DayDate";

function Thought() {
  return (
    <body>
      <div className="container">
        <div className="text-block">
          <div>
            <DayDate />
            <h1>Thoughts in reverse chronological order.</h1>
            <p>
              Opinions on work and life-related matter. I do not claim truth nor
              completeness at any time.
            </p>
            {Thoughts.map((item) => {
              return (
                <div>
                  <div className="line"></div>
                  <ul className="thought-data" key={item.id}>
                    <li className="thought-data-item add-info">{item.date}</li>
                    <li className="thought-data-item add-info">
                      {item.location}
                    </li>
                  </ul>
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                  <p className="footnote">{item.resource.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Thought;
