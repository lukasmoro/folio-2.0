import React from 'react';
import DayDate from './DayDate';

function Visual() {

  return (
      
      <div className='container'>
        <div className="text-block">
          
          <DayDate />
          
          <h1>Explorations.</h1>
          
          <p className="spacer"></p>
          <p className="spacer"></p>
          
          <img className='banner' src="img/grid/explore.jpg" alt="Banner of the Exploration Projects by Lukas Moro" />
          
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
            <li className="tool">KINECT</li>
            <li className="tool">TOUCHDESIGNER</li>
            <li className="tool">STABLE DIFFUSION</li>
            <li className="tool">STREAMDIFFUSION</li>
            <li className="tool">CONTROLNET</li>
          </ul>

          <p>Exploring experiental properties and materiality of technologies and aesthetics through little side-projects exposed to my friends.</p>
          
          <h2>Real-time Image Diffusion with Touch Designer & Kinect</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae id modi odit vero quo a eius delectus suscipit. Ab sapiente, sunt deleniti animi maiores tempora earum aut? Quaerat, iure!</p>

          <div className="grid">
            <div className="row">
              <video className="col" src="" autoPlay muted loop playsInline></video>
            </div>
            <div className="row">
              <video className="col" src="img/grid/streamdiffusion.mp4" autoPlay muted loop playsInline></video>
              <video className="col" src="" autoPlay muted loop playsInline></video>
            </div>
          </div>

          <h2>Unity Plugin for XRHack supported by Meta</h2>

          <p>XR Bootcamp, together with many industry partners including Meta organised the XR Hack 2024, a hackathon carried out in London, Cologne, Stockholm and Cologne with over 1000 participants. An Unity plugin that helped the hackers to access the camera feed of their Quest 3 mixed reality headsets to run machine learning models on it for semantic input. This was implemented using Quest's casting functionality, OBS, Python and TCP/IP to stream detections back into the headset.</p>
          
          <iframe width="600" height="315" src="https://www.youtube.com/embed/MA8xKWMjkYI?si=FFtzBgmcbqYPm5Nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <h2>Real-time Projections for Raves</h2>

          <p>Interactive visualisers in Unity for raves and parties. Reactive to different inputs like MIDI and audio-frequencies.</p>

            <div className="grid">
              <div className="row">
                <video className="col" src="img/grid/aliensBW.mp4" autoPlay muted loop playsInline></video>
              </div>
              <div className="row">
                <video className="col" src="img/grid/midi.mp4" autoPlay muted loop playsInline></video>
                <video className="col" src="img/grid/dak.mp4" autoPlay muted loop playsInline></video>
              </div>
            </div>
          
          <h2>Pixel Art Generator</h2>

          <p>Prompting the ChatGPT API to draw an image in an 8x8 grid, outputting it on an LED matrix through Serial. Built with React and Arduino, in collaboration with Kay van den Aker.</p>
          
          <div className="grid">
              <div className="row">
                <img className="col" src="img/grid/gridptscreenshot.png"></img>
                <video className="col" src="img/grid/gridpt.mp4" autoPlay muted loop playsInline></video>
              </div>
          </div>

          <p>Prompts for the outputs below were "Space Invader", "Heart" and "Butterfly". Those were then visualised by ChatGPT as a 8x8 bitmap.</p>
          
          <div className="grid">
              <div className="row">
                <img className="col" src="img/grid/invader.jpg"></img>
                <img className="col" src="img/grid/heart.jpg"></img> 
              </div>
              <div className="row">
                <img className="centered-col" src="img/grid/butterfly.jpeg" alt=''></img>
              </div>
          </div>
          
          <h2>Form Study of Speed</h2>
          
          <p>A shape resembling dynamism and speed from old days as an industrial designer. First rendered in Photoshop, then modeled in clay and 3D modeled together with Nathanael Boell.</p>
          
          <div className="grid">
            <div className="row">
              <img className="col" src="img/grid/speedform.png"></img>
              <img className="col" src=""></img> 
            </div>
          </div>

          <h2>3D-Scan of Head</h2>

          <p>Photogrametry experiments together with Heinrich Zaunschirm. Used Agisoft Metashape and Blender for rendering.</p>

          <div className="grid">
              <div className="row">
                <img className="col" src="img/grid/3dscanme.png"></img>
                <img className="col" src="img/grid/3dme.png"></img>
              </div>
          </div>

          <h2>Weather-Reactive 3D Experience</h2>

          <p>Sculpture of a Yoshua Tree running on Quest 3. Connected to OpenWeather API to mirror weather situation at Southern California Vipassana Center.</p>

          <div className="grid">
              <div className="row">
                <video className="col" src="img/grid/weather.mp4" autoPlay muted loop playsInline></video>
                <img className="col" src="img/grid/joshua.png"></img>
              </div>
          </div>

          <h2>Procedural Geometry Explorations</h2>

          <p>Visuals exploring different modelling techniques in Blender. The right one uses Phyllotaxis growth fot positioning the Oscars.</p>
          
          <div className="grid">
              <div className="row">
                <video className="col" src="img/grid/lucit.mp4" autoPlay muted loop playsInline></video>
                <video className="col" src="img/grid/oscars.mp4" autoPlay muted loop playsInline></video>
              </div>
          </div>

          <h2>Medium-Format Photography</h2>
          
          <p>Some medium format photography done at my childhood home in Austria harvesting honey. All pictures were taken on Kodak Portra 400 film.</p>

          <div className="grid">
              <div className="row">
                <img className="col" src="img/grid/hasselblad1.JPG"></img>
                <img className="col" src="img/grid/hasselblad2.JPG"></img>
              </div>
              <div className="row">
                <img className="centered-col" src="img/grid/hasselblad3.JPG"></img>
              </div>
          </div>

          <h2>Desk Lamp</h2>

          <p>Product design of a desk lamp made out of PMMA and copper. The PMMA was heated in an oven for bending it.</p>

          <div className="grid">
              <div className="row">
                <img className="col" src=""></img>
                <img className="col" src="img/grid/toori.png"></img>
              </div>
          </div>

          <div className="bottom-work"></div>

        </div>
      </div>
      
  );
}

export default Visual;
