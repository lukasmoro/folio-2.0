import React from "react";

function Me() {
  return (
    <body>
      <div className="container">
        <div className="text-block">
          <h1>Hello, I am Lukas.</h1>
          <p>
            My passion is to sketch and tinker new interfaces with {"<code/>"}{" "}
            and nodes.
          </p>
          <div className="line"></div>
          <p>
            I prototype applications for ambient and spatial computing to
            empower people and help them focus on the things that matter.
          </p>
          <p>
            Currently I am working for{" "}
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              className="link"
            >
              Rolls-Royce Motorcars
            </a>{" "}
            and
            <a href="https://www.slabs.one" className="link">
              {" "}
              spatialLABS
            </a>
            {". "}I also do my master's degree in interaction design at
            <a href="https://www.dh.umu.se/en/" className="link">
              {" "}
              Umeå Institute of Design.
            </a>
          </p>
          <div className="line"></div>
          <div className="socials">
            <a className="link" href="">
              ↳ Twitter
            </a>
          </div>
          <div className="socials">
            <a className="link" href="">
              ↳ Instagram
            </a>
          </div>
          <div className="socials">
            <a className="link" href="">
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
