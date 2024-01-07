import React from "react";
import { useResetScroll } from "./ResetScroll";
import TriggerRouteChange from "./TriggerRouteChange";
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
    <TriggerRouteChange navigateToTop={'/play'} navigateToBottom={'/me'}>
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
          <h1>Writing, in reverse chronological order.</h1>
          <p className="spacer">⌘</p>
          <p>
            Opinions on work and life-related matter. If you have any questions
            or suggestions feel free to <br />{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Lukas_Moro"
            >
              ↳ reach out
            </a>
            .
          </p>
          {Thoughts.map((item) => {
            return (
              <div>
                <div className="line"></div>
                <ul className="thought-data" key={item.id}>
                  <li className="thought-data-item add-info">{item.date}</li>
                  <li className="thought-data-item add-info">
                    {item.location}
                  </li>
                </ul>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
                <p className="footnote">{item.resource.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
    </TriggerRouteChange>
  );
}

export default Thought;
