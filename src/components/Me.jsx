import React from "react";
import DayDate from "./DayDate";

function Me() {
  return (
    <body>
      <div className="container">
        <div className="text-block">
          <DayDate />
          <h1>Hello, I am Lukas. 👨‍💻</h1>
          <p>
            My passion is to sketch and tinker new interfaces with {"<code/>"}{" "}
            and nodes.
          </p>

          <p>
            I prototype applications and shaders for ambient and spatial
            computing to empower people and help them focus on the things that
            matter.
          </p>
          <p>
            I currently work for{" "}
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Rolls-Royce Motorcars
            </a>{" "}
            and
            <a
              href="https://www.slabs.one"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              sLABS
            </a>{" "}
            and study Interaction Design at
            <a
              href="https://www.dh.umu.se/en/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              UID
            </a>
            .
          </p>
          <div className="line"></div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Lukas_Moro"
            >
              ↳ Twitter
            </a>
          </div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/lukas_moro/"
            >
              ↳ Instagram
            </a>
          </div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/lukasmoro"
            >
              ↳ GitHub
            </a>
          </div>
          <div className="socials">
            <a className="link" href="mailto:lukas.moro@me.com">
              ↳ Email
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Me;
