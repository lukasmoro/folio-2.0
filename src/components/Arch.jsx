import React from "react";
import DayDate from "./DayDate.jsx";
import LazyLoadVideo from "./LazyLoadVideo.jsx";
import LazyLoadImage from "./LazyLoadImage.jsx";

function Arch() {
  
  return (
    <div className="container"  >
      <div className="text-block">
        <DayDate /> 
          
        <h1>Arch · Health Room for Remote Areas in Northern Sweden.</h1>
        
        <p className="spacer"></p>
        <p className="spacer"></p>
        
        <LazyLoadImage className="banner" src="img/work/arch/archheader.jpg" alt="Banner of the Project Arch by Lukas Moro" placeholder="img/work/arch/archheader-placeholder.jpg"/>
           
        <ul className="tools">
          <li className="tool">BLENDER</li>
          <li className="tool">RESEARCH</li>
          <li className="tool">FILMING</li>
          <li className="tool">AR KIT</li>
          <li className="tool">PRUSA</li>
          <li className="tool">CNC</li>
          <li className="tool">RHINO 3D</li>
        </ul>
          
        <ul className='process'>
          <li>Duration: 10 Weeks, Autumn 2021</li>
          <li>Collaboration Partner: Region Västerbotten, Sweden</li>
          <li>Team: <a target="_blank" rel="noreferrer" href="https://www.kayvandenaker.nl">Kay Van Den Aker</a>, <a target="_blank" rel="noreferrer" href="https://www.tianyi.work">Tianyi Wang</a>, <a target="_blank" rel="noreferrer" href="https://www.josiereilly.com/">Josie Reilley</a> & Lukas Moro</li>
          <li>Contribution: Research, Concept, Video, CGI & Physical Prototype</li>
        </ul>
        
        <h2>In-Short</h2>
        
        <p>Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals through haptics on the device. The central and collaborative interface of Arch allows both doctor and patient to stay focused on each other.</p>
          
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
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/arch/archvisualisationsolution.mp4" autoPlay muted loop playsInline alt="Arch Animated Visualisation Solution by Lukas Moro" placeholder="img/work/arch/archvisualisationsolution-placeholder.jpg"/>
          </div>
        </div>
        
        <p>Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals through haptics on the device. Our approach is a body scan of both people, and projecting those in augmented reality at the opponent. This creates an immersive experience of togetherness, and allows both doctor and patient to express themselves using their full body.</p>

        <iframe width="600" height="315" src="https://www.youtube.com/embed/2BC8gtFJNlQ?si=ZxiCDNwz29Gk-4EE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h2>Process</h2>

        <p>In a holistic process that included field research, interviewing, prototyping and the creation of a final video, I was involved in the research and ideation process, digital and physical prototyping and CGI for the final deliverables.</p>

        <div className="grid-process">
          <div className="row-process">
            <LazyLoadImage className="col-process" src="img/work/arch/archprocessstoruman.jpg" alt="" placeholder="img/work/arch/archprocessstoruman-placeholder.jpg"/>
            <LazyLoadImage className="col-process" src="img/work/arch/archprocesstapticengine.jpg" alt="" placeholder="img/work/arch/archprocesstapticengine-placeholder.jpg"/>
            <LazyLoadImage className="col-process" src="img/work/arch/archprocessknobprint.jpg" alt="" placeholder="img/work/arch/archprocessknobprint-placeholder.jpg"/>
            <LazyLoadVideo className="col-process" src="img/work/arch/archprocesscncmill.mp4" autoPlay muted loop playsInline alt="" placeholder="img/work/arch/archprocesscncmill-placeholder.jpg"/>
          </div>
          <div className="row-process">
            <LazyLoadVideo className="col-process" src="img/work/arch/archprocesswireframeheart.mp4" autoPlay muted loop playsInline alt="" placeholder="img/work/arch/archprocesswireframeheart-placeholder.jpg"/>
            <LazyLoadImage className="col-process" src="img/work/arch/archprocessblendersetup.jpg" alt="" placeholder="img/work/arch/archprocessblendersetup-placeholder.jpg"/>
            <LazyLoadImage className="col-process" src="img/work/arch/archprocessanimation.jpg" alt="" placeholder="img/work/arch/archprocessanimation-placeholder.jpg"/>
            <LazyLoadImage className="col-process" src="img/work/arch/archprocessproductshot.jpg" alt="" placeholder="img/work/arch/archprocessproductshot-placeholder.jpg"/>
          </div>
        </div>
        
        <h2>Field Research</h2>
        
        <p>We conducted field research in Storuman, a municipality in southern Lapland that has been using remote healthcare solutions since the 1990s.</p>
        
        <iframe width="600" height="315" src="https://www.youtube.com/embed/Od75MOOSzv4?si=P2_moJid6VnRYTiF&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <h2>Research Synthesis</h2>
        
        <p>We mapped out the remote healthcare system, our personal experiences with it, and the relevant stakeholders to gain overview of its complexity. </p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadImage className="col" src="img/work/arch/archuserjourneymapping.jpg" alt="Arch User Journey Mapping with Legos by Lukas Moro" placeholder="img/work/arch/archuserjourneymapping-placeholder.jpg"/>
          </div>
        </div>
        
        <h2>Sacrificial Prototyping</h2>
        
        <p>We generated many low-fi prototypes of ideas to sacrifice them for insights. We exposed these interventions to stakeholders and observed their approach to, and perception of them. We also used them as conversation starters in interviews with doctors. This allowed us to evaluate the relevance of directions early in the process. </p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadImage className="col" src="img/work/arch/archsacrificialprototypes.jpg" alt="Arch Sacrificial Prototypes with Arduino, ARKit and Post Its by Lukas Moro" placeholder="img/work/arch/archsacrificialprototypes-placeholder.jpg"/>
          </div>
        </div>
        
        <h2>Evaluation Workshops</h2>
        
        <p>In a remote workshop with the client and our colleagues, we presented our findings and sacrificial prototypes and gave them time to give anonymous, written feedback using a form. When we asked the participants how they envisioned healthcare, and how these concepts fit into their mental models, several trends emerged:Personalised, Patient-centric, Social and Data Driven. Next to the workshop, we conducted 8 expert interviews during the exploration and conceptualization phase of our design process.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/arch/archworkshop.mp4" autoPlay muted loop playsInline alt="Arch Workshop with Stakeholder's from Region Västerbotten and Stoffel Kuenen by Lukas Moro" placeholder="img/work/arch/archworkshop-placeholder.jpg"/>
          </div>
        </div>

        <h2>Interviews with Healtcare Professionals</h2>
        
        <p>After research and conception we had a workshop with our collaboration partners to get feedback. To evaluate different steps throughout the process we conducted interviews with a variety of health-professionals.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadImage className="col" src="img/work/arch/archinterviews.jpg" alt="Arch Interviews with Heathcare Professionals by Lukas Moro" placeholder="img/work/arch/archinterviews-placeholder.jpg"/>
          </div>
        </div>
        
        <h2>Bodystorming</h2>
        
        <p>We acted out remote healthcare consultation scenarios, and how technology could assist in this process. This method was used to gather insights into what a collaborative AR space could look and feel like. </p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadImage className="col" src="img/work/arch/archbodystorming.jpg" alt="Arch Body-Storming by Lukas Moro" placeholder="img/work/arch/archbodystorming-placeholder.jpg"/>
          </div>
        </div>

        <h2>Balancing Flat & Spatial Interfaces</h2>

        <p>We noticed that 3D models can underline the doctor's explanations, helping the patient to understand complex medical issues. Imagine a scenario where the doctor simulates different lifestyle decisions over a period of time on 3D models to illustrate how preventive measurements can benefit the patient. Eventhough spatial interfaces are an opportunity to bring us closer to a world where computers intervene less into our personal relationships. 2D interfaces will stay relevant. In a remote healthcare setting it makes sense for the professional side to have a hub for complex medical records, that are often expressed as raw data. This hub also gives power to the doctor to steer what the patient sees. This is necessary as some information might potentially worry the patient or not be of value for him.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/arch/archui.mp4" autoPlay muted loop playsInline alt="Arch UI Prototype by Lukas Moro" placeholder="img/work/arch/archui-placeholder.jpg"/>
          </div>
        </div>

        <h2>Experience Prototyping</h2>
        
        <p>We created a prototype to experience interacting with the product, with the goal to gain a better understanding of bottlenecks and opportunities.</p>

        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/arch/archprototypes.mp4" autoPlay muted loop playsInline alt="Arch UX Prototype by Lukas Moro" placeholder="img/work/arch/archprototypes-placeholder.jpg"/>
          </div>
        </div>
        
        <h2>Outcome & Learning</h2>
        
        <p>This project is an exploration of how upcoming technologies might shape the future of remote healthcare consultation. The intention is not presenting this as a final concept but more as an inspiration for further explorations in this area. We believe that bridging remote situations through mixed reality is very promising and that accompanying tangible interfaces are a good way to emulate physical encounters and bring people closer together.</p>

        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/arch/archhandshake.mp4" autoPlay muted loop playsInline alt="Arch UX Prototype by Lukas Moro" placeholder="img/work/arch/archhandshake-placeholder.jpg"/>
            <LazyLoadVideo className="col" src="img/work/arch/archinteraction.mp4" autoPlay muted loop playsInline alt="Arch UX Prototype by Lukas Moro" placeholder="img/work/arch/archinteraction-placeholder.jpg"/>
          </div>
          <div className="row">
            <LazyLoadImage className="centered-col" src="img/work/arch/archprocessproductshot.jpg" alt="Arch UX Prototype by Lukas Moro" placeholder="img/work/arch/archprocessproductshot-placeholder.jpg"/>
          </div>
        </div>

        <div className="bottom-work"></div>

      </div>
    </div>
  );
}

export default Arch;
