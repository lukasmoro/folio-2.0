import React, { useEffect, useRef, useState } from 'react';
import DayDate from "./DayDate.jsx";

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
            src=""
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
          <p>XR Bootcamp, together with many industry partners including Meta organised the XR Hack 2024, a hackathon carried out in London, Cologne, Stockholm and Cologne with over 3000 participants. </p>
          <p className="block-quote">An Unity plugin that helped the hackers to access the camera feed of their Quest 3 mixed reality headsets to run machine learning models on it for semantic input. This was implemented using Quest's casting functionality, OBS, Python and TCP/IP to stream detections back into the headset.</p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro/cameraaccess-metaquest"
          >
            ↳ Github Repository
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://xr-hack-cologne.devpost.com/project-gallery"
          >
            ↳ DevPost
          </a>
        </div>
          <h2>Implementation</h2>
          <p>The plugin works by casting the passthrough camera feed of Meta Quest 3 to OBS on Mac/PC to run ML models with Python on it (e.g. YOLO V8) and access the output via TCP/IP in Unity application for prototyping. In Unity the detection coordinates and classes are then mapped onto a UI canvas so they overlap the video feed ready for further use.</p>
          <iframe width="600" height="315" src="https://www.youtube.com/embed/MA8xKWMjkYI?si=FFtzBgmcbqYPm5Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h2>Outcome & Learning</h2>
          <p>The idea of having my little project as a starting point for a lot of other projects sounded really cool to me. During the hackathons I noticed though that I should have done more thourough testing in a similar environment like the hackathon as the secured network and its overload made the plugin's functionality inconsistent. </p>
          <div className='grid'>
            <div className='row'>
              <img className='col' src="" alt="" />
              <img className='col' src="" alt="" />
            </div>
          </div>
          <p>Nevertheless I was happy to hear that my plugin inspired the creators of the winner app in the utility and design category, Mario Deutschman, Till Ikeman, Akshay Rajesh and Justin Loose to build their project "Elephount", a mixed reality app that enables people to locate lost items in their apartement.</p>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default CVKit;
