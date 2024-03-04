import React from "react";
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
        <video
            className="banner"
            src="img/work/podcasts/podcasts.mp4"
            alt=""
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          />
        <ul className="tools"><li className="tool">REACT</li><li className="tool">WEBPACK</li><li className="tool">CSS</li><li className="tool">XML</li><li className="tool">REACT-SPRING</li></ul>
        <p>
        A chrome extension that lets you add podcast's rss-feed url in the pop-up or options context & play them from a player in your new tab. Enjoy podcasts by focusing on your top five favorites, which helps to save time & decision-making.<br /> <br />The extension is open sourced & hosted on GitHub. It is still a bit buggy. I will update it asap when I have more time again.
        </p>
        <div className="line"></div>
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
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Podcasts;
