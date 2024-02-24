import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const BehaviourClick = ({ jumpHeight = 10, timing = 150, children }) => {
  
  const [clicked, setClicked] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: clicked ? `translateY(-${jumpHeight}px)` : `translateY(0px)`,
    config: {
      tension: 300,
      friction: 10,
      stiffness: 550, 
      damping: 30
    },
  });

  useEffect(() => {
    if (!clicked) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setClicked(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [clicked, timing]);

  const trigger = () => {
    setClicked(true);
  };

  return (
    <animated.span onClick={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default BehaviourClick;
