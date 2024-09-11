import React, { useEffect, useRef, useState } from 'react';
import DayDate from "./DayDate.jsx";
import mediaData from '../components/Data/listPresence.json';

const LazyVideo = ({ src, alt, autoPlay, loop, muted, playsInline }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="media"
      src={isVisible ? src : ''}
      alt={alt}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
    />
  );
};

const MediaElement = ({ type, src, alt, descriptions }) => {
  return (
    <div className="media-container">
      {type === 'video' ? (
        <LazyVideo
          src={src}
          alt={alt}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        />
      ) : (
        <img className="media" src={src} alt={alt} />
      )}
      <div className="description-overlay">
        {descriptions.map((description, index) => (
          <span key={index} className="description-textbox">{description}</span>
        ))}
      </div>
    </div>
  );
};

function Presence() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Presence · Spatial Computing for Staying in the Moment.
        </h1>
        <p className="spacer">⌘</p>
        <video
          className="banner"
          src="img/work/presence/presencenew.mp4"
          alt=""
          controls
          autoPlay
          loop
          muted
          playsInline
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
          <p><em>The goal is to achieve a blended space where virtuality and physicality mix to leverage advantages of both. This should lead to physical objects that are more fluid and accessible in their nature and virtual objects that satisfy our senses and acknowledge us as physical beings.</em></p>
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
        <p>During this project I applied a research-through-design approach. I started out with a primary research phas reading literature like ADD LITERATURE. Then I conducted many interactive sketches to develop a feeling for underlying technologies like ADD TECHNOLOGIES. Afterwards I made a secondary literature research about ADD LITERATURE, built three prototypes to communicate and explore interaction fundamentals like ADD INTERACTION FUNDAMENTALS and formulated my insights into a thesis.</p>
        <img className='image-wide' src="" alt="image of process planning" />
        <h2>Sketching</h2>
        <p>Some sketches in the beginning explored vague ideas about contextually assembled user interfaces, implicit semantic input and integration of IoT as well as the materiality of Meta Presence SDK, object detection with YOLO V8 in augmented reality, structural outputs with GPT-4, running different shaders on the Quest's effect mesh, building display-drivers for custom LED Matrices to interface Unity via TCP-IP, Meta Depth API and co-location with Unity Netcode.</p>
        <h2>Object Detection on Passthrough for Scene Semantics</h2>
        <p>Running object detection on Meta's Passthrough for contextual understanding and as implicit input for interfaces.</p>
        <p className='block-quote'>Semantic input in mixed reality added utility but can also be distracting. Using it as a supplementation to primary input minimised distraction and made interfaces contextually relevant.</p>
        <img className='image-wide' src="" alt="" />
        <h2>Metaphorical Interface through Structured Outputs from LLM</h2>
        <p>Metaphorical description of behaviour through language to get structured outputs of GPT-4 as input into a particle system's configuration.</p>
        <p className='block-quote'>LLMs can be used as input system. With structured outputs as answers to prompts algorithms can be configured to generate a variety of different outputs besides text. The algorithm themselves can constrain the output to fit the context. </p>
        <img className='image-wide' src="" alt="" />
        <h2>Light, Shadow & Occlusion between Physical & Virtual Objects</h2>
        <p>Light and shadow receiver shaders and virtual representations of digital light to create light interactions between physical and virtual objects. Using render queue and Meta's Depth API for occlusion.</p>
        <p className='block-quote'>Accurate light and shadow interactions as well as occlusion between physical and virtual objects adds perceptual comfort to mixed reality experiences.</p>
        <img className='image-wide' src="" alt="" />
        <h2>Interfacing with IoT through Real-time Application</h2>
        <p>Networked client-server connection to make lamp interactable through augmented interface elements in mixed reality.</p>
        <p className='block-quote'>Adding a spatial relation to virtual interface elements and the physical objects they are controlling gives those elements a high degree of fluidity. This can be leveraged in terms of accessibility, personalisation and aesthetics.</p>
        <img className='image-wide' src="" alt="" />
        <h2>Co-located Multiplayer for Shared Experiences</h2>
        <p>Making a mixed reality scene experiencable for multiple people through networked game-objects, physics and hand-tracking data using Unity's Netcode infrastructure.</p>
        <p className='block-quote'>Non-verbal exchange between physically co-located people while exposed to the same virtual objects, changes the perceived meaning of these objects. Togetherness in mixed reality experiences sparks discourse, collaboration and sharing, while preventing discomfort through isolation and disconnection.</p>
        <img className='image-wide' src="" alt="" />
        <h2>Prototyping</h2>
        <p>After literature review and building twelve sketches, three more refined prototypes experiencable in one common space were crafted for further exploration of the potential of embodied software in the world.</p>
        <h2>Conversational Memory Portal</h2>
        <p>To build the memory portal a sphere geometry is animated to
            scale up when certain words are mentioned in a conversation.
            The transcription of the spoken language is done via OpenAI's
            Whisper API. Whisper is an automatic speech recognition
            system that allows transcribing multiple languages in chunks of
            30 seconds.19 Whisper cannot transcribe in real-time so for the
            prototype setting a work-around is used that pre-records a 10
            second chunk triggered by a hand pose and then sends an API
            request. Once the API request is answered (usually in 1-2
            seconds) it is parsed and a script checks for keywords triggering
            the animation. This setup turned out not to be optimal as it
            hindered the experience to feel fully implicit.
            A part of this experience was the ability to share it with a
            second user wearing a headset. For enabling virtual objects with
            consistent location, the ability to interact with them from both
            perspectives and synchronising the hand-tracking across
            applications for occlusion culling from both perspectives a
            multiplayer setup was build through Unity's Netcode
            infrastructure that synchronises data for all those aspects.
            The portal itself is a sphere geometry that clips a hole into the
            passthrough video feed used to superimpose the field of view
            into the application. This happens through a stencil buffer
            shader setup and setting up the render queue accordingly.
            Behind the passthrough layer another sphere has a 360° video
            mapped to it which becomes visible on the mesh of the portal
            when it is active.
            The portal has a proximity triggered handle similar to the
            previous prototype. This handle can be used to move the portal
            around in space to focus it on specific sections of the 360°
            video.
            The portal can be grabbed directly with one hand for adjusting
            its position or scaled up and down with a two handed grab
            interaction. If the portal exceeds a diameter of 28cm a script
            deactivates the sphere with the stencil shader, which makes the
            full 360° video representing the memory visible. It also spawns
            another sphere that has the passthrough layer rendered on it so
            users are able to still view parts of physical reality, when
            immersed in the memory.
            After some time in the memory a particle system representing
            butterflies is spawned, that once the portal is closed again
            persists in space as a continuation of the experience.
            The particle system is then animated to fly towards the desk
            lamp prototype. Once the physical lamp is reached by the
            butterflies it turns on and the butterflies interact with it in terms
            of light and shadow.
            </p>
        <h2>Spatially Responsive Music Player</h2>
        <p>The setup consists of a virtual music collection of three albums
            and a speaker represented in blended space. To reduce
            development time and complexity the functionality of the music
            player for the collection was reduced to transitioning between
            passive and active state, browsing through albums, playing and
            pausing them and switching audio output from the headsets
            speakers to a speaker in the room.
            Initially the music collection is in its passive state where the
            album covers are stacked on top of each other. On pressing on
            top of the stack the player expands in an animated fashion and
            the albums are arranged next to each other. Also a play/pause
            button appears in active state. If the player is not used and not
            engaged with for 30 seconds it cycles back into passive state.
            Positioned around the album covers there are three spherical
            handles, that are invisible in their base state. After a proximity
            threshold between the user and the player is reached they
            monitor the distance between the tip segments of the index
            fingers and the handles. If the index fingers are getting into a
            range of 20 cm to the handles their visibility increases smoothly.
            For gestures and poses the prototype makes use of Meta's
            Interaction SDK18 to derive and process data about interactions
            from the hand tracking. Used gestures are poke for pressing
            buttons like activation, play and pause, pinch for the handles, 2
            handed pinch for scaling the player, grab for the whole player
            and swipe for close- and far-range swiping through the album
            covers. A custom poke and rotate interaction was created to
            change where the album covers are facing towards. Used poses
            were a pointing pose as a play trigger and a stop pose as a hold
            trigger.
            Another possible form of interactions is voice transcription
            either through direct commands e.g. saying “play” and “pause”
            or indirect implicit command e.g. talking with someone about
            the music at a specific event. This was prototyped using
            OpenAI's Whisper API19
            .
            If the player is positioned atop a surface with the semantic
            description of table or shelf within a distance range of 0 to
            40cm, monitored through a sphere-cast, it projects a circular
            interface element onto this surface. This element can be used
            for rotating the covers to face into a certain position.
            </p>
        <h2>Desk Lamp in Blended Space</h2>
        <p>The setup consists of a 3D-printed inlay, to replace the standard
            bulb of an IKEA Tokabu desk lamp. This inlay carries a total
            of 70 NeoPixel LEDs. This LED matrix is controlled by a
            Genuino MKR-1000 microcontroller with WiFi capabilities.
            The Genuino establishes a network server via TCP/IP and runs
            logic for handling mapped RGBA values to drive the matrix like
            a display from a Unity camera output.
            A light-weight Unity application setup with the build-in render
            pipeline running on a M2 MacBook Air subscribes to this server
            as a client. This application contains logic and a custom
            renderer feature that translates a camera output displaying a
            shader to a byte array containing the RGBA data to send it over
            the network with low latency and control the matrix at an
            adjustable refresh-rate.
            The displayed shader can be configured to react to data input
            coming from another Unity application running on the Quest 3
            headset. The application on the headset handles the rendering
            of the virtual objects as well as generation of the generic scene
            model necessary for blending realities in terms of lighting and
            hyper-physical phenomena. It also measures intent of adjusting
            the lamp’s settings based on gaze direction. It provides a
            contextual palm menu to adjust brightness and colour when in
            world interaction space and contextual buttons when the index
            finger moves towards it in hand interaction space.
            This split setup with two separate applications was chosen
            because the universal render pipeline used to run the Quest
            application for fidelity reasons did not support a C#
            functionality for converting the pixel data into a byte array. A
            better setup would run entirely on the headset and just off-load
            the driving of LEDs and network configuration to the Genuino.
        </p>
        <h2>Outcome</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus consequatur, eum, nostrum, beatae quod enim soluta accusantium adipisci dolores itaque praesentium distinctio illum deserunt qui alias laborum non placeat.</p>
        <div className="line-projects"></div>
        <div className="grid">
          {mediaData.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((media, colIndex) => (
                <div className="col" key={colIndex}>
                  <MediaElement
                    type={media.type}
                    src={media.src}
                    alt={media.alt}
                    descriptions={media.descriptions}
                  />
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

export default Presence;
