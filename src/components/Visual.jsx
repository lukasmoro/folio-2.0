import React from "react";
// import BigContainer from "./BigContainer";
// import Description from "./DescriptionVisual";

// function Visual() {
//   return (
//     <div className="container">
//       <div className="text-block">
//         <BigContainer />
//         <Description />
//         <BigContainer />
//         <Description />
//         <BigContainer />
//         <Description />
//         <BigContainer />
//         <Description />
//         <BigContainer />
//         <Description />
//       </div>
//     </div>
//   );
// }

import Gallery from "react-photo-gallery";
import { Photos } from "./Photos";
import "./Visual.css";

function Visual() {
  return (
    <div className="image-container">
      <Gallery photos={Photos} direction={"column"} />
    </div>
  );
}

export default Visual;
