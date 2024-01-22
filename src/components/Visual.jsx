import React from 'react';
import { useResetScroll } from './ResetScroll';
import { motion } from 'framer-motion';
import DayDate from './DayDate';
import './Visual.css';
import mediaData  from '../components/Data/listVisual.json';

const pageVariants = {
  initial: { opacity: 0},
  in: { opacity: 1 },
  out: { opacity: 0},
};

const MediaElement = ({ type, src, alt, descriptions }) => {
  return (
    <div className="media-container">
      {type === 'video' ? (
        <video className="media" autoPlay loop muted src={src} alt={alt} />
      ) : (
        <img className="media" src={src} alt={alt} />
      )}
      <div className="description-overlay">
        {descriptions.map((descriptions, index) => (
          <span key={index} className="description-textbox">{descriptions}</span>
        ))}
      </div>
    </div>
  );
};

function Visual() {
  useResetScroll();

  return (
      <motion.div
        className="container"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <div className="text-block">
          <DayDate />
          <h1>Other explorations.</h1>
          <p className="spacer">⌘</p>
          <div className="grid">
            {mediaData.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((media, colIndex) => (
                  <div className="col" key={colIndex}>
                    <MediaElement type={media.type} src={media.src} alt={media.alt} descriptions={media.descriptions} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    
  );
}

export default Visual;
