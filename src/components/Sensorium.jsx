import React, { useState } from 'react';
import DayDate from "./DayDate.jsx";
import { Canvas } from '@react-three/fiber';
import { CineonToneMapping} from 'three';
import { Splat, OrbitControls, Environment, useGLTF} from '@react-three/drei'; 
import { useSpring, animated } from '@react-spring/three';
import LazyLoadVideo from './LazyLoadVideo';
import LazyLoadImage from './LazyLoadImage';
import { useInView } from 'react-intersection-observer';

function CupraWearable() {
  const { scene } = useGLTF('glb/sensoriumwearable.glb');
  
  return <primitive object={scene} />;
}

function ActuatorBuck(props) {
  const { handleHover, handleLeave, description } = props;
  const [hovered, setHovered] = useState(false);

  const { scale, color } = useSpring({
    scale: hovered ? [0.1, 0.1, 0.1] : [0.05, 0.05, 0.05],
    color: hovered ? '#ff69b4' : '#898989',
    config: { tension: 400, friction: 12, mass: 1.5 },
  });

  return (
    <animated.mesh
      {...props}
      scale={scale}
      onPointerOver={() => { setHovered(true); handleHover(description); }}
      onPointerOut={() => { setHovered(false); handleLeave(); }}
    >
      <sphereGeometry />
      <animated.meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={1}
        toneMapped={false}
      />
    </animated.mesh>
  );
}

function SensorBuck(props) {
  const { handleHover, handleLeave, description } = props;
  const [hovered, setHovered] = useState(false);

  const { scale, color } = useSpring({
    scale: hovered ? [0.1, 0.1, 0.1] : [0.05, 0.05, 0.05],
    color: hovered ? '#adebb3' : '#898989',
    config: { tension: 400, friction: 12, mass: 1.5 },
  });

  return (
    <animated.mesh
      {...props}
      scale={scale}
      onPointerOver={() => { setHovered(true); handleHover(description); }}
      onPointerOut={() => { setHovered(false); handleLeave(); }}
    >
      <sphereGeometry />
      <animated.meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={1}
        toneMapped={false}
      />
    </animated.mesh>
  );
}

function ActuatorHand(props) {
  const { handleHover, handleLeave, description } = props;
  const [hovered, setHovered] = useState(false);

  const { scale, color } = useSpring({
    scale: hovered ? [0.01, 0.01, 0.01] : [0.005, 0.005, 0.005],
    color: hovered ? '#ff69b4' : '#898989',
    config: { tension: 400, friction: 12, mass: 1.5 },
  });

  return (
    <animated.mesh
      {...props}
      scale={scale}
      onPointerOver={() => { setHovered(true); handleHover(description); }}
      onPointerOut={() => { setHovered(false); handleLeave(); }}
    >
      <sphereGeometry />
      <animated.meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={1}
        toneMapped={false}
      />
    </animated.mesh>

  );
}

function SensorHand(props) {
  const { handleHover, handleLeave, description } = props;
  const [hovered, setHovered] = useState(false);

  const { scale, color } = useSpring({
    scale: hovered ? [0.01, 0.01, 0.01] : [0.005, 0.005, 0.005],
    color: hovered ? '#adebb3' : '#898989',
    config: { tension: 400, friction: 12, mass: 1.5 },
  });

  return (
    <animated.mesh
      {...props}
      scale={scale}
      onPointerOver={() => { setHovered(true); handleHover(description); }}
      onPointerOut={() => { setHovered(false); handleLeave(); }}
    >
      <sphereGeometry />
      <animated.meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={1}
        toneMapped={false}
      />
    </animated.mesh>
  );
}

function DisplayBuck(props) {
  const { handleHover, handleLeave, description } = props;
  const [hovered, setHovered] = useState(false);

  const { scale, color } = useSpring({
    scale: hovered ? [0.1, 0.1, 0.1] : [0.05, 0.05, 0.05],
    color: hovered ? '#19a0fc' : '#898989',
    config: { tension: 400, friction: 12, mass: 1.5 },
  });

  return (
    <animated.mesh
      {...props}
      scale={scale}
      onPointerOver={() => { setHovered(true); handleHover(description); }}
      onPointerOut={() => { setHovered(false); handleLeave(); }}
    >
      <sphereGeometry />
      <animated.meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={1}
        toneMapped={false}
      />
    </animated.mesh>

  );
}

function Sensorium() {

  const { ref, inView } = useInView({triggerOnce: true, rootMargin: '200px',});

  const [hoveredBuckDescription, setHoveredBuckDescription] = useState('HOVER PARTS FOR DESCRIPTION');
  const [hoveredHandDescription, setHoveredHandDescription] = useState('HOVER PARTS FOR DESCRIPTION');

  const handleBuckHover = (description) => {setHoveredBuckDescription(description);};
  const handleBuckLeave = () => {setHoveredBuckDescription('HOVER PARTS FOR DESCRIPTION');};

  const handleHandHover = (description) => {setHoveredHandDescription(description);};
  const handleHandLeave = () => {setHoveredHandDescription('HOVER PARTS FOR DESCRIPTION');};

  return (
    <div className="container"  >
      <div className="text-block">

        <DayDate /> 

        <h1>Sensorium · Real-time Vehicle Experience Prototype</h1>
        
        <p className="spacer"></p>
        <p className="spacer"></p>
        
        <LazyLoadImage className="banner" src="img/work/sensorium/sensoriumheader.jpg" alt="Banner of the Project Sensorium by Lukas Moro" placeholder="img/work/sensorium/sensoriumheader-placeholder.jpg"/>

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
              <LazyLoadImage className="col" src="img/work/sensorium/sensoriuminspirationphysarum.jpg" alt="Physarum Polycephalum" placeholder="img/work/sensorium/sensoriuminspirationphysarum-placeholder.jpg"/>
              <LazyLoadImage className="col" src="img/work/sensorium/sensoriuminspirationtribal.gif" alt="'Tribal Belonging' Cupra Brand Identity by 10TOTOKYO" placeholder="img/work/sensorium/sensoriuminspirationtribal-placeholder.jpg"/>
          </div>
        </div>
           
        <p>Left: <a target="_blank" rel="noreferrer" href="http://dussutou.free.fr">"Physarum Polycephalum"</a> by Audrey Dussutour<br />Right: <a target="_blank" rel="noreferrer" href="https://10totokyo.it/CUPRA_">"CUPRA Brand Strategy"</a> by 10TOTOKYO</p>
        
        <p>"Tribal belonging" is another pillar of Cupra's brand identity, currently this is expressed in lifestyle and fashion accessories, video-game assets and brand events. We designed a custom 3D-printed wearable that signals belonging to the tribe and is handed over to new customers of the shared riding ecosystem. The wearable through a RFID tag functions as a key for unlocking vehicle and experience. It contains actuators for haptic feedback from the car and sensorics that gather biometric data points for personalising the riding experience.</p>

        <p>Once a member enters an ordered car they can choose to personalise their experience, consisting of spatial projections, music and haptic feedback on the wearable and seat-belts, through a handgesture. Then the feeding and retention environment of the physarum "growing" in the car picks up the person's data from historic rides, the biometrics measured by the wearable and the current situation of the car which leads to an unique pattern of growth. This pattern of growth communicates cues about the passenger's state and personality to the other passengers and facilitates interactions between different tribal members and a strong connection to Cupra as a brand as it becomes a mean of expression to the passenger.</p>

        <div className="grid">
            <div className="row">
              <iframe width="100%" height="300" src="https://www.youtube.com/embed/CvNsjwZBVPE?si=QSuC1epmu9y6eMOm"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

        <h2>Process</h2>
        
        <p>With ten weeks to deliver a car interior and functional prototype the process was fast-paced. As a team we established an effective time structure where after inital scoping and ideation, we worked on individual contributions that where then alligned in 3 weekly meetings discussing overall concept direction and alignement of outcomes. My contribution to the project was creating fast sketches to make our ideas experiencable when we had them, the idea of physarum as a core theme and the physical and technical prototyping.</p>
        
        <h2>Sketching</h2>
        
        <p>To validate and discuss our ideas quickly technical sketches to experience them first hand were created.</p>
        
        <div className="grid">
          <div className="row">
              <LazyLoadImage className="col" src="img/work/sensorium/sensoriumsketchfirstday.jpg" alt="Sketch of a Particle System Projection in a Car Interior by Lukas Moro" placeholder="img/work/sensorium/sensoriumsketchfirstday-placeholder.jpg"/>
              <LazyLoadImage className="col" src="img/work/sensorium/sensoriumsketchbelt.jpg" alt="Sketch of Haptic Seat Belts by Lukas Moro" placeholder="img/work/sensorium/sensoriumsketchbelt-placeholder.jpg"/>
          </div>
        </div>
          
        <p>First sketches included real-time projections in combination with wizard-of-oz haptic seat-belts and unlocking and mixing experiences through RFID tags.</p>
        
        <div className="grid">
          <div className="row">
              <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumsketchrfidprojection.mp4" alt="Sketch using an Arduino NFC Shield to change Projections by Lukas Moro" autoPlay muted loop playsInline placeholder="img/work/sensorium/sensoriumsketchrfidprojection-placeholder.jpg"/>
              <LazyLoadImage className="col" src="img/work/sensorium/sensoriumsketchsystem.jpg" alt="Sketch using Servo Motors, Arduino NFC Shield and Hapticlabs to showcase Digital Twin by Lukas Moro" placeholder="img/work/sensorium/sensoriumsketchsystem-placeholder.jpg"/>
          </div>
        </div>
          
        <p>Later sketches included controlling actuation, shaders for projection and sensor input out of one central Unity application. During this stage most sketches were created in down-scaled versions for a high iteration pace.</p>

        <div className='grid'>
          <div className="row">
            <LazyLoadImage className="col" src="img/work/sensorium/sensoriumsketchscalemodel.jpg" alt="Setting up the Scale Model of the Sensorium System by Lukas Moro" placeholder="img/work/sensorium/sensoriumsketchscalemodel-placeholder.jpg"/>
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumsketchscalemodelprojections.mp4" autoPlay muted loop playsInline alt="Scale Model of the Sensorium System by Lukas Moro" placeholder="img/work/sensorium/sensoriumsketchscalemodelprojections-placeholder.jpg"/>
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
            <LazyLoadImage className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin.jpg" alt="Unity Game View of Sensorium's Digital Twin by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin-placeholder.jpg"/>
          </div>
        </div>

        <h2>Sensors</h2>

        <p>The prototype perceives the world through an ultrasonic distance sensor mounted at the entry, a Leap Motion hand-tracking kit, a heart-rate sensor on the wearable and a RFID reader mounted on the seatbelt buckle.</p>

        <div className="canvas-container-sensorium" ref={ref}>
          <Canvas gl={{ alpha: true, antialias: true, toneMapping: CineonToneMapping }} camera={{ position: [0, 1.7, -2.5], zoom: 1.2 }}>
            <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
            <group position={[-0.15, 0.15, 0.3]} rotation={[0, Math.PI / 3.6, 0]}>
                {inView && (<Splat position={[0, 0.1, 0.075]} src="https://huggingface.co/datasets/lukasmoro/gaussiansplatssensorium/resolve/main/gs_Sensorium-round.splat"/>)}
                <ActuatorBuck position={[-0.925, 0.375, -0.1]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="HS422 SERVO 1 → SEATBELT TENSION" />
                <ActuatorBuck position={[-0.95, 0.375, 0.15]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="HS422 SERVO 2 → SEATBELT TENSION" />
                <ActuatorBuck position={[-0.825, -0.375, -0.1]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="HS422 SERVO 3 → SEATBELT TENSION" />
                <ActuatorBuck position={[-0.85, -0.375, 0.15]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="HS422 SERVO 4 → SEATBELT TENSION" />
                <SensorBuck position={[0.05, 0.25, 0.115]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="LEAP MOTION → HANDTRACKING" />
                <SensorBuck position={[-0.5, -0.1, 0.065]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="ID-12LA RFID READER → IDENTIFICATION " />
                <SensorBuck position={[-0.8, 0.435, -0.35]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="HC-SR04 ULTRASONIC SENSOR → DISTANCE" />
                <DisplayBuck position={[-0.625, 0.3, 0.06]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="PROJECTION CANVAS 1 → SELF-EXPRESSION" />
                <DisplayBuck position={[0.05, 0.65, 0.6]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="PROJECTION CANVAS 2 → AMBIENT" />
                <DisplayBuck position={[0.55, 0.425, 0]} handleHover={handleBuckHover} handleLeave={handleBuckLeave} description="PROJECTION CANVAS 3 → INSTRUMENT PANEL" />
            </group>
            <Environment files="hdri/rosendal_park_sunset_puresky_2k.hdr"  />
          </Canvas>
          <div className="description-box"><p>{hoveredBuckDescription}</p></div>
        </div>

        <h2>Actuators</h2>

        <p>The prototype communicates through four servos mounted at the ends of the seatbelts, one linear resonance and one voice coil actuator positioned on the finger and wrist of the passengers. Visually it output the intrument panel projected to a transluscent sheet of PMMA in front of the passenger and spatial projections directly on the driver as well as on the collective interior canvas. It also outputs music when a personalised experience is started.</p>
        
        <div className="canvas-container">
          <Canvas gl={{antialias: true, toneMapping: CineonToneMapping}} camera={{ position: [0, 0.2, 0.7], zoom: 4  }}>
              <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                <CupraWearable />
                <ActuatorHand position={[0.015, 0.05, 0.0375]} handleHover={handleHandHover} handleLeave={handleHandLeave} description="VOICE COIL ACTUATOR → HAPTIC FEEDBACK"  />
                <ActuatorHand position={[0, -0.06, -0.0335]} handleHover={handleHandHover} handleLeave={handleHandLeave} description="LINEAR RESONANCE ACTUATOR → HAPTIC FEEDBACK"  />
                <SensorHand position={[0.025, 0.06, -0.025]} handleHover={handleHandHover} handleLeave={handleHandLeave} description="PULSE SENSOR → HEARTRATE"  />
                <Environment files="hdri/rosendal_park_sunset_puresky_2k.hdr" />
          </Canvas>
          <div className="description-box"><p>{hoveredHandDescription}</p></div>
        </div>

        <h2>Haptic & Biometric Wearable</h2>

        <p>The haptic wearable is a 3D-printed glove that is worn on the left hand. Every new member of the Cupra driving eco-system receives a personalised wearable as an expression of belonging into the Cupra tribe. The wearable serves as an identicator, biometric sensor and gives haptic feedback. </p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadImage className="col" src="img/work/sensorium/sensoriumprototypeultrasonicdistancesensor.jpg" alt="Sensorium Ultrasonic Distance Sensor on Buck by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeultrasonicdistancesensor-placeholder1.jpg"/>
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin1.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Welcome' Gesture in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin1-placeholder.jpg"/>
          </div>
            <div className="row">
              <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypeultrasonicdistancesensor.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Welcome' Gesture in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeultrasonicdistancesensor-placeholder2.jpg"/>
            </div>
        </div>

        <p>It carries an RFID tag that is scanned when the seatbelt is closed and triggers the personalisation of the experience. It uses a Genuino MKR1000 with a pulse sensor to wirelessly stream the passengers current heart-rate into the Unity main application via TCP/IP. This biometric signal is one of the inputs of the generated visual for the projections. For the haptic feedback on the wearable a Hapticlabs satellite (ESP32 with two on- board haptic drivers) is used with one linear resonance and one voice coil actuator positioned on the wrist and between index and middle finger. The Hapticlabs satellite is also connected with the main application through serial connection, which facilitate the driving signals at certain trigger points. Haptic feedback is supplied to the passengers at points of direct interaction with the car, namely approaching it, activating collective experiences, taking over the steering and at steering angle maximums.</p>

        <div className="grid">
          <div className="row">
            <LazyLoadImage className="col" src="img/work/sensorium/sensoriumprototypewearable.jpg" alt="Sensorium Wearable with Genuino MKR-1000, Heart-Rate Sensor, NFC Tag and Hapticlabs Satellite by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypewearable-placeholder.jpg"/>
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin2.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Unlocking' Gesture in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin2-placeholder.jpg"/>
          </div>
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypeunlock.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Unlocking' Gesture in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeunlock-placeholder.jpg"/>
          </div>
        </div>

        <h2>Haptic Seatbelts</h2>

        <p>With our autonomous concept we assumed the need for a deeper connection between passengers and the car. Therefore we came up with haptic seatbelts which depending on the situation of the car through tensioning and releasing either give a thrilling or a comforting haptic feedback to the passengers.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin3.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Active Seatbelt Servos in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin3-placeholder.jpg"/>
            <LazyLoadImage className="col" src="img/work/sensorium/sensoriumprototypeservos.jpg" alt="Sensorium Seatbelt Servos on Buck by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeservos-placeholder1.jpg"/>
          </div>
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypeservos.mp4" autoPlay muted loop playsInline alt="Sensorium Buck Active Seatbelt Servos in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeservos-placeholder2.jpg"/>
          </div>
        </div>

        <p>This was prototyped through four HS422 servos mounted to linear actuators at the end of the seatbelts. The servos are controlled by hard-coded events on their Arduino Uno micro-controller, which are triggerd from the Unity main application via another serial port during sensed situations. The events are soft pull (as welcoming gesture from the car), hard pull (as protective signal in emergencies), left and right pull (when actively driving to emphasise the feeling of the curve) and release (as indicator that a passenger is now controlling the car).</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="double-col" src="img/work/sensorium/sensoriumprototypedigitaltwin4.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Curve Seatbelt Servos in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin4-placeholder.jpg"/>
          </div>
        </div>
        
        <h2>Handtracking</h2>

        <p>Gestures are the main interaction paradigm with the vehicle. A grab and release gesture is performed for handing over one's personal data. Touching the interior at a certain position for taking over the steering. Global X translation and local Y rotation of the left hand are used for steering. All those gestures are accompanied by haptic feedback on wearable and seatbelts and change the states of the instrument panel and shaders.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypehandtracking.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Handoff' Gesture with Dashboard in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypehandtracking-placeholder.jpg"/>
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin5.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Handoff' Gesture with Dashboard in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin5-placeholder.jpg"/>
          </div>
        </div>

        <p>They are implemented through a Leap Motion that is integrated into the Unity application via Ultraleap's SDK and variations of its standard gestures, collision volumes and translation/rotation of the hands.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin6.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin 'Steering' Gesture with Dashboard in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin6-placeholder.jpg"/>
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypeinteraction.mp4" autoPlay muted loop playsInline alt="Sensorium Buck 'Steering' Gesture with Dashboard in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeinteraction-placeholder.jpg"/>
          </div>
        </div>

        <h2>Spatial Projections & Dashboard</h2>

        <p>The prototype is lit by three different projections. Two projection canvases display the interactive physarum visual, one directly on the passenger and the other one on the ambient canvas that is located around the passengers. </p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin7.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Spatial Physarum Compute Shader Projections in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin7-placeholder.jpg"/>
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypeambientprojections.mp4" autoPlay muted loop playsInline alt="Sensorium Buck Spatial Physarum Compute Shader Projections in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeambientprojections-placeholder.jpg"/>
          </div>
        </div>

        <p>The physarum is simulated through a compute shader inspired by <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@SebastianLague">Sebastian Lague</a>. It uses an algorithm that imitates growth behaviour of physical physarum organisms. When launching the self-driving experience it starts reacting to the music played in the interior. The turquoise strain's color changes with the heart rate of the driver. When taking over control the more active audo-reactive strain dimms down for preventing distraction.</p>
          
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypedigitaltwin8.mp4" autoPlay muted loop playsInline alt="Sensorium Digital Twin Audio-Reaction of Physarum Compute Shader Projections in Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypedigitaltwin8-placeholder.jpg"/>
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypeaudioreactionprojection.mp4" autoPlay muted loop playsInline alt="Sensorium Buck Audio-Reaction of Physarum Compute Shader Projections in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeaudioreactionprojection-placeholder.jpg"/>
          </div>
        </div>
        
        <p>The third projection houses the dashboard of the car. It was designed by Regina in Figma and the ported to Unity and animated by me. All visuals including the interface on the dashboard are controlled by the same Unity application. This allows for a coherent, synchronised and spatial user experience, where all elements are updated with input changes from user or environment.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadVideo className="col" src="img/work/sensorium/sensoriumprototypeinstrumentpanelprojection.mp4" autoPlay muted loop playsInline alt="Sensorium Buck HMI Dashboard made in Figma & Unity in Physical Reality by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototypeinstrumentpanelprojection-placeholder.jpg"/>
          </div>
        </div>

        <h2>Outcome</h2>

        <p>Sensorium as a concept invites people to join a club that fosters personal expression and exchange with like minded individuals, which ultimately can lead to a strong authentification with the brand and sustainable transportation practices. As a design intervention it integrates a multi-sensory and real-time interior experience with an expressively shaped interior design. The whole user-journey is made tangible first-hand through a functional prototype and put into the context of the final design through the visualisation of the digital twin.</p>
        
        <h2>Learning</h2>

        <p>I am proud of the holistic implementation of our user-journey in a functional prototype during this project, however I also think that I sometimes took an extra mile that would have not been necessary for communication. The scope and balance of functional implementation versus needed fidelity for effective communication is something I want to prioritise more rigorousl for future sketches and prototypes. Choosing the right fidelity when creating functional sketches also turned out to be important to not inhibit the creative process.</p>
        
        <div className="grid">
          <div className="row">
            <LazyLoadImage className="col" src="img/work/sensorium/sensoriumprototype.jpg" alt="Sensorium Buck in Physical Reality & Unity by Lukas Moro" placeholder="img/work/sensorium/sensoriumprototype-placeholder.jpg"/>
          </div>
        </div>

        <div className="bottom-work"></div>

      </div>
  </div>
  );
}

export default Sensorium;
