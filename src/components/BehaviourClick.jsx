import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const BehaviourClick = ({children}) => {
  
  const [clicked, setClicked] = useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: clicked ? `translateY(-8px)` : `translateY(0px)`,
    config: {
      tension: 500,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!clicked) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setClicked(false);
    }, 150);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [clicked]);

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
