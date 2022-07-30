import React from "react";
import BigContainer from "./BigContainer";

function Work() {
  return (
    <div className="container">
      <div className="text-block">
        <BigContainer />
        <h1>Recent projects {"&"} explorations </h1>
        <p>
          My most recent work and explorations, I use to extend my view and
          learn tools that could be helpful for my work.
        </p>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Work;
