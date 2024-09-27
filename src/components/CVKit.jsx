import React, { useEffect, useRef, useState } from 'react';
import DayDate from "./DayDate.jsx";

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

function CVKit() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
         CV Kit for Quest 3 · Unity Plugin for XR Hack.
        </h1>
        <p className="spacer">⌘</p>
        <img
            className="banner"
            src="img/work/sensorium/sensorium.jpg"
            alt="banner of sensorium"
          />
        <ul className="tools">
          <li className="tool">UNITY</li>
          <li className="tool">C#</li>
          <li className="tool">TCP/IP</li>
          <li className="tool">META PRESENCE PLATFORM</li>
          <li className="tool">PYTHON</li>
          <li className="tool">YOLO V8</li>
          <li className="tool">QUEST 3</li>
        </ul>
        <ul className='process'>
          <li>Duration: 1 Week, Summer 2024</li>
          <li>Collaboration Partner: XR Bootcamp, Supported by Meta</li>
          <li>Team: Individual Work</li>
          <li>Contribution: Idea, Developement & Design</li>
        </ul>
        <h2>In-Short</h2>
        <p>XR Bootcamp, together with many industry partners including Meta organised the XR Hack 2024, a hackathon carried out in London, Cologne, Stockholm and Cologne with over 3000 participants. <br /><br />I built an Unity plugin that helped the hackers to access the camera feed of their Quest 3 mixed reality headsets to run machine learning models on it for semantic input. This was implemented using Quest's casting functionality, OBS Python and TCP/IP to stream detections back into the headset.</p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1829487148078412019"
          >
            ↳ Github Repository
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro/led-display"
          >
            ↳ Tutorial for Hackers 
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro/led-display"
          >
            ↳ DevPost
          </a>
        </div>
          <h2>Implementation</h2>
          <p>The plugin works by casting the passthrough camera feed of Meta Quest 3 to OBS on Mac/PC to run ML models with Python on it (e.g. YOLO V8) and access the output via TCP/IP in Unity application for prototyping. In Unity the detection coordinates and classes are then mapped onto a UI canvas so they overlap the video feed ready for further use.</p>
          <h2>Outcome & Learning</h2>
          <p>The idea of having my little project as a starting point for a lot of other projects sounded really cool to me. During the hackathons I noticed though that I should have done more thourough testing in a similar environment like the hackathon as the secured network and its overload made the plugin's functionality inconsistent. </p>
          <p>ADD IMAGE: Mario Deutschmann's Winner App</p>
          <p>Nevertheless I was happy to hear that my plugin inspired the creators of the winner app in the utility and design category, Mario Deutschman, Till Ikeman, Akshay Rajesh and Justin Loose to build their project "Elephount", a mixed reality app that enables people to locate lost items in their apartement.</p>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default CVKit;
