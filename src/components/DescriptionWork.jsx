import React from "react";
import ListItem from "./listWork.json";

function DescriptionWork() {
  const style = {
    color: "#898989",
  };
  return (
    <div>
      {ListItem.map((item) => {
        return (
          <div className="item-work">
            <ul className="list-item" key={item.id}>
              <li style={style} className="item">
                {item.date}
              </li>
              <a href="" className="link">
                <li className="item">{item.name}</li>
              </a>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default DescriptionWork;
