import React from "react";
import DayDate from "./DayDate";

function Me() {
  return (
    <div className="container">
      <div className="text-block">
          <DayDate />
          <h1>Lukas Moro.</h1>
          <p className="spacer">⌘</p>
          <p>
            Designing and prototyping interactions to integrate virtual parts of life into <i>perceivable reality</i> through a poetic lense. Currently, looking for freelance and permanent roles! 👋
          </p>
          <p>
            Worked with{" "}
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Rolls-Royce Motorcars
            </a>, 
            <a
              href="https://www.slabs.one"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Spatial Labs
            </a> and
            <a
              href="https://www.alfredo-haeberli.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Studio Alfredo Häberli
            </a>
            . <br />Graduated in Interaction Design at
            <a
              href="https://www.umu.se/en/umea-institute-of-design/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Umeå Institute of Design
            </a>
            .
          </p>
          <p>Thanks.</p>
          <svg width="80" height="44" viewBox="0 0 272 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 136.786C1.73218 141.216 5.00651 149.848 12.2463 148.933C19.4862 148.017 24.9278 78.1358 26.7436 43.3095C27.8272 49.2948 30.6622 61.864 33.3332 64.2581C36.672 67.2507 39.5714 67.6028 42.6466 71.1236C45.7218 74.6443 54.2444 98.9376 59.1647 101.93C64.0849 104.923 74.7162 110.116 79.988 107.916C84.2053 106.155 87.6027 95.857 88.7742 90.9279C90.3264 94.6834 94.6433 101.86 99.4933 100.522C105.556 98.8496 110.889 75.3485 103.508 74.9964C97.4457 74.7072 98.5001 80.5064 101.312 81.4218C104.826 82.5661 118.472 74.9964 121.195 74.9964C123.919 74.9964 127.433 83.7983 135.429 82.126C141.825 80.7881 145.064 71.4757 145.884 66.9867C149.721 70.126 154.407 77.4235 161.524 74.9964C168.641 72.5693 181.029 44.7456 163.457 44.7456C150.805 44.7456 152.65 54.3397 156.516 54.3397C162.578 54.3397 180.678 42.281 184.807 40.0805C188.937 37.8801 193.594 37.8801 197.459 36.4718C201.325 35.0634 212.22 28.1979 218.283 25.7334C224.345 23.2689 235.592 17.8117 244.378 13.9388C251.407 10.8405 265.055 4.02199 271 1" stroke="#27221f" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="line"></div>
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
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://read.cv/moro"
            >
              ↳ CV
            </a>
          </div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.are.na/share/BeEhSkb"
            >
              ↳ Are.na
            </a>
          </div>
          <div className="socials">
            <a className="link" href="mailto:lukas.moro@me.com">
              ↳ Email
            </a>
          </div>
          <div className="bottom-work"></div>
          
      </div>
    </div>
  );
}

export default Me;
