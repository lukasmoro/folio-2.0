import React from "react";
import BigContainer from "./BigContainer";
import Description from "./DescriptionVisual";

function Visual() {
  return (
    <div className="container">
      <div className="text-block">
        <BigContainer />
        <Description />
        <BigContainer />
        <Description />
        <BigContainer />
        <Description />
        <BigContainer />
        <Description />
        <BigContainer />
        <Description />
      </div>
    </div>
  );
}

export default Visual;
