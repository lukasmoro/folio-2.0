import React, { useState } from "react";

function DayDate() {
  let date = new Date().toLocaleDateString();
  let now = new Date().toLocaleTimeString();
  let [time, updateTime] = useState(now);

  function clock() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }

  setInterval(clock, 1000);

  return (
    <p className="add-info">
      {date} · {time}
    </p>
  );
}

export default DayDate;
