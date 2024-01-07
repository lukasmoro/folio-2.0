import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function Arch() {
  return (
    <div className="container">
      <div className="text-block">
          <DayDate />
          <h1>Arch · Healthroom for remote areas</h1>
          <p className="spacer">⌘</p>
          <img className="header-image" src="img/work/arch/arch1.png" alt="" />
          <p>
            Spatial computing for bridging the gap between doctor & patient in
            remote healthcare settings.
          </p>
          <h2>Problem</h2>
          <p>
            Low population density demands remote settings in healthcare in the
            Nordic regions of Sweden. Existing solutions lack the spatial
            richness of the real world and create friction in the communication
            between doctor and patient.
          </p>
          <h2>Solution</h2>
          <p>
            Arch bridges the remote gap, by placing doctor and patient in a
            mixed reality healthroom. It allows for tangible connection between
            doctor and patient and enables collaborative interaction with
            explainatory medical 3D data as a central point of communication.
          </p>
          <p>
            <mark>
              This setup gives a central point of focus and collaborative
              interaction. It reduces distraction and lets doctor and patient
              engage more in the conversation with each-other.
            </mark>
          </p>
          <p>
            This project is an exploration of how upcoming technologies might
            shape the future of remote healthcare consultation. The intention is
            not presenting this as a final concept but more as an inspiration
            for further explorations in this area. We believe that bridging
            remote situations through mixed reality is very promising and that
            accompanying tangible interfaces are a good way to emulate physical
            encounters and bring people closer together.
          </p>
          <div className="row">
            <div className="column">
              <h4>Contributions</h4>
              <p>
                CGI <br /> Research
                <br /> Prototyping
                <br /> Videomaking
              </p>
            </div>
            <div className="column">
              <h4>Information</h4>
              <p>
                10 weeks course <br /> Professional Product 1<br /> Region
                Västerbotten
              </p>
            </div>
            <div className="column">
              <h4>Team</h4>
              <p>
                Kay van den Aker
                <br /> Tianyi Wang <br /> Josie Reilley
              </p>
            </div>
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archsolution.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <img
            className="image-container"
            src="img/work/arch/archvalues.jpeg"
            alt=""
          />
          <div className="video-container">
            <video
              className="video"
              src="videos/archhandshake.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archtransition.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/archinteraction.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <iframe
            src="https://www.youtube.com/embed/8Zwa_QQow_Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="line"></div>
          <h2>Process</h2>
          <h2>Research in Storuman</h2>
          <p>
            We conducted field research in Storuman, a municipality in the
            southern Lapland region that has been using remote healthcare
            solutions since the 1990s.
          </p>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Od75MOOSzv4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2>Early Sensemaking</h2>
          <p>
            To make sense out of the gathered information and to efficiently
            communicate our insights at a workshop with stakeholders, we built a
            representational map of them with legos, strings and pins.
          </p>
          <img
            className="image-container"
            src="img/work/arch/archmap.png"
            alt=""
          />
          <h2>Sacrificial Prototyping</h2>
          <p>
            We clustered ideas and defined 8 core ideas. Each team-member chose
            2 of those 8 ideas and made quick prototypes for them. We exposed
            those to stakeholders and observed their perception of them. We also
            used them as conversation starters during our workshop. These
            interventions gave us the opportunity to evaluate relevance early in
            the process and set our direction based on rational insights gained
            from our users.
          </p>
          <img
            className="image-container"
            src="img/work/arch/archsacrificialprototypes.png"
            alt=""
          />
          <h2>Evaluation</h2>
          <p>
            After research and conception we had a workshop with our
            collaboration partners to get feedback. To evaluate different steps
            throughout the process we conducted interviews with a variety of
            health-professionals.
          </p>
          <div className="video-container">
            <video
              className="video"
              src="videos/archworkshop.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <h2>Experience Protoyping</h2>
          <p>
            Our starting point was a processing sketch that used live camera
            footage to map a 3D model onto a marker. Then we manipulated this
            model with the input from a rotary encoder. The haptic connection
            between doctor & patient was prototyped with a neopixel & a taptic
            engine. To efficiently work-around augmentation of a live 3D model
            of the conversation opposite into our AR scene, we added a
            projection that mapped live camera footage onto two planes in 90°
            angle.
          </p>
          <div className="video-container">
            <video
              className="video"
              src="videos/archuxprototype.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          <h2>Prototyping Micro-Interactions with Blender's VFX</h2>
          <p>
            Content, transitions, maximum scale, materiality & physics are
            factors to consider when striving for an efficient tool of
            communication in 3D environments. Blenders motion-tracking
            functionality and videomaking turned out as a way to prototype those
            micro-interactions.
          </p>
          <img
            className="image-container"
            src="img/work/arch/archvfx.png"
            alt=""
          />
          <h2>Flat vs. Spatial UIs</h2>
          <p>
            We noticed that 3D models can underline the doctor's explanations,
            helping the patient to understand complex medical issues. Imagine a
            scenario where the doctor simulates different lifestyle decisions
            over a period of time on 3D models to illustrate how preventive
            measurements can benefit the patient. Eventhough spatial interfaces
            are an opportunity to bring us closer to a world where computers
            intervene less into our personal relationships. 2D interfaces will
            stay relevant. In a remote healthcare setting it makes sense for the
            professional side to have a hub for complex medical records, that
            are often expressed as raw data. This hub also gives power to the
            doctor to steer what the patient sees. This is necessary as some
            information might potentially worry the patient or not be of value
            for him.
          </p>
          <div className="video-container">
            <video
              className="video"
              src="videos/archui.mp4"
              width="100%"
              height="100%"
              controls={true}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
      </div>
    </div>
  );
}

export default Arch;
