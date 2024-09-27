import React, { useEffect, useRef, useState } from 'react';
import DayDate from "./DayDate.jsx";

function Presence() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Presence · Spatial Computing for Staying in the Moment.
        </h1>
        <p className="spacer">⌘</p>
        <img
            className="banner"
            src="img/banner/presencebanner.jpg"
            alt="banner of sensorium"
          />
        <ul className="tools">
          <li className="tool">UNITY</li>
          <li className="tool">C#</li>
          <li className="tool">URP</li>
          <li className="tool">SHADERLAB</li>
          <li className="tool">VFX GRAPH</li>
          <li className="tool">META INTERACTION SDK</li>
          <li className="tool">NETCODE</li>
          <li className="tool">ARDUINO</li>
          <li className="tool">PYTHON</li>
          <li className="tool">YOLO V8</li>
          <li className="tool">OPENAI API</li>
          <li className="tool">QUEST 3</li>
        </ul>
        <ul className='process'>
          <li>Duration: 6 Months, Spring 2024</li>
          <li>Collaboration Partner: None</li>
          <li>Team: Individual Project</li>
          <li>Contribution: Master Graduation Project</li>
        </ul>
        <h2>In-Short</h2>
        <p>
          This project explores how integration between virtual and physical spaces could lead towards more meaningful embodiment of software in the world.
          </p>
          <p>A virtual representation of the physical space including geometry, lighting, semantics and networking is used to simulate virtual objects that interact with the physical world in terms of physics, light, occlusion and controlling. While physical objects acknowledge our existence fully, virtual objects occupy mostly our mental space. This leads to a disconnection where mental presence in the virtual space diminishes mental presence in the physical one.  
          </p>
          <p>The goal is to achieve a blended space where virtuality and physicality mix to leverage advantages of both. This should lead to physical objects that are more fluid and accessible in their nature and virtual objects that satisfy our senses and acknowledge us as physical beings.</p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/presencebrief.pdf"
          >
            ↳ Brief PDF
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/presence.pdf"
          >
            ↳ Research Paper PDF
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro/cameraaccess-metaquest"
          >
            ↳ GitHub Repo for Object Detection on Quest
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro/led-display"
          >
            ↳ GitHub Repo for Unity LED-Display Interface
          </a>
        </div>
        <h2>Process</h2>
        <p>During this project I applied a research-through-design approach. I started out with a primary research phase reading "Reality+" by David Chalmers, "Life 3.0" by Max Tegmark and "Tractatus Logico Philosphicus" by Ludwig Wittgenstein. Then I conducted many interactive sketches to develop a feeling for underlying technologies. Afterwards I conducted a secondary literature research about spatial interactions, built three prototypes to communicate and explored five interaction fundamentals and formulated my insights into a thesis.</p>
        <div className="grid-process">
          <div className="row-process">
              <img className="col-process" src="img/work/presence/_report/7.png" alt="" />
              <img className="col-process" src="img/work/presence/_report/10.png" alt="" />
              <img className="col-process" src="img/work/presence/_report/14.png" alt="" />
              <img className="col-process" src="img/work/presence/_report/15.png" alt="" />
            </div>
            <div className="row-process">
            <img className="col-process" src="img/work/presence/_report/16.png" alt="" />
              <img className="col-process" src="img/work/presence/_report/17.png" alt="" />
              <img className="col-process" src="img/work/presence/_report/18.png" alt="" />
              <img className="col-process" src="img/work/presence/_report/49.jpg" alt="" />
            </div>
            <div className="row-process">
              <img className="col-process" src="img/work/presence/ideation.jpg" alt="" />
              <img className="col-process" src="img/work/presence/_report/20.jpg" alt="" />
              <img className="col-process" src="img/work/presence/_report/29.jpg" alt="" />
              <img className="col-process" src="img/work/presence/_report/42.jpg" alt="" />
            </div>
            <div className="row-process">
              <img className="col-process" src="img/work/presence/_report/47.png" alt="" />
              <img className="col-process" src="img/work/presence/_report/30.jpg" alt="" />
              <img className="col-process" src="img/work/presence/_report/34.jpg" alt="" />
              <img className="col-process" src="img/work/presence/_report/35.jpg" alt="" />
            </div>
          </div>
        {/* <div className="grid">
            <div className="row">
              <img className="col" src="img/work/presence/plan.jpg" alt="graphic of process planning" />
            </div>
        </div> */}
        <h2>Primary Literature Research</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias exercitationem ea culpa non tempore modi minus neque, deleniti dolor? Iste quo fugit minima facere quia sint exercitationem velit beatae molestiae!</p>
        <h2>Sketching</h2>
        <p>Some sketches in the beginning explored vague ideas about contextually assembled user interfaces, implicit semantic input and integration of IoT as well as the materiality of Meta Presence SDK, object detection with YOLO V8 in augmented reality, structural outputs with GPT-4, running different shaders on the Quest's effect mesh, building display-drivers for custom LED matrixes to interface Unity via TCP-IP, Meta Depth API and co-location with Unity Netcode.</p>
        <h2>Object Detection on Passthrough for Scene Semantics</h2>
        <p>Running object detection on Meta's Passthrough for contextual understanding and as implicit input for interfaces.</p>
        <p className='block-quote'>Semantic input in mixed reality added utility but can also be distracting. Using it as a supplementation to primary input minimised distraction and made interfaces contextually relevant.</p>
        <div className="grid">
        <div className="row">
            <video className="col" src="img/work/presence/yolo.mp4" autoPlay muted loop playsInline></video>
            <img className="col" src="img/preview/cvkitpreview.jpg" alt="YOLO V8 detections in Quest 3" />
            </div>
        </div>
        <h2>Metaphorical Interface through Structured Outputs from LLM</h2>
        <p>Metaphorical description of behaviour through language to get structured outputs of GPT-4 as input into a particle system's configuration.</p>
        <p className='block-quote'>LLMs can be used as input system. With structured outputs as answers to prompts algorithms can be configured to generate a variety of different outputs besides text. The algorithm themselves can constrain the output to fit the context. </p>
        <div className="grid">
            <div className="row">
            <video className="col" src="img/work/presence/metaphorical1.mp4" autoPlay muted loop playsInline></video>
            <video className="col" src="img/work/presence/metaphorical2.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Light, Shadow & Occlusion between Physical & Virtual Objects</h2>
        <p>Light and shadow receiver shaders and virtual representations of digital light to create light interactions between physical and virtual objects. Using render queue and Meta's Depth API for occlusion.</p>
        <p className='block-quote'>Accurate light and shadow interactions as well as occlusion between physical and virtual objects adds perceptual comfort to mixed reality experiences.</p>
        <div className="grid">
            <div className="row">
              <video className="col" src="img/work/presence/shadowsvirtual.mp4" autoPlay muted loop playsInline></video>
              <video className="col" src="img/work/presence/physicsvirtual.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Interfacing with IoT through Real-time Application</h2>
        <p>Networked client-server connection to make lamp interactable through augmented interface elements in mixed reality.</p>
        <p className='block-quote'>Adding a spatial relation to virtual interface elements and the physical objects they are controlling gives those elements a high degree of fluidity. This can be leveraged in terms of accessibility, personalisation and aesthetics.</p>
        <div className="grid">
            <div className="row">
            <video className="col" src="img/work/presence/game.mp4" autoPlay muted loop playsInline></video>
            <video className="col" src="img/work/presence/lamp.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Co-located Multiplayer for Shared Experiences</h2>
        <p>Making a mixed reality scene experiencable for multiple people through networked game-objects, physics and hand-tracking data using Unity's Netcode infrastructure.</p>
        <p className='block-quote'>Non-verbal exchange between physically co-located people while exposed to the same virtual objects, changes the perceived meaning of these objects. Togetherness in mixed reality experiences sparks discourse, collaboration and sharing, while preventing discomfort through isolation and disconnection.</p>
        <div className="grid">
            <div className="row">
              <video className="col" src="img/work/presence/luki.mp4" autoPlay muted loop playsInline></video>
              <video className="col" src="img/work/presence/coco.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Secondary Literature Research</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illo quam quia accusantium maxime, nesciunt asperiores ratione laborum laudantium quos sunt qui vel aspernatur dolore, nobis quo adipisci nostrum ducimus!Ca</p>
        <h2>Prototyping</h2>
        <p>After literature review and building twelve sketches, three more refined prototypes experiencable in one common space were crafted for further exploration of the potential of embodied software in the world.</p>
        <h2>Conversational Memory Portal</h2>
        <p>The first prototype is a portal into a 360° video. It is spawned by words of a conversation that are transcribed by OpenAI's Whisper API. ADD LATENCY CONSTRAIN HERE. Through a two-handed grab gesture it can be expanded to become fully immersive. This way the person talking about the memory can show their opponent the memory as if they relive it together.</p>
        <p>To make the memory more lively a particle system is spawned which visual appearance and behaviour is configured by the contents of the 360° video through a multimodal LLM. Those particles remain in mixed reality after the portal is closed again and seemingly start interacting with it through the networked lamp to subtly continuate the experience to fit the conversation.</p>
        <p className='block-quote'>This prototype communicates how immersive technologies in combination with input interpreted by artificial intelligence can facilitate personalised experiences that do not interfere with but instead celebrate co-located human connection and exchange.</p>
        <div className="grid">
            <div className="row">
              <video className="col" src="" autoPlay muted loop playsInline></video>
              <video className="col" src="" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Desk Lamp in Blended Space</h2>
        <p>The second prototype is a desk lamp controlled out of the Unity application running on the Quest 3. The desk lamp is gutted and houses a LED-matrix with a custom-made display driver that can receive and display game-views from Unity in real-time. It makes use of Meta's effect mesh and a modeled scene model geometry in combination with light reveiver, shadow receiver and occlussion shaders and virtual light-sources mirroring the physical light for perceptual blending.</p>
        <p>The desk lamp can be actively interfaced with through a palm menu triggered by a combination of gazing towards the lamp and a gesture. The sphere above it then drops into the lamp and triggers a vertex deformer shader on the scene model mesh suggesting a drop of colour faling into a fluid and leaving ripples. It also reacts to the particle system spawned in the memory portal and adjusts its lighting pattern to the displayed memory through a shader.</p>
        <p className='block-quote'>This prototype communicates how integration of the physical space into mixed reality in terms of geometry, lights, shadows, physics and controlling can create perceptually satisfying, fluid and accessible blended objects with properties of physical and virtual space.</p>
        <div className="grid">
            <div className="row">
              <video className="col" src="" autoPlay muted loop playsInline></video>
              <video className="col" src="" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Spatially Responsive Music Player</h2>
        <p>The third prototype is a spatially responsive music player for Quest 3 which changes its audio output and affordance depending on where it is positioned in the room. The music player projects an interface to the table below for precise interactions requiring haptics. When put close to a speaker the music player magnetically snaps to a spatial anchor positioned there. It smoothly changes its audio-output from the Quest 3 to the speaker depending on the distance of the player from the speaker.</p>
        <p className='block-quote'>This prototype communicates how putting physical and virtual objects into spatial relation with each other and changing affordance depending on location and interaction can create playful interactions with some of the ritualistic properties of the purely physical world, e.g. putting a vinyl on a record player.</p>
        <div className="grid">
            <div className="row">
            <video className="col" src="img/work/presence/playerinterface.mp4" autoPlay muted loop playsInline></video>
            <video className="col" src="img/work/presence/playergesture.mp4" autoPlay muted loop playsInline></video>
            </div>
            <div className='row'>
              <video className="centered-col" src="img/work/presence/playerspatial.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Outcome</h2>
        <p>The outcome of this thesis consists of the prototypes, the design consolidation and the formulation of new interaction fundamentals for spatial computing. Those fundamentals are malleable and should not be seen as absolutes but rather the raw experiential properties the technology enables at the current point of time for facilitating presence in the moment.</p>
        <p>From a technological perspective spatial real-time applications for mixed reality headsets and other outlets were built through a designerly lens. Those applications illustrate user interactions and object interactions possible with available technologies.</p>
        <p>From a conceptual perspective experiential properties were carved out of the material of spatial computing, through building, experiencing and exposing blended and virtual objects. Those properties can be considered when creating mixed reality experiences to make realities move closer together.</p>
        <h2>Embracing Togetherness.</h2>
        <p>Exchange happening between physical co-located people combined with exposure to the same virtual objects, changes the perceived meaning of these objects. Considering togetherness sparks discourse, collaboration and sharing, while preventing isolation and disconnection.</p>
        <h2>Integrating Realities.</h2>
        <p>Representation of the physical world in the generic scene model enables integration of physical and virtual realities. This integration takes shape in shared light, shadow and physics phenomena, integrated control system and world space. Considering integration leads to experiences satisfying the senses, interactions not neglecting our physical being and virtual objects carrying enhanced meaning.</p>
        <h2>Liquid Interactions.</h2>
        <p>Embodied software in the world is directly coupled with our perception. Combined with the many possible input modalities of spatial computing, this enables to design virtual and blended objects with liquid interactions. Liquid interactions are forming around the intention, context, space and state of the object. Considering liquid interactions offers novel personalised user experiences and accessibility.</p>
        <h2>Opening Applications.</h2>
        <p>Spatial operating systems enable limited co-existence of virtual objects next to each other. This co-existence suggests a pivot from closed structures towards opening up and approaching software as virtual objects that exist in the same space. Considering this opening through designing virtual objects that elevate their experiential and functional value when influencing each other is a step towards closer coupling of realities.</p>
        <h2>Conscious Implicitness.</h2>
        <p>When designing interfaces triggering implicitly from context, interface itself should be expandable and positioned and shaped for minimal distraction. Considering conscious implicitness involving trigger scenarios and interfaces makes input triggered contextually less obtrusive.</p>
        <h2>Learnings</h2>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Presence;
