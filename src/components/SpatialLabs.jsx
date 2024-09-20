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
        <h2>Avatar Configurator for Platform</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod quo, cupiditate esse eos, minus consectetur recusandae consequuntur laboriosam ipsam non soluta possimus sequi illum eligendi fugit rem architecto sunt.</p>
        <div className="grid">
          <div className="row">
                <video className="col" src="img/work/spatiallabs/slabs4.mp4" autoPlay muted loop playsInline></video>
          </div>
        </div>
        <h2>Motion Design & CGI for Website</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo illo suscipit aliquam rem? Ab illum error nobis voluptas! Hic laudantium, in asperiores velit quod dolorem. Aperiam odio animi assumenda modi.</p>
        <div className="grid">
          <div className="row">
                <video className="col" src="img/work/spatiallabs/slabs2.mp4" autoPlay muted loop playsInline></video>
                <video className="col" src="img/work/spatiallabs/slabs3.mp4" autoPlay muted loop playsInline></video>
          </div>
        </div>
        <h2>AR Filters</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, earum autem. Inventore ex fugiat harum aspernatur consequatur, iure quidem veniam voluptatem molestiae veritatis enim? Soluta dolorum rem assumenda. Veniam, accusamus!</p>
        <div className="grid">
          <div className="row">
                <video className="centered-col" src="img/grid/orb.mp4" autoPlay muted loop playsInline></video>
          </div>
        </div>
        <h2>Industrial Design</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et exercitationem tenetur vero similique sequi minima blanditiis non hic maxime cum obcaecati perferendis id eligendi iusto amet dolorum, voluptas porro?</p>
        <div className="grid">
          <div className="row">
                <img className="col" src="img/work/spatiallabs/iddris.jpg"></img>
                <img className="col" src="img/preview/slabscovernew.png"></img>
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
