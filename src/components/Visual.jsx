import React from "react";
import TriggerRouteChange from "./TriggerRouteChange";
import { useResetScroll } from "./ResetScroll";
import { motion } from 'framer-motion';

import DayDate from "./DayDate";
import "./Visual.css";

//ADD ALIEN DONE
//ADD GRID-PT
//ADD METAPHORICAL UI
//ADD SLABS STUFF MAYBE
//ADD NICE PICTURE OF CANVAS IN LIVING ROOM
//ADD VOLUMETRIC PARTICLES
//ADD SPATIAL RESPONSIVENESS
//ADD SPARK AR EXPLO
//ADD FIRST PARTY VISUAL

function Visual() {
  useResetScroll();

  return (
    <TriggerRouteChange navigateToTop={'/work'} navigateToBottom={'/thought'}>
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Smaller Explorations.</h1>
        <p className="spacer">⌘</p>
        <div className="grid">

        <div className="row">
            <div className="col">
              <video
                className="video"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
                src="videos/aliens_NOTCOMPRESSED.mp4"
                alt="Oops, image missing!"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <video
                className="video"
                src="videos/oscars.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
            <div className="col">
              <img src="img/grid/3dme.png" alt="Oops, image missing!" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="img/grid/BlueMoon.png" alt="Oops, image missing!" />
            </div>
            <div className="col">
              <img src="img/grid/speedform.png" alt="Oops, image missing!" />
            </div>
            <div className="col">
              <video
                className="video"
                src="videos/browserar1.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="img/grid/spotifydatavisualisation.png"
                alt="Oops, image missing!"
              />
            </div>
            <div className="col">
              <video
                className="video"
                src="videos/lucit.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="img/grid/materialofdesire.png"
                alt="Oops, image missing!"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img src="img/grid/matsumoto.png" alt="Oops, image missing!" />
            </div>
            <div className="col">
              <video
                className="video"
                src="videos/vrexploration.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
            <div className="col">
              <img
                src="img/grid/orangescreenprint.png"
                alt="Oops, image missing!"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="img/grid/taigaiterations.png"
                alt="Oops, image missing!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </ TriggerRouteChange>
  );
}

export default Visual;
