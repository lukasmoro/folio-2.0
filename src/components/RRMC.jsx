import React from "react";
import DayDate from "./DayDate.jsx";

function RRMC() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Rolls-Royce Motorcars · Prototyping Luxury Virtual Experiences.</h1>
        <p className="spacer">⌘</p>
        <video
            className="banner"
            src="img/work/rrmc/rrmcthumbnail.mp4"
            alt=""
            controls={false}
            autoPlay={true}
            loop={false}
            muted={true}
            playsInline={true}
          />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">HDRP</li><li className="tool">ARDUINO</li><li className="tool">BLENDER</li><li className="tool">VIVE</li><li className="tool">STEAM VR</li><li className="tool">AUTOMOTIVE SOC</li></ul>
        <ul className='process'>
          <li>Duration: 13 Months, Summer 2022 - Autumn 2023</li>
          <li>Collaboration Partner: None</li>
          <li>Team: Rolls-Royce Bespoke Design</li>
          <li>Contribution: Prototyper Internship & Freelance Work</li>
        </ul>
        <h2>In-Short</h2>
        <p>
          At Rolls-Royce Motorcars I worked on bespoke virtual experiences and helped to define processes and system-architecture in close collaboration with engineering and design. 
          I prototyped virtual experiences for general purpose operating systems and embedded systems.
        </p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
          >
            ↳ Rolls-Royce Motorcars
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.rolls-roycemotorcars.com/en_GB/bespoke/private-collection-cars/phantom-scintilla.html"
          >
            ↳ Phantom Scintilla
          </a>
          <h2>Developing Toolchains for Bespoke Digital Experiences</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis corporis ab sit velit! Exercitationem, quia. Quod, fugit incidunt quisquam ullam dolorum quibusdam perspiciatis pariatur dolore perferendis ipsa numquam temporibus!</p>
          <h2>Prototypes for Cullinan</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis corporis ab sit velit! Exercitationem, quia. Quod, fugit incidunt quisquam ullam dolorum quibusdam perspiciatis pariatur dolore perferendis ipsa numquam temporibus!</p>
          <h2>Prototypes for Spectre</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis corporis ab sit velit! Exercitationem, quia. Quod, fugit incidunt quisquam ullam dolorum quibusdam perspiciatis pariatur dolore perferendis ipsa numquam temporibus!</p>
          <h2>Phantom Scintilla Headliner Animation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis corporis ab sit velit! Exercitationem, quia. Quod, fugit incidunt quisquam ullam dolorum quibusdam perspiciatis pariatur dolore perferendis ipsa numquam temporibus!</p>
          <div className="grid">
              <div className="row">
                <img className="col" src="img/work/rrmc/P90564796_lowRes_phantom-scintilla-st.jpg"></img>
              </div>
          </div>
          <h2>Outcome & Learnings</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis corporis ab sit velit! Exercitationem, quia. Quod, fugit incidunt quisquam ullam dolorum quibusdam perspiciatis pariatur dolore perferendis ipsa numquam temporibus!</p>
          <div className="grid">
              <div className="row">
                <img className="col" src="img/work/rrmc/rrmc1.png"></img>
                <img className="col" src="img/work/rrmc/rrmc2.png"></img>
              </div>
          </div>
        </div>
          <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default RRMC;
