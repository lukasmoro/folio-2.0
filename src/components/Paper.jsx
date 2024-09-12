import React, { useEffect, useRef, useState } from 'react';
import DayDate from "./DayDate.jsx";
import mediaData from './Data/listPresence.json';

const LazyVideo = ({ src, alt, autoPlay, loop, muted, playsInline }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="media"
      src={isVisible ? src : ''}
      alt={alt}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
    />
  );
};

const MediaElement = ({ type, src, alt, descriptions }) => {
  return (
    <div className="media-container">
      {type === 'video' ? (
        <LazyVideo
          src={src}
          alt={alt}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        />
      ) : (
        <img className="media" src={src} alt={alt} />
      )}
      <div className="description-overlay">
        {descriptions.map((description, index) => (
          <span key={index} className="description-textbox">{description}</span>
        ))}
      </div>
    </div>
  );
};

function Paper() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          "Feels Like Paper!" · Exploring Interfaces with Technology and Paper.
        </h1>
        <p className="spacer">⌘</p>
        <video
          className="banner"
          src=""
          alt=""
          controls
          autoPlay
          loop
          muted
          playsInline
        />
        <ul className="tools">
          <li className="tool">UNITY</li>
          <li className="tool">C#</li>
          <li className="tool">URP</li>
          <li className="tool">TCP/IP</li>
          <li className="tool">META PRESENCE PLATFORM</li>
          <li className="tool">PYTHON</li>
          <li className="tool">APPLE VISION FRAMEWORK</li>
          <li className="tool">OPENAI API</li>
          <li className="tool">QUEST 3</li>
        </ul>
        <ul className='process'>
        <li>Duration: 2 Weeks, Summer 2024</li>
          <li>Collaboration Partner: None</li>
          <li>Team: Individual Work</li>
          <li>Contribution: Idea, Design & Developement</li>
        </ul>
        <h2>In-Short</h2>
        <p>
          "Feels Like Paper!" is a series of prototypes about augmenting physical paper. Technologies like optical character recognition, GPT-4o, raycasts on Meta's effect mesh, ... are used to give physical paper and ink properties of the digital world without compromising on their traits we appreciate since centuries. 
        </p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1829487148078412019"
          >
            ↳ Tweet for "Maths & Questions" Prototype
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1829487148078412019"
          >
            ↳ Tweet for "Mark & Comment" Prototype 
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1829487148078412019"
          >
            ↳ Tweet for "Draw" Prototype 
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1829487148078412019"
          >
            ↳ Tweet for "Origami" Prototype 
          </a>
        </div>
        <h2>Concept</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis corrupti eos accusantium adipisci, harum repellendus ad odit unde et cum nam reprehenderit, est voluptate vitae laboriosam nulla obcaecati quam!</p>
        <h2>Process</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quae et cum molestias magni rerum vero, enim esse vitae soluta? Autem adipisci porro consequatur voluptatem sequi dignissimos asperiores non ex?</p>
        <h2>Inspiration</h2>
          <p>ADD INFOGRAPHIC: Programming Behaviour --- Augmenting Information & Ubiquitous --- Immersive</p>
          <p>Dynamicland, Programmable Ink, Math Notes...</p>
        <h2>Design</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus enim facilis adipisci culpa fuga totam soluta nulla quos, nihil iste nisi dolores eaque ut temporibus maxime eius nesciunt! Rem, fuga.</p>
        <h2>"Maths & Questions" Prototype</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex incidunt, modi doloremque eligendi saepe? Fugit eligendi obcaecati quis reprehenderit consequatur placeat magnam magni, perferendis minima debitis nulla earum ratione.</p>
          <p>ADD VIDEO: "Maths & Questions" Prototype</p>
          <p>Short Text about OCR & API request</p>
          <p>ADD IMAGES: Python Console</p>
          <p>Short Text about Digital Handwriting</p>
          <p>ADD IMAGES: Linerenderer Handwriting</p>
          <p>Short Text about Spatial Anchoring with Raycast</p>
          <p>ADD IMAGES: Spatial Anchor</p>
        <h2>"Mark & Comment" Prototype</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex incidunt, modi doloremque eligendi saepe? Fugit eligendi obcaecati quis reprehenderit consequatur placeat magnam magni, perferendis minima debitis nulla earum ratione.</p>
          <p>ADD VIDEO: "Mark & Comment" Prototype</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
        <h2>"Draw" Prototype</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex incidunt, modi doloremque eligendi saepe? Fugit eligendi obcaecati quis reprehenderit consequatur placeat magnam magni, perferendis minima debitis nulla earum ratione.</p>
          <p>ADD VIDEO: "Draw" Prototype</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
        <h2>"Origami" Prototype</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex incidunt, modi doloremque eligendi saepe? Fugit eligendi obcaecati quis reprehenderit consequatur placeat magnam magni, perferendis minima debitis nulla earum ratione.</p>
          <p>ADD VIDEO: "Origami" Prototype</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
          <p>Short Text</p>
          <p>ADD IMAGES</p>
        <h2>Outcome & Learning</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, doloremque nostrum maxime rem accusamus, vel saepe consectetur ullam soluta obcaecati sed recusandae optio vitae error esse cumque reiciendis, reprehenderit repellendus.</p>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Paper;
