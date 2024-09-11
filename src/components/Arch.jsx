import React from "react";
import DayDate from "./DayDate.jsx";

import mediaData from '../components/Data/listArch.json';

function Arch() {

  const MediaElement = ({ type, src, alt, descriptions }) => {
    return (
      <div className="media-container">
        {type === 'video' ? (
          <video className="media" autoPlay loop muted playsInline src={src} alt={alt} />
        ) : (
          <img className="media" src={src} alt={alt} />
        )}
        <div className="description-overlay">
          {descriptions.map((descriptions, index) => (
            <span key={index} className="description-textbox">{descriptions}</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container"  >
      <div className="text-block">
           <DayDate /> 
          <h1>
            Arch · Health Room for Remote Areas
          </h1>
          <p className="spacer">⌘</p>
          <video
            className="banner"
            src="img/work/arch/arch.mp4"
            alt=""
            controls={true}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline = {true}
          />
           <ul className="tools"><li className="tool">BLENDER</li><li className="tool">RESEARCH</li><li className="tool">FILMING</li><li className="tool">AR KIT</li><li className="tool">PRUSA</li><li className="tool">CNC</li><li className="tool">RHINO 3D</li></ul>
          <ul className='process'>
          <li>Duration: 10 Weeks, Autumn 2021</li>
          <li>Collaboration Partner: Region Västerbotten, Sweden</li>
          <li>Team: <a href="https://www.kayvandenaker.nl">Kay Van Den Aker</a>, <a href="https://www.tianyi.work">Tianyi Wang</a>, <a href="https://www.josiereilly.com/">Josie Reilley</a> & Lukas Moro</li>
          <li>Contribution: Research, Concept, Video, CGI & Physical Prototype</li>
        </ul>
        <h2>In-Short</h2>
          <p>
          Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals through haptics on the device. The central and collaborative interface of Arch allows both doctor and patient to stay focused on each other.
          </p>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/distance-spanning-health-and-social-care-2030/arch-bridging-the-gap-between-doctor-patient-in-remote-healthcare-bae7e5bca70"
          >
            ↳ Medium Article
          </a>
          </div>
          <h2>Concept</h2>
          <p>Remote healthcare consulting is a big challenge, the screen of a video call limits the richness of the real world and compromises the healthcare experience for both doctor and patient.</p>
          <video className="image-wide" src="img/work/arch/archsolution.mp4" controls loop muted playsInline></video>
          <p>Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals through haptics on the device. Our approach is a body scan of both people, and projecting those in augmented reality at the opponent. This creates an immersive experience of togetherness, and allows both doctor and patient to express themselves using their full body.</p>

          <h2>Process</h2>
          <h2>Field Research</h2>
          <p>We conducted field research in Storuman, a municipality in southern Lapland that has been using remote healthcare solutions since the 1990s.</p>
          <iframe width="600" height="315" src="https://www.youtube.com/embed/Od75MOOSzv4?si=P2_moJid6VnRYTiF&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h2>Research Synthesis</h2>
          <p>We mapped out the remote healthcare system, our personal experiences with it, and the relevant stakeholders to gain overview of its complexity. </p>
          <img className="image-wide" src="img/work/arch/archprocess2.png" alt="" />
          <h2>Sacrificial Prototyping</h2>
          <p>We generated many low-fi prototypes of ideas to sacrifice them for insights. We exposed these interventions to stakeholders and observed their approach to, and perception of them. We also used them as conversation starters in interviews with doctors. This allowed us to evaluate the relevance of directions early in the process. </p>
          <img className="image-wide" src="img/work/arch/archsacrificialprototypes.png" alt="image of sacrificial prototyping" />
          <h2>Evaluation Workshops</h2>
          <p>In a remote workshop with the client and our colleagues, we presented our findings and sacrificial prototypes and gave them time to give anonymous, written feedback using a form. When we asked the participants how they envisioned healthcare, and how these concepts fit into their mental models, several trends emerged:Personalised, Patient-centric, Social and Data Driven. Next to the workshop, we conducted 8 expert interviews during the exploration and conceptualization phase of our design process.</p>
          <video className="image-wide" src="img/work/arch/archworkshop.mp4" controls loop muted playsInline></video>
          <h2>Bodystorming</h2>
          <p>We acted out remote healthcare consultation scenarios, and how technology could assist in this process. This method was used to gather insights into what a collaborative AR space could look and feel like. </p>
          <img className="image-wide" src="img/work/arch/bodystorming.png" alt="image of bodystorming" />
          <h2>Experience Prototyping</h2>
          <p>We created a prototype to experience interacting with the product, with the goal to gain a better understanding of bottlenecks and opportunities.</p>
          <video className="image-wide" src="img/work/arch/archuxprototype.mp4" controls loop muted playsInline></video>
          <h2>Outcome & Learning</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, doloremque nostrum maxime rem accusamus, vel saepe consectetur ullam soluta obcaecati sed recusandae optio vitae error esse cumque reiciendis, reprehenderit repellendus.</p>
          
          <div className="line-projects"></div>
          
          <div className="grid">
            {mediaData.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((media, colIndex) => (
                  <div className="col" key={colIndex}>
                    <MediaElement type={media.type} src={media.src} alt={media.alt} descriptions={media.descriptions} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="bottom-work"></div>
          </div>
    </div>
  );
}

export default Arch;
