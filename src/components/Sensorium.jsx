import React, { Suspense } from 'react';
import DayDate from "./DayDate.jsx";
import { Canvas } from '@react-three/fiber';
import { CineonToneMapping} from 'three';
import { Splat, OrbitControls, Environment, useGLTF} from '@react-three/drei'; 

function CupraWearable() {
  const { scene } = useGLTF('glb/cuprawearable.glb');
  
  return <primitive object={scene} />;
}

function CupraSensorsActuators() {
  const { scene } = useGLTF('glb/cuprasensoriumsensoractuators.glb');
  
  return <primitive object={scene} />;
}

function Sensorium() {

  return (
    <div className="container"  >
      <div className="text-block">

        <DayDate /> 

        <h1>Sensorium · Real-time Vehicle Experience Prototype</h1>
        
        <p className="spacer">⌘</p>
        
        <img className="banner" src="img/banner/sensoriumbanner.png" alt="Banner of the Project Sensorium by Lukas Moro"/>

        <ul className="tools">
          <li className="tool">UNITY</li>
          <li className="tool">C#</li>
          <li className="tool">URP</li>
          <li className="tool">BLENDER</li>
          <li className="tool">ARDUINO</li>
          <li className="tool">FIGMA UNITY BRIDGE</li>
          <li className="tool">ULTRALEAP SDK</li>
          <li className="tool">TCP/IP</li>
          <li className="tool">GPGPU</li>
          <li className="tool">RHINO 3D</li>
          <li className="tool">TABLESAW</li>
          <li className="tool">WOODGLUE</li>
          <li className="tool">PRUSA</li>  
        </ul>

        <ul className="process">
          <li>Duration: 10 Weeks, Autumn 2023</li>
          <li>Collaboration Partner: Cupra Design Team</li>
          <li>Team: <a target="_blank" rel="noreferrer" href="https://rohitdongre-portfolio.com">Rohit Dongre</a>, <a target="_blank" rel="noreferrer" href="https://rohitdongre-portfolio.com">Regina Gensinger</a>, <a target="_blank" rel="noreferrer" href="https://www.charlottemphilippe.com">Charlotte Phillip</a> & Lukas Moro</li>
          <li>Contribution: Concept & Prototyping</li>
        </ul>

        <h2>In-Short</h2>

        <p>Sensorium is a vehicle interior for level 4 autonomy. It is part of an ecosystem of shared vehicles that are accessible to the members of the brand.</p>
        
        <p className="block-quote">The interior is a canvas for personal expression, stimulating experience and signaling the intelligence of the vehicle. A digital twin processes all sensoric input and curates experiences tailored to the individual and moment.</p>
        
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

        <p><a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Physarum_polycephalum">Physarum Polycephalum</a>, also refered to as "the blob" is an accelular slime mold and the core inspiration for the theme of this interior experience. In nature physarum exhibits fascinating situational and intelligent behaviors in its growing patterns and problem-solving abilities. Due to its alien-like aestethic and situational flexibility it fits the brands current values and guides it towards the desired value of "perceived intelligence". </p>
            
        <div className="grid">
          <div className="row">
              <img className="col" src="img/work/sensorium/physarum.jpg" alt="Physarum Polycephalum"></img>
          </div>
        </div>
           
        <p>"Tribal belonging" is another pillar of Cupra's brand identity, currently this is expressed in lifestyle and fashion accessories, video-game assets and brand events. We designed a custom 3D-printed wearable that signals belonging to the tribe and is handed over to new customers of the shared riding ecosystem. The wearable through a RFID tag functions as a key for unlocking vehicle and experience. It contains actuators for haptic feedback from the car and sensorics that gather biometric data points for personalising the riding experience.</p>
           
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/sensorium/brandidentiy.gif" alt="'Tribal Belonging' Cupra Brand Identity by 10TOTOKYO"></img>
          </div>
        </div>
          
        <p>Once a member enters an ordered car they can choose to personalise their experience, consisting of spatial projections, music and haptic feedback on the wearable and seat-belts, through a handgesture. Then the feeding and retention environment of the physarum "growing" in the car picks up the person's data from historic rides, the biometrics measured by the wearable and the current situation of the car which leads to an unique pattern of growth. This pattern of growth communicates cues about the passenger's state and personality to the other passengers and facilitates interactions between different tribal members and a strong connection to Cupra as a brand as it becomes a mean of expression to the passenger.</p>
          
        <iframe width="600" height="315" src="https://www.youtube.com/embed/CvNsjwZBVPE?si=QSuC1epmu9y6eMOm"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
        <h2>Process</h2>
        
        <p>With ten weeks to deliver a car interior and functional prototype the process was fast-paced. As a team we established an effective time structure where after inital scoping and ideation, we worked on individual contributions that where then alligned in 3 weekly meetings discussing overall concept direction and alignement of outcomes. My contribution to the project was creating fast sketches to make our ideas experiencable when we had them, the idea of physarum as a core theme and the physical and technical prototyping.</p>
        
        <h2>Sketching</h2>
        
        <p>To validate and discuss our ideas quickly technical sketches to experience them first hand were created.</p>
        
        <div className="grid">
          <div className="row">
              <img className="col" src="img/work/sensorium/sensoriumday1.jpg" alt="Sketch of a Particle System Projection in a Car Interior by Lukas Moro" />
              <img className="col" src="img/work/sensorium/sensoriumbelt.png" alt="Sketch of Haptic Seat Belts by Lukas Moro" />
          </div>
        </div>
          
        <p>First sketches included real-time projections in combination with wizard-of-oz haptic seat-belts and unlocking and mixing experiences through RFID tags.</p>
        
        <div className="grid">
          <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumnfc.mp4" alt="Sketch using an Arduino NFC Shield to change Projections by Lukas Moro" autoPlay muted loop playsInline />
              <img className="col" src="img/work/sensorium/sensorium2.png" alt="Sketch using Servo Motors, Arduino NFC Shield and Hapticlabs to showcase Digital Twin by Lukas Moro" />
          </div>
        </div>
          
        <p> Later sketches included controlling actuation, shaders for projection and sensor input out of one central Unity application. During this stage most sketches were created in down-scaled versions for speed.</p>

        <div className='grid'>
          <div className="row">
            <img className="col" src="img/work/sensorium/sensorium5.png" alt="Setting up the Scale Model of the Sensorium System by Lukas Moro" />
            <video className="col" src="img/work/sensorium/lilseat.mp4" autoPlay muted loop playsInline alt="Scale Model of the Sensorium System by Lukas Moro"></video>
          </div>
        </div>
          
        <h2>Prototyping</h2>

        <p>The goal for the prototype was to make the user-journey we mapped out experiencable first-hand, while being controlled by a digital twin putting Rohit's design for the interior geometry in context of the experience. The user-journey consisted of the following moments:</p>
          
        <ul className="dotted-list">
          <li>Launching the physarum projections when getting close to the car.</li>
          <li>Haptic feedback on the wearable when in direct proximity as a welcoming signal.</li>
          <li>Personalising the experience and launching instrument panel through the wearable.</li>
          <li>Tensioning of the seat-belts to comfort the passenger.</li>
          <li>Starting the driving via a hand-gesture signaling a hand-over of personal data.</li>
          <li>Physarum reacting to personal and audio data.</li>
          <li>Taking over control with a hand gesture. Physarum dimming down for better focus.</li>
          <li>Controlling the car through hand translation and rotation.</li>
          <li>Physarum changes colour saturation based on heart-beat of the driver.</li>
          <li>Asymetric haptic feedback on seatbelts and wearable for thrilling curve experience.</li>
          <li>All events synchronised with and controlled by digital twin.</li>
        </ul>
        
        <h2>Digital Twin</h2>
        
        <p>The application controlling the prototype contains a geometry of the final interior shape that mirror's the behaviour of the physical prototype. This digital twin was used to evaluate the visuals in the context of the final interior shape. To make data-flows leading to behaviours more visible spheres were added at the postions of the sensors and actuators. When a sensor or actuator is active those spheres blink either in green for sensors or in pink for actuators.</p>
        
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/sensorium/digitaltwin.png" alt="Unity Game View of Sensorium's Digital Twin by Lukas Moro"></img>
          </div>
        </div>

        <h2>Sensors</h2>

        <p>The prototype perceives the world through an IR distance sensor mounted at the entry, a Leap Motion hand-tracking kit, a heart-rate sensor on the wearable and a RFID reader mounted on the seatbelt buckle.</p>

        <div className="canvas-container-sensorium">
          <Canvas gl={{antialias: true, toneMapping: CineonToneMapping, }} camera={{ position: [0, 1.7, -2.5], zoom:1.2}}>
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
            <group position={[-0.15, 0.15, 0.3]} rotation={[0, Math.PI / 3.6, 0]}>
              <CupraSensorsActuators />
              <Splat
                position={[0, 0.1, 0.075]}
                src="https://huggingface.co/datasets/lukasmoro/gaussiansplatssensorium/resolve/main/gs_Sensorium-round.splat"
              />
            </group>
            <Environment files="hdri/rosendal_park_sunset_puresky_2k.hdr" />
          </Canvas>
        </div>

        <h2>Actuators</h2>

        <p>The prototype communicates through four servos mounted at the ends of the seatbelts, one linear resonance and one voice coil actuator positioned on the finger and wrist of the passengers. Visually it output the intrument panel projected to a transluscent sheet of PMMA in front of the passenger and spatial projections directly on the driver as well as on the collective interior canvas. It also outputs music when a personalised experience is started.</p>
        
        <div className="canvas-container">
          <Canvas gl={{antialias: true, toneMapping: CineonToneMapping}} camera={{ position: [0, 0.2, 0.7], zoom: 4  }}>
            <Suspense fallback={null}>
              <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                <CupraWearable />
                <Environment files="hdri/rosendal_park_sunset_puresky_2k.hdr" />
            </Suspense>
          </Canvas>
        </div>

        <h2>Haptic & Biometric Wearable</h2>

        <p>The haptic wearable is a 3D-printed glove that is worn on the left hand. Every new member of the Cupra driving eco-system receives a personalised wearable as an expression of belonging into the Cupra tribe. The wearable serves as an identicator, biometric sensor and gives haptic feedback. </p>
        
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/sensorium/sensorium18.png" alt="Sensorium IR Distance Sensor on Buck by Lukas Moro" />
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin2.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Welcome' Gesture in Unity by Lukas Moro"></video>
          </div>
            <div className="row">
              <video className="col" src="img/work/sensorium/sensoriumsensorics.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Welcome' Gesture in Physical Reality by Lukas Moro"></video>
            </div>
        </div>

        <p>It carries an RFID tag that is scanned when the seatbelt is closed and triggers the personalisation of the experience. It uses a Genuino MKR1000 with a pulse sensor to wirelessly stream the passengers current heart-rate into the Unity main application via TCP/IP. This biometric signal is one of the inputs of the generated visual for the projections. For the haptic feedback on the wearable a Hapticlabs satellite (ESP32 with two on- board haptic drivers) is used with one linear resonance and one voice coil actuator positioned on the wrist and between index and middle finger. The Hapticlabs satellite is also connected with the main application through serial connection, which facilitate the driving signals at certain trigger points. Haptic feedback is supplied to the passengers at points of direct interaction with the car, namely approaching it, activating collective experiences, taking over the steering and at steering angle maximums.</p>

        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/sensorium/sensorium16.png" alt="Sensorium Wearable with Genuino MKR-1000, Heart-Rate Sensor, NFC Tag and Hapticlabs Satellite by Lukas Moro" />
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin1.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Unlocking' Gesture in Unity by Lukas Moro"></video>
          </div>
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumunlock.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Unlocking' Gesture in Physical Reality by Lukas Moro"></video>
          </div>
        </div>

        <h2>Haptic Seatbelts</h2>

        <p>With our autonomous concept we assumed the need for a deeper connection between passengers and the car. Therefore we came up with haptic seatbelts which depending on the situation of the car through tensioning and releasing either give a thrilling or a comforting haptic feedback to the passengers.</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin3.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Active Seatbelt Servos in Unity by Lukas Moro"></video>
            <img className="col" src="img/work/sensorium/sensorium17.jpg" alt="Sensorium Seatbelt Servos on Buck by Lukas Moro"/>
          </div>
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumactuators.mp4" autoPlay muted loop playsInline alt="Sensorium Buck Active Seatbelt Servos in Physical Reality by Lukas Moro"></video>
          </div>
        </div>

        <p>This was prototyped through four HS422 servos mounted to linear actuators at the end of the seatbelts. The servos are controlled by hard-coded events on their Arduino Uno micro-controller, which are triggerd from the Unity main application via another serial port during sensed situations. The events are soft pull (as welcoming gesture from the car), hard pull (as protective signal in emergencies), left and right pull (when actively driving to emphasise the feeling of the curve) and release (as indicator that a passenger is now controlling the car).</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumright.mp4" autoPlay muted loop playsInline alt="Sensorium Buck Curve Seatbelt Servos in Physical Reality by Lukas Moro"></video>
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin8.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Curve Seatbelt Servos in Unity by Lukas Moro"></video>
          </div>
        </div>
        
        <h2>Handtracking</h2>

        <p>Gestures are the main interaction paradigm with the vehicle. A grab and release gesture is performed for handing over one's personal data. Touching the interior at a certain position for taking over the steering. Global X translation and local Y rotation of the left hand are used for steering. All those gestures are accompanied by haptic feedback on wearable and seatbelts and change the states of the instrument panel and shaders.</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumhandtracking1.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Handoff' Gesture with Dashboard in Physical Reality by Lukas Moro"></video>
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin4.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Handoff' Gesture with Dashboard in Unity by Lukas Moro"></video>
          </div>
        </div>

        <p>They are implemented through a Leap Motion that is integrated into the Unity application via Ultraleap's SDK and variations of its standard gestures, collision volumes and translation/rotation of the hands.</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin7.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Steering' Gesture with Dashboard in Unity by Lukas Moro"></video>
            <video className="col" src="img/work/sensorium/sensoriumhandtracking2.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Steering' Gesture with Dashboard in Physical Reality by Lukas Moro"></video>
          </div>
        </div>

        <h2>Spatial Projections & Dashboard</h2>

        <p>The prototype is lit by three different projections. Two projection canvases display the interactive physarum visual, one directly on the passenger and the other one on the ambient canvas that is located around the passengers. </p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin10.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Spatial Physarum Compute Shader Projections in Unity by Lukas Moro"></video>
            <video className="col" src="img/work/sensorium/sensoriumprojection1.mp4" autoPlay muted loop playsInline alt="Sensorium Buck Spatial Physarum Compute Shader Projections in Physical Reality by Lukas Moro"></video>
          </div>
        </div>

        <p>The physarum is simulated through a compute shader inspired by <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@SebastianLague">Sebastian Lague</a>. It uses an algorithm that imitates growth behaviour of physical physarum organisms. When launching the self-driving experience it starts reacting to the music played in the interior. The turquoise strain's color changes with the heart rate of the driver. When taking over control the more active audo-reactive strain dimms down for preventing distraction.</p>
          
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumdigitaltwin5.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Audio-Reaction of Physarum Compute Shader Projections in Unity by Lukas Moro"></video>
            <video className="col" src="img/work/sensorium/sensoriumprojection2.mp4" autoPlay muted loop playsInline alt="Sensorium Buck Audio-Reaction of Physarum Compute Shader Projections in Physical Reality by Lukas Moro"></video>
          </div>
        </div>
        
        <p>The third projection houses the dashboard of the car. It was designed by Regina in Figma and the ported to Unity and animated by me. All visuals including the interface on the dashboard are controlled by the same Unity application. This allows for a coherent, synchronised and spatial user experience, where all elements are updated with input changes from user or environment.</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/sensorium/sensoriumprojection3.mp4" autoPlay muted loop playsInline alt="Sensorium Buck HMI Dashboard made in Figma & Unity in Physical Reality by Lukas Moro"></video>
          </div>
        </div>

        <h2>Outcome</h2>

        <p>Sensorium as a concept invites people to join a club that fosters personal expression and exchange with like minded individuals, which ultimately can lead to a strong authentification with the brand and sustainable transportation practices. As a design intervention it integrates a multi-sensory and real-time interior experience with an expressively shaped interior design. The whole user-journey is made tangible first-hand through a functional prototype and put into the context of the final design through the visualisation of the digital twin.</p>
        
        <h2>Learning</h2>

        <p>I am proud of the holistic implementation of our user-journey in a functional prototype during this project, however I also think that I sometimes took an extra mile that would have not been necessary for communication. The scope and balance of functional implementation versus needed fidelity for effective communication is something I want to prioritise more rigorousl for future sketches and prototypes. Choosing the right fidelity when creating functional sketches also turned out to be important to not inhibit the creative process.</p>
        
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/sensorium/sensorium1.png" alt="Sensorium Buck in Physical Reality & Unity by Lukas Moro"/>
          </div>
        </div>

        <div className="bottom-work"></div>

      </div>
  </div>
  );
}

export default Sensorium;
