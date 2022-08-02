import React from "react";
import ListItem from "./listWork.json";

function DescriptionWork() {
  return (
    <div>
      {ListItem.map((item) => {
        return (
          <div className="item-work">
            <ul className="list-item" key={item.id}>
              <li className="item">{item.date}</li>
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
