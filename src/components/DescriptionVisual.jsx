import React from "react";
import ListItem from "./listVisual.json";

function DescriptionVisual() {
  return (
    <div>
      {ListItem.map((item) => {
        return (
          <ul className="list-item" key={item.id}>
            <li className="item">{item.date}</li>
            <a href="" className="link">
              <li className="item">{item.name}</li>
            </a>
          </ul>
        );
      })}
    </div>
  );
}

export default DescriptionVisual;
