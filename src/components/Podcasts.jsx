import React from "react";
import DayDate from "./DayDate.jsx";
// import List from "./List.jsx";
// import Carousel from "./Carousel.jsx";

function Podcasts() {
  
  return (
    <div className="container">
      <div className="text-block">
        
        <DayDate />
        
        <h1>Podcasts for Chrome · From RSS-Feed into the new Tab.</h1>
        
        <p className="spacer">⌘</p>
        
        <video className="banner" src="img/work/podcasts/podcasts.mp4" alt="Banner of the Podcast for Chrome Project by Lukas Moro" controls={false} autoPlay={true} loop={true} muted={true} playsInline={true}/>

        <ul className="tools">
          <li className="tool">REACT</li>
          <li className="tool">WEBPACK</li>
          <li className="tool">CSS</li>
          <li className="tool">XML</li>
          <li className="tool">REACT-SPRING</li>
          <li className="tool">PRODUCT THINKING</li>
        </ul>
        
        <ul className='process'>
          <li>Duration: 3 Months, Winter 2023</li>
          <li>Collaboration Partner: None</li>
          <li>Team: Individual Project</li>
          <li>Contribution: Product-Thinking, Design & Software Developement</li>
        </ul>

        <h2>In-Short</h2>
        
        <p>An extension for Google Chrome that enables adding podcast's RSS-feed URLs in the pop-up or options context and playing them from a player in the new tab. Enjoy podcasts by focusing on your top five favorites, which helps to save time and decision-making. The extension is open sourced and hosted on GitHub.</p>
        
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro/podcasts-chrome-extension"
          >
            ↳ GitHub Repository
          </a>
        </div>

        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chromewebstore.google.com/detail/podcasts/hhfplheehgopoocbgdblkhajbgmolglb"
          >
            ↳ Chrome Web Store
          </a>
        </div>

        <h2>Concept & Goal</h2>

        <p>I enjoy listening to podcasts but picking the right one can be an endless process that results in me wasting a lot of time and usually ending up with one of the same five podcasts I always listen to. Bridging this process and just letting me choose between those is the goal of this extension. Also I wanted to understand what it takes to develop a product from end-to-end.</p>
          
        <h2>Process</h2>

        <p>I started with research on how to parse RSS feeds efficiently in React and render them into individual components. Then I looked for how to setup a Chrome extension with React and stumbled across <a href="https://github.com/lxieyang/chrome-extension-boilerplate-react">Chrome Extension Boilerplate</a> by Michael Xieyang Liu. That turned out to be a perfect starting point including Webpack for quick debugging. To find out about best practices for the different menu structures of Chrome extensions, I looked at many existing one's like <a href="https://chromewebstore.google.com/detail/with-intention/fccbnilmkfoeamilfnaannjjocnnigio">With Intention</a> by Alex Widua.</p>
          
        <p>For the implementation I first build up the parsing logic. My extension prioritises the decentralised nature of RSS over using any third-party API. This reduces the amount of ads and hopefully prevents it from breaking in the future. For saving the individual feeds I use the Chrome Storage API this makes the extension synchronised across multiple devices when logged into the same Google account. After that I started working on the design and decided for a simple cover-flow structure implemented entirely in CSS with a custom player component for the new tab context menu and list structures for the panel and settings context to manage the URLs.</p>
          
        <p>ADD GRAPHIC: How it works.</p>
        
        <h2>Micro-Interactions</h2>
        
        <p>The design of the extension looks structured and clean on first sight, but when used I made sure that many playful micro-interactions make the user experience delightful and fun. Most of the micro-interactions use the <a href="https://www.react-spring.dev">react-spring</a> package by Poimandres, which made fine-tuned spring animations super fast forward.</p> 
        
        <div className="grid">
          <div className="row">
            <video className="col" src=""></video>
            <video className="col" src=""></video>
          </div>
          <div className="row">
          <video className="col" src=""></video>
          <video className="col" src=""></video>
          </div>
        </div>

        {/* <div className="sample-grid">
          <div className="sample-box">
            <List/>
          </div>
          <div className="sample-box carousel">
            <Carousel/>
          </div>
        </div> */}

        <h2>Roadmap</h2>
        
        <p>I plan to continiously iterate on the extension from user feedback. Some of the stuff I would love to implement in the near term future are:</p>
        
        <ul className="check-list">
          <li>General refactoring.</li>
          <li>Releasing 0.0.2.</li>
          <li>Using react-three-fiber for the coverflow.</li>
          <li>Adding some shader effects, when scrolling.</li>
        </ul>
        
        <h2>Outcome & Learning</h2>

        <p>End-to-end implementation of a tiny product was a fascinating learning experience that showed me how many problems need to be solved along the way of releasing software to the public. </p>

        <div className="bottom-work"></div>
      
      </div>
    </div>  
  );
}

export default Podcasts;
