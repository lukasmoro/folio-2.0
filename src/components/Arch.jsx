import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function Arch() {
  return (
    <div className="container">
      <div className="text-block">
          <DayDate />
          <h1>Arch · Healthroom for remote areas</h1>
          <p className="spacer">⌘</p>
          <img className="header-image" src="img/work/arch/arch1.png" alt="" />
          <p>
            Spatial computing for bridging the gap between doctor & patient in
            remote healthcare settings.

            This project is an exploration of how upcoming technologies might
            shape the future of remote healthcare consultation. The intention is
            not presenting this as a final concept but more as an inspiration
            for further explorations in this area. We believe that bridging
            remote situations through mixed reality is very promising and that
            accompanying tangible interfaces are a good way to emulate physical
            encounters and bring people closer together.
          </p>
          <p>
            
          </p>
          <div className="row">
            <div className="column">
              <h4>Contributions</h4>
              <p>
                CGI <br /> Research
                <br /> Prototyping
                <br /> Videomaking
              </p>
            </div>
            <div className="column">
              <h4>Information</h4>
              <p>
                10 weeks course <br /> Professional Product 1<br /> Region
                Västerbotten
              </p>
            </div>
            <div className="column">
              <h4>Team</h4>
              <p>
                Kay van den Aker
                <br /> Tianyi Wang <br /> Josie Reilley
              </p>
            </div>
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archsolution.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archhandshake.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archtransition.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archinteraction.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <iframe
            src="https://www.youtube.com/embed/8Zwa_QQow_Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="line"></div>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Od75MOOSzv4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-container">
            <video
              className="video"
              src="videos/archworkshop.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archuxprototype.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archui.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
      </div>
    </div>
  );
}

export default Arch;
