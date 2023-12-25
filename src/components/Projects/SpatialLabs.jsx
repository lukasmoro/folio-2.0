import React from "react";
import "./Projects.css";
import DayDate from "/Users/lukasmoro/Documents/React/folio-2.0/folio-2.0/src/components/DayDate.jsx";

function SpatialLabs() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>SpatialLabs · Protoyping for a more connected world</h1>
        <p className="spacer">⌘</p>

        <img
          className="header-image"
          src="img/work/placeholderarch.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio id, pariatur facilis quam libero itaque quasi ad cupiditate tempore esse molestiae beatae obcaecati corrupti sed nemo mollitia perspiciatis similique.
        </p>
      </div>
    </div>
  );
}

export default SpatialLabs;
