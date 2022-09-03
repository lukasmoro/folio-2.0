import React from "react";
import "./Projects.css";
import ListItem from "/Users/lukasmoro/Desktop/Portfolio 2.0/folio-2.0/src/components/Data/listWork.json";

function Arch() {
  return (
    <div className="container">
      <div className="text-block">
        <div>
          {ListItem.map((item) => {
            return <img className="header-image" src={item.src} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Arch;
