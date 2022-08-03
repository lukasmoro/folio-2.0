import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const BehaviourHover = ({ rotation = 0, timing = 150, children }) => {
  const [hovered, setHovered] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: hovered ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!hovered) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setHovered(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [hovered, timing]);
  const trigger = () => {
    setHovered(true);
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default BehaviourHover;
