import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import './Searchbar.css'

function Searchbar(props) {
  const [input, setInput] = useState('');
  const [hover, setHover] = useState(false);

  const addButtonSpring = useSpring({
    width: hover ? '5rem' : '3rem',
    scaleY: hover ? 1.1 : 1,
    config: {
      tension: 500,
      friction: 20,
    },
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      key: new Date().getTime(),
      text: input,
    });
    setInput('');
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        placeholder="Enter your RSS-feed here!"
        value={input}
        onChange={handleChange}
        name="text"
      />
      <animated.button
        className={`submit ${hover ? 'hovered' : ''}`}
        onClick={handleSubmit}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: addButtonSpring.width,
        }}
      >
        {hover ? 'Submit' : 'Add'}
      </animated.button>
    </form>
  );
}

export default Searchbar;
