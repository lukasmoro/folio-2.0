import React, { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import './Carousel.css';

function parseRss(xml) {
  try {
    const xmlDoc = new DOMParser().parseFromString(xml, 'text/xml');
    const firstItem = xmlDoc.querySelector('item');

    if (!firstItem) {
      console.log('No items found in RSS feed');
      return null;
    }

    const item = {
      mp3: firstItem.querySelector('enclosure').getAttribute('url'),
      image: xmlDoc.querySelector('url').childNodes[0].nodeValue,
      author: firstItem.querySelector('author').childNodes[0].nodeValue,
      title: xmlDoc.querySelector('title').childNodes[0].nodeValue,
      episode: firstItem.querySelector('title').childNodes[0].nodeValue,
    };

    return item;
  } catch (err) {
    console.log('Error parsing RSS feed: ', err);
    return null;
  }
}

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [isBlurVisible, setIsBlurVisible] = useState(false);
//   const [indicatorIndex, setActiveIndicatorIndex] = useState(0);

  const handleClick = () => {
    setIsBlurVisible((prevIsBlurVisible) => !prevIsBlurVisible);
  };

  useEffect(() => {
    const storedUrls = sessionStorage.getItem('newUrls');
    
    if (!storedUrls) {
      return;
    }
  
    const newUrls = JSON.parse(storedUrls).map((newUrl) => newUrl.text);
  
    Promise.all(newUrls.map((url) => fetch(url)))
      .then((responses) => Promise.all(responses.map((r) => r.text())))
      .then((xmlStrings) => {
        const firstPodcasts = xmlStrings.map(parseRss);
        setItems(firstPodcasts);
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div className='carousel-container'>
      <ul id="parent-container" className={`carousel-cards ${isBlurVisible ? 'visible' : ''}`}>
          {items.map(
            (podcast, index) =>
              podcast && (
                <li key={index} className="carousel-item">
                <div className='carousel-header'>
                  <h2 className='carousel-podcast-episode'>{podcast.episode}</h2>
                  </div>
                  <img className='carousel-cover' src={podcast.image} alt={podcast.title} />
                    < AudioPlayer src={podcast.mp3} handleClick={handleClick} />
                </li>
              )
          )}
      
      </ul>
    </div>
  );
};

export default Carousel;
