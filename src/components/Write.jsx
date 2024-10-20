import React from "react";
import DayDate from "./DayDate";
import Thoughts from "./Data/listWriting.json";

function Write() {

  return (
    
    <div className="container">
      <div className="text-block">
        <div>

          <DayDate />

          <h1>Essays.</h1>

          <p className="spacer"></p>

          <p>Writing as a way of making vague thoughts a bit more concrete in the process.<br />If you want to share thoughts on design or technology related matter, {" "}<a className="link" target="_blank" rel="noreferrer" href="mailto:lukas.moro@me.com">let's chat</a>.</p>
          
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
                <li className="thought-data-item add-info">{item.location}</li>
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

export default Write;
