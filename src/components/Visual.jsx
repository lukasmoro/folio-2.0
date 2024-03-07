import React from 'react';
import DayDate from './DayDate';
import mediaData  from '../components/Data/listVisual.json';

const MediaElement = ({ type, src, alt, descriptions }) => {
  return (
    <div className="media-container">
      {type === 'video' ? (
        <video className="media" autoPlay loop muted playsInline src={src} alt={alt} />
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

  return (
      <div className='container'>
        <div className="text-block">
          <DayDate />
          <h1>Smaller explorations.</h1>
          <p className="spacer">⌘</p>
          <p>Exploring meaning and materiality of technologies and aesthetics through little side-projects exposed to my friends.</p>
          <div className="line"></div>
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
          <div className="bottom-work"></div>
        </div>
      </div>
      
  );
}

export default Visual;
