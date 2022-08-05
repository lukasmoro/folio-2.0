import React from "react";
import BigContainer from "./BigContainer";
import Description from "./DescriptionWork";
import "./Work.css";

function Work() {
  return (
    <body>
      <div className="container">
        <div className="text-block">
          <BigContainer />
          <p>
            My most recent work and explorations, which I use to broaden my
            horizon and learn tools that could be helpful for my work.
          </p>
          <div className="line"></div>
          <Description />
        </div>
      </div>
    </body>
  );
}

export default Work;
