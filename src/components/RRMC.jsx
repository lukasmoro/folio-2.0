import React from "react";
import DayDate from "./DayDate.jsx";

function RRMC() {
  
  return (
    <div className="container">
      <div className="text-block">

        <DayDate />

        <h1>Rolls-Royce Motorcars · Prototyping Luxury Virtual Experiences.</h1>

        <p className="spacer"></p>
        <p className="spacer"></p>

        <video className="banner" src="img/work/rrmc/rrmcthumbnail.mp4" alt="Banner of the Rolls-Royce Motorcars Project" controls={false} autoPlay={true} loop={false} muted={true} playsInline={true}/>
        
        <ul className="tools">
          <li className="tool">UNITY</li>
          <li className="tool">C#</li>
          <li className="tool">URP</li>
          <li className="tool">HDRP</li>
          <li className="tool">ARDUINO</li>
          <li className="tool">BLENDER</li>
          <li className="tool">VIVE</li>
          <li className="tool">STEAM VR</li>
          <li className="tool">AUTOMOTIVE SOC</li>
        </ul>

        <ul className='process'>
          <li>Duration: 13 Months, Summer 2022 - Autumn 2023</li>
          <li>Collaboration Partner: Rolls-Royce Motorcars</li>
          <li>Team: Rolls-Royce Bespoke Design</li>
          <li>Contribution: Prototyper Internship & Freelance Work</li>
        </ul>

        <h2>In-Short</h2>

        <p>Worked on multiple bespoke digital experiences and helped to define processes and system-architecture in close collaboration with engineering and design. Prototyped digital experiences for general purpose operating systems and embedded systems. Most of the work is under NDA unfortunately.</p>

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
        </div>
        
        <h2>Developing Toolchains for Bespoke Digital Experiences</h2>
        
        <p>Created a prototyping workflow for developing digital experiences in virtual reality for validation with material samples and color variations. Those virtual themes were deployed to run on a prototyping buck with real components. Helped developing digital themes in Unity that were running on an embedded system for validation and benchmarking. The themes themselves are under NDA.</p>
        
        <div className="grid">
            <div className="row">
              <img className="col" src="img/work/rrmc/rrmchmi.jpg" alt="Interior of Rolls-Royce Spectre"></img>
            </div>
        </div>

        <h2>Phantom Scintilla Headliner Animation</h2>
        
        <p>Developed animation sequences for the Starlight Headliner of Rolls-Royce Phantom Scintilla in Unity that are available in the car now.</p>
          
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/rrmc/P90564796_lowRes_phantom-scintilla-st.jpg" alt="Interior of Rolls-Royce Phantom Scintilla"></img>
          </div>
        </div>
        
        <h2>Outcome & Learnings</h2>
        
        <p>The time in Goodwood was formative for my perception of craft and execution. I developed a feeling for effective communication as a chainlink between engineering and design through prototyping. I am thankful for getting the opportunity to directly participate in a product-developement process that is foundational to future lines of products.</p>
        
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/rrmc/rrmc1.png" alt="Wishes from Anders Warming to Lukas Moro"></img>
            <img className="col" src="img/work/rrmc/rrmc2.png" alt="Lukas Moro in front of Rolls-Royce Facility in Goodwood"></img>
          </div>
        </div>
        
        <div className="bottom-work"></div>

      </div>
    </div>
  );
}

export default RRMC;
