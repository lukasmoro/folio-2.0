import React from "react";
import DayDate from "./DayDate";
import "./Me.css";

function Me() {
  return (
    <div className="container">
      <div className="text-block">
        <body>
          <DayDate />
          <h1>Hello, I am Lukas Moro.</h1>
          <p className="spacer">⌘</p>
          <p> <i>I think through making.</i> I am a prototyper, sketching and tinkering new interfaces with bits and atoms.</p>
          <p>
            My work revolves around building applications for ambient and spatial computing to
            harmonise our relationship with technology and integrate the
            virtual aspects of our lives better into one common reality.
          </p>
          <p>
            Previously, I worked for{" "}
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Rolls-Royce Motorcars
            </a>, 
            <a
              href="https://www.slabs.one"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Spatial Labs
            </a> and
            <a
              href="https://www.alfredo-haeberli.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Studio Alfredo Häberli
            </a>
            . <br />Currently I finish my master in Interaction Design at
            <a
              href="https://www.dh.umu.se/en/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Umeå Institute of Design
            </a>
            .
          </p>
          <div className="line"></div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://read.cv/moro"
            >
              ↳ Read CV
            </a>
          </div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Lukas_Moro"
            >
              ↳ Twitter
            </a>
          </div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/lukas_moro/"
            >
              ↳ Instagram
            </a>
          </div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/lukasmoro"
            >
              ↳ GitHub
            </a>
          </div>
          <div className="socials">
            <a className="link" href="mailto:lukas.moro@me.com">
              ↳ Email
            </a>
          </div>
        </body>
      </div>
    </div>
  );
}

export default Me;
