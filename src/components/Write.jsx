import React from "react";
import DayDate from "./DayDate";
import Thoughts from "./Data/listWriting.json";

function Write() {
  const renderTextWithSubheaders = (text) => {
    return text.split("\n\n").map((block, index) => {
      if (block.startsWith("##")) {
        return (
          <h3 key={index}>
            {block.replace("##", "").trim()}
          </h3>
        );
      } else {
        return (
          <p key={index}>
            {block.split("\n").map((line, lineIndex, array) => (
              <React.Fragment key={lineIndex}>
                {line}
                {lineIndex < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      }
    });
  };

  return (
    <div className="container">
      <div className="text-block">
        <div>
          <DayDate />

          <h1>Essays</h1>

          <p className="spacer"></p>

          <p>
            Writing as a way of making vague thoughts a bit more concrete in the process.
            <br />
            If you want to share thoughts on design or technology related matter,{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="mailto:lukas.moro@me.com"
            >
              let's chat
            </a>.
          </p>

          {Thoughts.map((item) => (
            <div key={item.id}>
              <div className="line"></div>

              <ul className="thought-data">
                <li className="thought-data-item add-info">{item.date}</li>
                <li className="thought-data-item add-info">{item.location}</li>
              </ul>

              <h2>{item.header}</h2>

              <div>{renderTextWithSubheaders(item.text)}</div>

              <div className="citation-container">
                {Object.entries(item.resource).map(([key, value]) => (
                  <p
                    key={key}
                    className="citation"
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Write;
