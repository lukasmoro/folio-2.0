import React from "react";
import "./Projects.css";
// import DayDate from "/Users/lukasmoro/Desktop/Portfolio 2.0/folio-2.0/src/components/DayDate.jsx";

function Podcasts() {
  return (
    <div className="container">
      <div className="text-block">
        {/* <DayDate /> */}
        <h1>
          Podcasts for Chrome - Straight from the RSS-Feed into your new Tab.
        </h1>
        <p className="spacer">⌘</p>

        <img
          className="header-image"
          src="img/work/placeholderpodcast.png"
          alt=""
        />
        <p>
          Searching for the right podcasts can be quite extensive, while in the
          end most of us end up listening to the same titles. This extension
          shortens this process by allowing you to start the last episode of
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
            ↳ Chrome Web Store
          </a>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
