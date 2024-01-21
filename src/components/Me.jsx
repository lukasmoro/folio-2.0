import {React } from "react";
import { useResetScroll } from "./ResetScroll";
import { motion } from 'framer-motion';
import DayDate from "./DayDate";
import "./Me.css";

function Me() {
  useResetScroll();

  return (
    <motion.div 
    className="container"
    >
      <div className="text-block">
          <DayDate />
          <h1>Hi, I am Lukas Moro.</h1>
          <p className="spacer">⌘</p>
          <p>
            I sketch, prototype and make new interfaces with bits and atoms.
            My focus are applications for spatial computing to
            harmonise our relationship with technology and integrate the
            virtuality of our lives into <i>one common reality.</i>
          </p>
          <p>
            I worked for{" "}
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
            . <br />I study Interaction Design at
            <a
              href="https://www.dh.umu.se/en/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              {" "}
              Umeå Institute of Design
            </a>
            .
          </p>
          <div className="line"></div>
          <div className="socials">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://read.cv/moro"
            >
              ↳ read.cv
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
    </motion.div>
  );
}

export default Me;
