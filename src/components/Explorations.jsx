import React from 'react';
import DayDate from './DayDate';
import LazyLoadVideo from './LazyLoadVideo';
import LazyLoadImage from './LazyLoadImage';

function Explorations() {

  return (
      
      <div className="container">
        <div className="text-block">
          
          <DayDate />
          
          <h1>Explorations</h1>
          
          <p className="spacer"></p>
          <p className="spacer"></p>
          
          <LazyLoadImage className='banner' src="img/work/explorations/explorationsheader.jpg" alt="Banner of the Exploration Projects by Lukas Moro" placeholder="img/work/explorations/explorationsheader-placeholder.jpg"/>

          <p>Exploring experiental properties and materiality of technologies and aesthetics through little side-projects exposed to my friends.</p>

          <h2>Real-time Image Diffusion with Touch Designer & Kinect</h2>

          <p>Investigating real-time image diffusion with body motion as interaction paradigm using Streamdiffusion, Touchdesigner's GPU particles and Kinect.</p>
          <p>Prompt 1: Wolfgang Tillmans bonsai planted floating soap-bubble blossom in golden hour on black background. <br />Prompt 2: Kids see ghosts sometimes tsukumogami.</p>

          <div className="grid">
            <div className="row">
              <LazyLoadVideo className="col" src="img/work/explorations/explorationsstreamdiffusionbonsai.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsstreamdiffusionbonsai-placeholder.jpg"/>
              <LazyLoadVideo className="col" src="img/work/explorations/explorationsstreamdiffusiontsukumogami.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsstreamdiffusiontsukumogami-placeholder.jpg"/>
            </div>
            <div className="row">
              <LazyLoadImage className="col" src="img/work/explorations/explorationsstreamdiffusionnodes.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationsstreamdiffusionnodes-placeholder.jpg"/>
            </div>
          </div>

          <h2>Unity Plugin for XRHack supported by Meta</h2>

          <p>XR Bootcamp, together with industry partners including Meta organised the XR Hack 2024. A hackathon carried out in London, Cologne, Stockholm and Cologne with over 1000 participants. I created an Unity plugin that helped the hackers to access the camera feed of their Quest 3 mixed reality headsets to run machine learning models on it for semantic input. This was implemented using Quest's casting functionality, OBS, Python and TCP/IP to stream detections back into the headset.</p>
          
          <div className="grid">
            <div className="row">
              <iframe width="100%" height="300" src="https://www.youtube.com/embed/MA8xKWMjkYI?si=JQG5TcWQQEVTA9Vc&amp;start=1558" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          
          <h2>Real-time Projections for Raves</h2>

          <p>Interactive visualisers in Unity for raves and parties. Reactive to different inputs like MIDI and audio-frequencies.</p>

            <div className="grid">
              <div className="row">
                <LazyLoadVideo className="col" src="img/work/explorations/explorationsraveunityaliens.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsraveunityaliens-placeholder.jpg"/>
              </div>
              <div className="row">
                <LazyLoadVideo className="col" src="img/work/explorations/explorationsraveunitymidi.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsraveunitymidi-placeholder.jpg"/>
                <LazyLoadVideo className="col" src="img/work/explorations/explorationsraveunitydak.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsraveunitydak-placeholder.jpg"/>
              </div>
            </div>
          
          <h2>Pixel Art Generator</h2>

          <p>Prompting the ChatGPT API to draw an image in an 8x8 grid, outputting it on an LED matrix through Serial. Built with React and Arduino, in collaboration with Kay van den Aker.</p>
          
          <div className="grid">
              <div className="row">
                <LazyLoadImage className="col" src="img/work/explorations/explorationspixelartui.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationspixelartui-placeholder.jpg"/>
                <LazyLoadVideo className="col" src="img/work/explorations/explorationspixelart.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationspixelart-placeholder.jpg"/>
              </div>
          </div>

          <p>Prompts for the outputs below were "Space Invader", "Heart" and "Butterfly". Those were then visualised by ChatGPT as a 8x8 bitmap.</p>
          
          <div className="grid">
              <div className="row">
                <LazyLoadImage className="col" src="img/work/explorations/explorationspixelartinvader.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationspixelartinvader-placeholder.jpg"/>
                <LazyLoadImage className="col" src="img/work/explorations/explorationspixelartheart.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationspixelartheart-placeholder.jpg"/> 
              </div>
              <div className="row">
                <LazyLoadImage className="centered-col" src="img/work/explorations/explorationspixelartbutterfly.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationspixelartbutterfly-placeholder.jpg"/>
              </div>
          </div>

          <h2>3D-Scan of Head</h2>

          <p>Photogrametry experiments together with Heinrich Zaunschirm using Agisoft Metashape and Blender for rendering.</p>

          <div className="grid">
              <div className="row">
                <LazyLoadImage className="col" src="img/work/explorations/explorationsagisoft.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationsagisoft-placeholder.jpg"/>
                <LazyLoadImage className="col" src="img/work/explorations/explorations3dscan.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorations3dscan-placeholder.jpg"/>
              </div>
          </div>

          <h2>Weather-Reactive 3D Sculpture</h2>

          <p>Sculpture of a Joshua Tree running on Quest 3. Connected to OpenWeather API to mirror weather situation at Southern California Vipassana Center.</p>

          <div className="grid">
              <div className="row">
                <LazyLoadVideo className="col" src="img/work/explorations/explorationsweathersculptureunity.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsweathersculptureunity-placeholder.jpg"/>
                <LazyLoadImage className="col" src="img/work/explorations/explorationsweathersculptureapi.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationsweathersculptureapi-placeholder.jpg"/>
              </div>
          </div>

          <h2>Procedural Geometry Explorations</h2>

          <p>Visuals exploring different procedural modelling techniques in Blender. The right one uses Phyllotaxis growth for positioning the Oscars.</p>
          
          <div className="grid">
              <div className="row">
                <LazyLoadVideo className="col" src="img/work/explorations/explorationsblenderlucit.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsblenderlucit-placeholder.jpg"/>
                <LazyLoadVideo className="col" src="img/work/explorations/explorationsblenderoscars.mp4" autoPlay muted loop playsInline alt="by Lukas Moro" placeholder="img/work/explorations/explorationsblenderoscars-placeholder.jpg"/>
              </div>
          </div>

          <h2>Medium-Format Photography</h2>
          
          <p>Some medium format photography done at my childhood home in Austria harvesting honey. All pictures were taken on Hasselblad 501c with Kodak Portra 400 film.</p>

          <div className="grid">
              <div className="row">
                <LazyLoadImage className="col" src="img/work/explorations/explorationsphotographylavender.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationsphotographylavender-placeholder.jpg"/>
                <LazyLoadImage className="col" src="img/work/explorations/explorationsphotographysmoke.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationsphotographysmoke-placeholder.jpg"/>
              </div>
              <div className="row">
                <LazyLoadImage className="double-col" src="img/work/explorations/explorationsphotographybeekeeping.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationsphotographybeekeeping-placeholder.jpg"/>
              </div>
          </div>

          <h2>Sculpture of Speed</h2>
          
          <p>A shape-study symbolising speed from old days as an industrial designer. First rendered in Photoshop, then modeled in clay and 3D modeled together with Nathanael Boell.</p>
          
          <div className="grid">
            <div className="row">
              <LazyLoadImage className="col" src="img/work/explorations/explorationsspeedform.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationsspeedform-placeholder.jpg"/>
            </div>
          </div>

          <h2>Toori Desk Lamp</h2>

          <p>Product design of a desk lamp made out of PMMA and copper. The PMMA was heated in an oven for bending it.</p>

          <div className="grid">
              <div className="row">
                <LazyLoadImage className="col" src="img/work/explorations/explorationstoorilamp.jpg" alt="by Lukas Moro" placeholder="img/work/explorations/explorationstoorilamp-placeholder.jpg"/>
              </div>
          </div>

          <div className="bottom-work"></div>

        </div>
      </div>
      
  );
}

export default Explorations;
