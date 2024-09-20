import React from "react";
import DayDate from "./DayDate.jsx";
import { Canvas } from '@react-three/fiber';
import Splat from './Splat.jsx';
import Geometry from "./Geometry.jsx";
import { CineonToneMapping } from 'three';
import { AdaptiveDpr, OrbitControls } from '@react-three/drei'; 

function Sensorium() {

  return (
    <div className="container"  >
      <div className="text-block">
           <DayDate /> 
          <h1>
            Sensorium · Real-time Vehicle Experience Prototype
          </h1>
          <p className="spacer">⌘</p>
          <img
            className="banner"
            src="img/work/sensorium/sensorium.jpg"
            alt="banner of sensorium"
          />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">BLENDER</li><li className="tool">ARDUINO</li><li className="tool">FIGMA UNITY BRIDGE</li><li className="tool">ULTRALEAP SDK</li><li className="tool">TCP/IP</li><li className="tool">GPGPU</li><li className="tool">RHINO 3D</li><li className="tool">TABLESAW</li><li className="tool">WOODGLUE</li><li className="tool">PRUSA</li></ul>
        <ul className='process'>
          <li>Duration: 10 Weeks, Autumn 2023</li>
          <li>Collaboration Partner: Cupra Design Team</li>
          <li>Team: <a href="https://rohitdongre-portfolio.com">Rohit Dongre</a>, <a href="https://rohitdongre-portfolio.com">Regina Gensinger</a>, <a href="https://www.charlottemphilippe.com">Charlotte Phillip</a> & Lukas Moro</li>
          <li>Contribution: Concept & Prototyping</li>
        </ul>
        <h2>In-Short</h2>
          <p> 
            Sensorium is a vehicle interior for level 4 autonomy. It is part of an ecosystem of shared vehicles that are accessible to the members of the brand. The interior is a canvas for personal expression, stimulating experience and signaling the intelligence of the vehicle. A centralised digital twin processes all sensoric input and curates experiences tailored to the individual and moment.
          </p>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro"
          >
            ↳ GitHub Repository
          </a>
          </div>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/sensorium.pdf"
          >
            ↳ In-Depth PDF
          </a>
          </div>
          <h2>Concept</h2>
          <p> Physarum polycephalum, commonly refered to as "the blob" is an accelular slime mold and the core inspiration for the theme of this interior experience. In nature physarum exhibits fascinating situational and intelligent behaviors in its growing patterns and problem-solving abilities. Due to its alien-like aestethic and situational flexibility it fits the brands current values and guides it towards the desired value of "perceived intelligence". </p>
            <div className="grid">
              <div className="row">
                <img className="col" src="img/work/sensorium/physarum.jpg"></img>
              </div>
          </div>
           <p>"Tribal belonging" is another pillar of Cupra's brand identity, currently this is expressed in lifestyle and fashion accessories, video-game assets and brand events. We designed a custom 3D-printed wearable that signals belonging to the tribe and is handed over to new customers of the shared riding ecosystem. The wearable through an RFID tag functions as a key for unlocking vehicle and experience. It also contains actuators for haptic feedback from the car and sensorics that gather biometric data points for personalising the riding experience.</p>
           <div className="grid">
              <div className="row">
                <img className="col" src="img/work/sensorium/brandidentiy.gif"></img>
              </div>
          </div>
          <p>Once a member enters an ordered car they can choose to personalise their experience, consisting of spatial projections, music and haptic feedback on the wearable and seat-belts, through a handgesture. Then the feeding and retention environment of the physarum "growing" in the car picks up the person's data from historic rides, the biometrics measured by the wearable and the current situation of the car which leads to a unique pattern of growth. This pattern of growth communicates cues about the passenger's state and personality to the other passengers and facilitates interactions between different tribal members and a strong connection to Cupra as a brand as it becomes a mean of expression to the passenger.</p>
          <iframe width="600" height="315" src="https://www.youtube.com/embed/CvNsjwZBVPE?si=QSuC1epmu9y6eMOm"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h2>Process</h2>
          <p>With ten weeks to deliver a car interior and functional prototype the process was naturally fast-paced. As a team we established an effective time structure where after inital scoping and ideation, we worked on individual contributions that where then alligned in 3 weekly meetings discussing overall concept direction and alignement of outcomes. My contribution to the project was creating fast sketches to make our ideas experiencable when we had them, the idea of physarum as a core theme and the physical and technical prototyping.</p>
          <div className="grid-process">
          <div className="row-process">
              <img className="col-process" src="img/work/sensorium/sensoriumday1.jpg" alt="" />
              <img className="col-process" src="img/work/sensorium/sensoriumdealership.jpg" alt="" />
              <img className="col-process" src="img/work/sensorium/sensoriumbelt.png" alt="" />
              <img className="col-process" src="img/work/sensorium/sensoriumsketcho1.jpg" alt="" />
            </div>
            <div className="row-process">
              <img className="col-process" src="img/work/sensorium/sensorium3.png" alt="" />
              <img className="col-process" src="img/work/sensorium/sensorium6.png" alt="" />
              <img className="col-process" src="img/work/sensorium/sensorium4.png" alt="" />
              <img className="col-process" src="img/work/sensorium/sensorium8.png" alt="" />
            </div>
            <div className="row-process">
              <img className="col-process" src="img/work/sensorium/sensorium9.png" alt="" />
              <img className="col-process" src="img/work/sensorium/sensorium12.png" alt="" />
              <img className="col-process" src="img/work/sensorium/sensorium11.png" alt="" />
              <img className="col-process" src="img/work/sensorium/sensorium13.png" alt="" />
            </div>
          </div>
          <h2>Sketching</h2>
          <p>Our limited time schedule forced us to enter concept stage without conducting much user-research. In order to validate and discuss our ideas I created technical sketches to quickly experience them first hand. Here I figured out the importance of keeping a balance between not getting overly attached to an immature early idea and iterating on a more holistic sketch to accelerate the decision making process in the team. Sketches conducted included real-time spatial projections in combination with wizard-of-oz haptic seat-belts, unlocking and mixing experiences through RFID tags and controlling actuation and sensor input out of one central Unity application. During this stage most sketches were created in down-scaled versions for implementation speed.</p>
          <div className="grid">
          <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumnfc.mp4" autoPlay muted loop playsInline />
              <img className="col" src="img/work/sensorium/sensorium2.png" alt="" />
            </div>
            <div className="row">
              <img className="col" src="img/work/sensorium/sensorium5.png" alt="image of small proto" />
              <video className="col" src="img/work/sensorium/lilseat.mp4" autoPlay muted loop playsInline></video>
            </div>
          </div>
          <h2>Prototyping</h2>
          <p>The goal for the prototype was to make the whole user-journey we mapped out experiencable first-hand, while being controlled by a digital twin marrying Rohit's design for the interior geometry with the experience. The user-journey contained the following hero moments:</p>
          <ul className="numbered-list">
            <li>Launching physarum when close to the car.</li>
            <li>Welcoming haptic feedback on wearable when in direct proximity.</li>
            <li>Personalising the experience and launching instrument panel through the wearable.</li>
            <li>Tensioning of the seat-belts to comfort the passenger.</li>
            <li>Starting the driving via a hand-gesture signaling a hand-over of one's personal data.</li>
            <li>Experience physarum's reaction to personal and audio data.</li>
            <li>Taking over the steering wheel through another gesture leading, physarum to torn down for better focus.</li>
            <li>Controlling the car through hand translation and rotation.</li>
            <li>Physarum changes colour saturation based on heart-beat of the driver.</li>
            <li>Asymetric haptic feedback on seatbelts and wearable to emphasize driving experience in curves.</li>
            <li>All events synchronised on digital twin. To illustrate experience within final interior design.</li>
          </ul>
          <p>To get proportions and package for mounting the micro-controllers, sensorics and actuators right I cadded a plan in Rhino 3D. Then I cutted and printed out all the needed parts in the workshop and assembled the basic structure of the interior. Next I mounted all the needed micro-controllers, added cabling, sensorics, actuators, the seatbelts that were made by Charlotte and a powersupply for the servos. Lastly I setup projectors and the PC running the Unity application controlling the experience.
          </p>
        <div className="canvas-container">
        <Canvas
        gl={{
          antialias: false,
          toneMapping: CineonToneMapping,
        }}
        camera={{ position: [0, 1.7, -3.2] }}
        >
          <AdaptiveDpr pixelated />
          <OrbitControls />
          <Splat />
        </Canvas>
        </div>
        <h2>Sensors</h2>
        <p>The prototype perceives the world through an IR distance sensor mounted at the entry, a Leap Motion hand-tracking kit, a heart-rate sensor on the wearable and a RFID reader mounted on the seatbelt buckle. The sensors are visualised as green spheres in the digital twin. If active they light up.</p>
        <div className="grid">
            <div className="row">
              <img className="col" src="img/work/sensorium/sensorium18.png" alt="image of wearable" />
              <video className="col" src="img/work/sensorium/sensoriumdigitaltwin2.mp4" autoPlay muted loop playsInline></video>
            </div>
            <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumsensorics.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Actuators</h2>
        <p>The prototype communicates with the world through four servos mounted at the ends of the seatbelts, one linear resonance and one voice coil actuator positioned on the finger and wrist of the passengers. Visually it output the intrument panel projected to a transluscent sheet of PMMA in front of the passenger and spatial projections directly on the driver as well as on the collective interior canvas. It also outputs music when a personalised experience is started.</p>
        <div className="grid">
            <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin3.mp4" autoPlay muted loop playsInline></video>
              <img className="col" src="img/work/sensorium/sensorium17.jpg" alt="video of sketch small proto" />
            </div>
            <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumactuators.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
        <h2>Handtracking</h2>
        <p>Hand-tracking gestures are the main interaction paradigm with the vehicle. A grab and release gesture is performed for handing over one's personal data. Touching the interior at a cerain position for taking over the steering. Global X translation and local Y rotation of the left hand are used for steering. All those gestures are accompanied by haptic feedback on wearable and seatbelts.</p>
        <div className="grid">
              <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumhandtracking1.mp4" autoPlay muted loop playsInline></video>
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin4.mp4" autoPlay muted loop playsInline></video>
              </div>
          </div>
          <p>It is implemented through a Leap Motion that is directly integrated into the Unity application via Ultraleap's SDK.</p>
          <div className="grid">
              <div className="row">
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin7.mp4" autoPlay muted loop playsInline></video>
                <img className="col" src="img/work/sensorium/sensorium14.jpg" alt="video of sketch small proto" />
              </div>
          </div>
          <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumhandtracking2.mp4" autoPlay muted loop playsInline></video>
            </div>
        <h2>Haptic & Biometric Wearable</h2>
        <p>The haptic wearable is a 3D-printed glove that is worn on the left hand. Every new member of the Cupra driving eco-system receives a personalised wearable as an expression of belonging into the Cupra tribe. The wearable serves as an identicator, biometric sensor and gives haptic feedback. </p>
        <div className="grid">
          <div className="row">
            <div className="col">
              <div className="canvas-container">
                  <Canvas
                  gl={{
                    antialias: true,
                    toneMapping: CineonToneMapping,
                  }}
                  camera={{ position: [0, 0, 0.155] }}
                > 
                  <directionalLight
                      position={[5, 10, 5]}
                      intensity={5}
                      castShadow
                      shadow-mapSize-width={1024}
                      shadow-mapSize-height={1024}
                      shadow-camera-far={50}
                      shadow-camera-near={0.1}
                      shadow-camera-left={-10}
                      shadow-camera-right={10}
                      shadow-camera-top={10}
                      shadow-camera-bottom={-10}
                  />
                  <pointLight position={[-5, 5, 5]} intensity={1.4} />
                  <pointLight position={[0, 5, -5]} intensity={1.5} />
                  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                  <Geometry path="glb/cuprawearable.glb" />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
        <p>It carries an RFID tag that is scanned when the seatbelt is closed and triggers the personalisation of the experience. It uses a Genuino MKR1000 with a pulse sensor to wirelessly stream the passengers current heart-rate into the Unity main application via TCP/IP. This biometric signal is one of the inputs of the generated visual for the projections. For the haptic feedback on the wearable a Hapticlabs satellite (ESP32 with two on- board haptic drivers) is used with one linear resonance and one voice coil actuator positioned on the wrist and between index and middle finger. The Hapticlabs satellite is also connected with the main application through serial connection, which facilitate the driving signals at certain trigger points. Haptic feedback is supplied to the passengers at points of direct interaction with the car, namely approaching it, activating collective experiences, taking over the steering and at steering angle maximums.</p>
        <div className="grid">
              <div className="row">
                <img className="col" src="img/work/sensorium/sensorium16.png" alt="" />
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin1.mp4" autoPlay muted loop playsInline></video>
              </div>
              <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumunlock.mp4" autoPlay muted loop playsInline></video>
            </div>
          </div>
        <h2>Haptic Seatbelts</h2>
        <p>With our autonomous concept we assumed the need for a deeper connection between passengers and the car. Therefore we came up with haptic seatbelts which depending on the situation of the car through tensioning and releasing either give a thrilling or a comforting haptic feedback to the passengers.</p>
        <div className="grid">
              <div className="row">
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin3.mp4" autoPlay muted loop playsInline></video>
                <div className="col" src="" alt="" />
              </div>
              <div className="row">
            <img className="col" src="img/work/sensorium/sensorium18.png" alt="image of wearable" />
            </div>
          </div>
        <p>This was prototyped through four HS422 servos mounted to linear actuators at the end of the seatbelts. The servos are controlled by hard-coded events on their Arduino Uno micro-controller, which are triggerd from the Unity main application via another serial port during sensed situations. The events are soft pull (as welcoming gesture from the car), hard pull (as protective signal in emergencies), left and right pull (when actively driving to emphasise the feeling of the curve) and release (as indicator that a passenger is now controlling the car).</p>
        <div className="grid">
              <div className="row">
                <div className="col" src="" alt="" />
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin8.mp4" autoPlay muted loop playsInline></video>
              </div>
              <div className="row">
                <img className="col" src="img/work/sensorium/sensorium18.png" alt="image of wearable" />
              </div>
          </div>
        <h2>Spatial Projections & Dashboard</h2>
        <p>The prototype is populated by three different projections. Two canvases display the interactive physarum visual, one directly on the passenger and the other one on the ambient canvas that is located around the passengers. </p>
        <div className="grid">
              <div className="row">
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin10.mp4" autoPlay muted loop playsInline></video>
                <div className="col" src="" alt="" />
              </div>
              <div className="row">
            <img className="col" src="img/work/sensorium/sensorium18.png" alt="image of wearable" />
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus soluta tempora enim iusto exercitationem excepturi asperiores pariatur? Dolore, labore error magni et in nihil accusantium nulla? Alias necessitatibus unde possimus?</p>
          <div className="grid">
              <div className="row">
                <div className="col" src="" alt="" />
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin5.mp4" autoPlay muted loop playsInline></video>
              </div>
              <div className="row">
            <img className="col" src="img/work/sensorium/sensorium18.png" alt="image of wearable" />
            </div>
          </div>
        <p>The third projection houses the dashboard of the car. It was designed by Regina in Figma and the ported to Unity and animated by me. All visuals including the interface on the dashboard are controlled by the same Unity application. This allows for a coherent, synchronised and spatial user experience, where all elements are updated with input changes from user or environment.</p>
        <div className="grid">
              <div className="row">
                <video className="col" src="img/work/sensorium/sensoriumdigitaltwin3.mp4" autoPlay muted loop playsInline></video>
                <div className="col" src="" alt="" />
              </div>
              <div className="row">
            <img className="col" src="img/work/sensorium/sensorium18.png" alt="image of wearable" />
            </div>
          </div>
        <h2>Digital Twin</h2>
        <p>The application controlling the prototype contains a geometry of the final interior shape that mirror's the behaviour of the physical prototype. This digital twin was used to evaluate the visuals in the context of the final interior shape. To make data-flows leading to behaviours more visible spheres were added at the postions of the sensors and actuators. When a sensor or actuator is active those spheres blink either in green for sensors or in pink for actuators.</p>
        <div className="grid">
              <div className="row">
                <img className="col" src="img/work/sensorium/digitaltwin.png"></img>
              </div>
          </div>
        <h2>Outcome</h2>
        <p>Sensorium as a concept invites people to join a club that fosters personal expression and exchange with like minded individuals, which ultimately can lead to a strong authentification with the brand and sustainable transportation practices. As a design intervention it integrates a multi-sensory and real-time interior experience with an expressively shaped interior design. The whole user-journey is made tangible first-hand through a functional prototype and put into the context of the final design through the visualisation of the digital twin.</p>
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/sensorium/sensorium1.png" alt="" />
          </div>
        </div>
        <h2>Learning</h2>
        <p>I am proud of the holistic implementation of our user-journey in a functional prototype during this project, however I also think that I sometimes took an extra mile that would have not been necessary for communication. The scope and balance of functional implementation versus needed fidelity for effective communication is something I want to prioritise more rigorousl for future sketches and prototypes. Choosing the right fidelity when creating functional sketches also turned out to be important to not inhibit the creative process.</p>
        <div className="bottom-work"></div>
      </div>
  </div>
  );
}

export default Sensorium;
