import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function Podcasts() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Podcasts for Chrome · From RSS-Feed into new Tab.
        </h1>
        <p className="spacer">⌘</p>
        <img
          className="header-image"
          src="img/work/placeholderpodcasts.png"
          alt=""
        />
        <ul className="tools"><li className="tool">REACT</li><li className="tool">WEBPACK</li><li className="tool">CSS</li><li className="tool">XML</li><li className="tool">REACT-SPRING</li></ul>
        <p>
          Searching for the right podcasts can be extensive, while most end up listening to the same titles. 
          This extension shortens this process by allowing you to start the last episode of
          your five favorite podcasts in Chrome's new tab. It does so using
          rss-feeds and syncs automatically across all your devices.
        </p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/category/extensions?hl=de"
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
        <div className="line-projects"></div>
      </div>
    </div>
  );
}

export default Podcasts;
