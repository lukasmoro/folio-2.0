import React from "react";
import Markdown from "markdown-to-jsx";
import { useResetScroll } from "./ResetScroll";
import { motion } from 'framer-motion';
import Thoughts from "../components/Data/listThought.json";
import "./Work.css";
import DayDate from "./DayDate";

function Thought() {
  useResetScroll();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "100vh" 
    },
    in: {
      opacity: 1,
      y: 0 
    },
    out: {
      opacity: 0,
      y: "-100vh" 
    }
  };
  
  return (
    <motion.div 
      className="container"   
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "tween", duration: 0.5 }}>
      <div className="text-block">
        <div>
          <DayDate />
          <h1> Writing.</h1>
          <p className="spacer">⌘</p>
          <p>
            Writing about my thoughts. If you want to have a chat feel free to <br />{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="mailto:lukas.moro@me.com"
            >
              ↳ reach out
            </a>
            .
          </p>
          {Thoughts.map((item) => {
  // Split item.text into an array of strings separated by newline characters
  const paragraphs = item.text.split('\n').map((paragraph, index, array) => (
    // Wrap each string in a React Fragment, adding a <br /> after each one except the last
    <React.Fragment key={index}>
      {paragraph}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div key={item.id}>
      <div className="line"></div>
      <ul className="thought-data">
        <li className="thought-data-item add-info">{item.date}</li>
        <li className="thought-data-item add-info">
          {item.location}
        </li>
      </ul>
      <h2>{item.header}</h2>
      {/* Render paragraphs with line breaks */}
      <p>{paragraphs}</p>
      <div className="footnote-container">
        {Object.entries(item.resource).map(([key, value], index, array) => (
          <React.Fragment key={key}>
            <p className="footnote" href={value} target="_blank" rel="noopener noreferrer">{value}</p>
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
})}

        </div>
      </div>
    </motion.div>
  );
}

export default Thought;
