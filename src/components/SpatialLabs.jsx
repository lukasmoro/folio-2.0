import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function SpatialLabs() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Spatial Labs · Protoyping for a more connected world</h1>
        <p className="spacer">⌘</p>

        <img
          className="header-image"
          src="img/work/placeholderarch.png"
          alt=""
        />
        <p>
          During my time consulting for Spatial Labs I was working on multiple projects including game-ready avatars, CGI for their corporate identity and Spark Studio filters. 
        </p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/category/extensions?hl=de"
          >
            ↳ Spatial Labs
          </a>
          </div>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://techcrunch.com/2023/01/26/spatial-labs-a-web3-infrastructure-and-hardware-company-closes-10m-seed-round/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAACUTtc3yiR1Zj9_yo9fuJrrYvjYCQcXvJHhd8ZXaLJXlXT_QkKQcEcrWGgX8YlRuo6rcv00Bn2hrG-V-RyGfQf0nc29Is8sgNnnuxp7vg6dvw5q_LQIkrdAhZMYicnAWhkmahlLjn99THNQHxXiAfdhRGBclzVUDmupyqOK67dHm"
          >
            ↳ TechCrunch
          </a>
          </div>
      </div>
    </div>
  );
}

export default SpatialLabs;
