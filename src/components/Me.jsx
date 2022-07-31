import React from "react";

function Me() {
  return (
    <div className="container">
      <div className="text-block">
        <h1>Hello, I am Lukas. 👋🏼</h1>
        <p>My passion is tinkering with {"<code/>"} and nodes.</p>
        <div className="line"></div>
        <p>
          I experiment with interfaces for ambient and spatial computing to help
          people focus on the things that matter to them.
        </p>
        <p>
          Currently working for{" "}
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
          .
        </p>
      </div>
    </div>
  );
}

export default Me;
