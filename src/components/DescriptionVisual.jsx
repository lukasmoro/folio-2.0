import React from "react";
import ListItem from "./listVisual.json";

function DescriptionVisual() {
  const style = {
    color: "#898989",
  };
  return (
    <div>
      {ListItem.map((item) => {
        return (
          <ul className="list-item" key={item.id}>
            <li style={style} className="item">
              {item.date}
            </li>
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
