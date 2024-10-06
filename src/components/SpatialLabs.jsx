import React from "react";
import DayDate from "./DayDate.jsx";

function SpatialLabs() {
  
  return (
    <div className="container">
      <div className="text-block">

        <DayDate />

        <h1>Spatial Labs · NFC Tags for a more Connected World.</h1>
        
        <p className="spacer">⌘</p>
        
        <video className="banner" src="img/work/spatiallabs/slabs1.mp4" alt="Banner of the Spatial Labs Project by Lukas Moro" controls={false} autoPlay={true} loop={false} muted={true} playsInline={true}/>
        
        <ul className="tools">
          <li className="tool">BLENDER</li>
          <li className="tool">REACT-THREE-FIBER</li>
          <li className="tool">SPARK AR</li>
          <li className="tool">RHINO 3D</li>
        </ul>

        <ul className="process">
          <li>Duration: 9 months, Autumn 2022 - Autumn 2023</li>
          <li>Collaboration Partner: None</li>
          <li>Team: Spatial Labs Design Team</li>
          <li>Contribution: CGI, Poly-Modeller & Prototyper Freelance Work</li>
        </ul>

        <h2>In-Short</h2>

        <p>During my time consulting for Spatial Labs I worked on multiple projects including a game-ready set of avatars, CGI for the corporate identity and Spark Studio filters. Much of the work is under NDA.</p>
        
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

        <h2>Avatar Configurator for LNQ Platform</h2>
        
        <p>Designed, modeled, textured and animated a range of avatar's and assets for the core platform together with the engineering team.</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/spatiallabs/slabs4.mp4" autoPlay muted loop playsInline alt="Spatial Labs Avatar Configurator for LNQ Platform"></video>
          </div>
        </div>
        
        <h2>Motion Design & CGI for Website</h2>
        
        <p>Together with <a href="">Hunter Martin</a> we designed the corporate homepage for the first launch. Created many different motion designs of the products for scrollable animations.</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/spatiallabs/slabs2.mp4" autoPlay muted loop playsInline alt="Spatial Labs Visualisation in Blender by Lukas Moro"></video>
            <video className="col" src="img/work/spatiallabs/slabs3.mp4" autoPlay muted loop playsInline alt="Spatial Labs Visualisation in Blender by Lukas Moro"></video>
          </div>
        </div>
        
        <h2>Orb AR Filters in Spark AR</h2>
        
        <p>Developed AR filters in Spark AR and web-applications for them in React Three Fiber for a collection of clothing.</p>
        
        <div className="grid">
          <div className="row">
            <video className="centered-col" src="img/grid/orb.mp4" autoPlay muted loop playsInline alt="Spatial Labs Orb Augmented Reality Filter in Spark AR by Lukas Moro"></video>
          </div>
        </div>

        <h2>Industrial Design</h2>

        <p>Involved in multiple products industrial design. Incuding the LNQ Core 1 badge.</p>

        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/spatiallabs/iddris.jpg" alt="Spatial Labs Iddris Sandu & Lukas Moro at Nobu Hotel London"></img>
            <img className="col" src="img/preview/slabscovernew.png" alt="Spatial Labs Industrial Design of Core1 Tag by Lukas Moro"></img>
          </div>
        </div>

        <h2>Outcome & Learnings</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo perferendis tenetur deleniti esse, veritatis vitae. Autem velit commodi maiores asperiores possimus, ab odit, tempore fuga explicabo rerum non sit labore.</p>
        
        <div className="bottom-work"></div>

      </div>
    </div>
  );
}

export default SpatialLabs;
