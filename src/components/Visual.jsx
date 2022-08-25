import React from "react";
import Gallery from "react-photo-gallery";
import { Photos } from "./Photos";
import "./Visual.css";

function Visual() {
  return (
    <body>
      <Gallery photos={Photos} direction={"column"} />
    </body>
  );
}

export default Visual;
