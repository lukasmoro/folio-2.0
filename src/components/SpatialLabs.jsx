import React from "react";
import DayDate from "./DayDate.jsx";

function SpatialLabs() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Spatial Labs · Protoyping for a more Connected World.</h1>
        <p className="spacer">⌘</p>
        <video
            className="banner"
            src="img/work/spatiallabs/slabs1.mp4"
            alt=""
            controls={false}
            autoPlay={true}
            loop={false}
            muted={true}
            playsInline={true}
          />
          <ul className='process'>
            <li>Duration: 9 months, Autumn 2022 - Autumn 2023</li>
            <li>Collaboration Partner: None</li>
            <li>Team: Spatial Labs Design Team</li>
            <li>Contribution: CGI, Poly-Modeller & Prototyper Freelance Work</li>
          </ul>
        <h2>In-Short</h2>
        <p>
          During my time consulting for Spatial Labs I worked on multiple projects including a game-ready set of avatars, CGI for the corporate identity and Spark Studio filters. 
        </p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.slabs.one"
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
        <h2>Outcome & Learnings</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis tenetur deleniti esse, veritatis vitae. Autem velit commodi maiores asperiores possimus, ab odit, tempore fuga explicabo rerum non sit labore.</p>
          <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default SpatialLabs;
