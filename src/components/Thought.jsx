import React from "react";
import DayDate from "./DayDate";

import Thoughts from "../components/Data/listWriting.json";

function Thought() {

  return (
    <div className="container">
      <div className="text-block">
        <div>
          <DayDate />
          <h1> Writing.</h1>
          <p className="spacer">⌘</p>
          <p>
            Writing about all kind of topics. If you want to have a chat please{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="mailto:lukas.moro@me.com"
            >
              reach out
            </a>
            .
          </p>
          
          {Thoughts.map((item) => {const paragraphs = item.text.split('\n').map((paragraph, index, array) => 
          (
              <React.Fragment key={index}>
                {paragraph}
                {index < array.length - 1 && <br />}
              </React.Fragment>
          ));

  return (
    <div key={item.id}>
      <div className="line"></div>
      <ul className="thought-data">
        <li className="thought-data-item add-info">{item.date}</li>
        <li className="thought-data-item add-info">
          {item.location}
        </li>
      </ul>
      <h2>{item.header}</h2>
      <p>{paragraphs}</p>
      <div className="citation-container">
        {Object.entries(item.resource).map(([key, value], index, array) => (
          <React.Fragment key={key}>
            <p className="citation" href={value} target="_blank" rel="noopener noreferrer">{value}</p>
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
})}

        </div>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Thought;
