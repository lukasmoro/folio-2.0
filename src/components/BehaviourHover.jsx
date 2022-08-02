import React, { useState, useEffect } from "react";

const BehaviourHover = ({ rotation = 0, timing = 150, children }) => {
  const [hovered, setIsHovered] = useState(false);
  const style = {
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: hovered ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };
  useEffect(() => {
    if (!hovered) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsHovered(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hovered, timing]);
  const trigger = () => {
    setIsHovered(true);
  };
  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};

export default BehaviourHover;
