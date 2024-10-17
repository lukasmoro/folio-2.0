import React from "react";
import DayDate from "./DayDate.jsx";

function Paper() {
  
  return (
    <div className="container">
      <div className="text-block">
        
        <DayDate />
        
        <h1>"Feels Like Paper!" · Interfacing Artificial Intelligence through Paper.</h1>

        <p className="spacer"></p>
        <p className="spacer"></p>

        <img className="banner" src="img/work/paper/paperthumbnail.jpg" alt="Banner of the Project 'Feels Like Paper' by Lukas Moro"/>

        <ul className="tools">
          <li className="tool">UNITY</li>
          <li className="tool">C#</li>
          <li className="tool">URP</li>
          <li className="tool">TCP/IP</li>
          <li className="tool">META PRESENCE PLATFORM</li>
          <li className="tool">TOUCHDESIGNER</li>
          <li className="tool">KLAK NDI</li>
          <li className="tool">STABLE DIFFUSION</li>
          <li className="tool">STREAM DIFFUSION</li>
          <li className="tool">CONTROLNET</li>
          <li className="tool">PYTHON</li>
          <li className="tool">OPENCV</li>
          <li className="tool">TESSERACT</li>
          <li className="tool">APPLE VISION FRAMEWORK</li>
          <li className="tool">OPENAI API</li>
          <li className="tool">QUEST 3</li>
          <li className="tool">PAPER</li>
          <li className="tool">MARKER</li>
          <li className="tool">PEN</li>
          <li className="tool">WATERCOLORS</li>
          <li className="tool">BRUSHES</li>
        </ul>

        <ul className='process'>
          <li>Duration: 2 Weeks, Summer 2024</li>
          <li>Collaboration Partner: None</li>
          <li>Team: Individual Work</li>
          <li>Contribution: Idea, Design & Developement</li>
        </ul>

        <h2>In-Short</h2>

        <p>"Feels Like Paper!" is a series of prototypes about augmenting physical paper through AI. Various ML and LLMs are used to infuse physical paper and ink with properties of the digital world without compromising on their physical traits.</p>

        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1829487148078412019"
          >
            ↳ Tweet for "Maths & Questions" Prototype
          </a>
        </div>

        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1838207092471050645"
          >
            ↳ Tweet for "Mark & Comment" Prototype 
          </a>
        </div>

        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://x.com/lukas_moro/status/1829487148078412019"
          >
            ↳ Tweet for "Draw & Dream" Prototype 
          </a>
        </div>

        <h2>Concept</h2>

        <p>The intricate user experience of physical paper is unmatched for tasks like reading books, doing quick notes and scribbles or crossing off a do-to list. </p>
        <p className='block-quote'>"Feels like Paper!" are three prototypes that strive to give physical paper the dynamism, agency and retention of computation, while keeping the dexterity, persistence and haptics enabled by it.</p>
        
        <div className="grid">
            <div className="row">
              <video className="col" src="img/work/paper/mathquestions.mp4" autoPlay muted loop playsInline alt="Maths & Questions Prototype by Lukas Moro."></video>
              <video className="col" src="img/work/paper/markcomment.mp4" autoPlay muted loop playsInline alt="Mark & Comment Prototype by Lukas Moro."></video>
            </div>
            <div className='row'>
              <video className="centered-col" src="img/work/paper/drawdream.mp4" autoPlay muted loop playsInline alt="Draw & Dream Prototype by Lukas Moro."></video>
            </div>
        </div>

        <h2>Inspiration</h2>

        <p><a target="_blank" rel="noreferrer" href="https://liquid.city/">Keichii Matsuda</a> wrote a manifesto called <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UyqFX3zKHOkBlM0M5ggrmYjqa5WxtkRo/view?usp=drivesdk">"GODS"</a>. In it he describes an anaphor for augmented reality rooted in pagan animism. Unlike monotheistic Western approaches of interfacing artificial intelligence like ChatGPT or Siri, he advocates to leverage the possibility of augmented reality technologies to extend places and objects to populate the world with many different agents or "gods". This polytheistic approach inspired by Shintoism offers potential for humane interfaces with AI through many small not all knowing helpers that are scattered around an user's perception, contrary to the image of one singular source of truth that needs to be consulted for every kind of advice.</p>

        <p>In his manifesto Keichii uses Japanese <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Tsukumogami">Tsukumogamis</a> and <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Guxx_KTm_6M">Calcifer</a> from the Studio Ghibli movie "Howl's Moving Castle" as examples for embodiments of artificial intelligence in augmented reality as a spirit world.</p>
        
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/paper/tsukumogami.png" alt="Japanese Tsukumogami"></img>
            <img className="col" src="img/work/paper/calcifer.jpeg" alt="Calcifer from 'Howl's Moving Castle'"></img>
          </div>
        </div>

        <h2>Design</h2>

        <p>Looking at existing work the project can be compared to Apple's <a target="_blank" rel="noreferrer" href="https://www.apple.com/newsroom/2024/06/ipados-18-introduces-powerful-intelligence-features-and-apps-for-apple-pencil/">"Math Notes"</a> feature, <a target="_blank" rel="noreferrer" href="https://dynamicland.org/">"Dynamicland"</a> by <a  href="https://worrydream.com/">Bret Victor</a> and <a target="_blank" rel="noreferrer" href="https://www.inkandswitch.com/inkbase/">"Inkbase: Programmable Ink"</a> by <a href="https://www.inkandswitch.com">Ink & Switch</a>.</p>
        
        <div className="grid">
          <div className="row">
            <img className="infographic" src="img/work/paper/infographicpaper.png" alt="Infographic on Positioning of 'Feel Like Paper' by Lukas Moro"></img>
          </div>
        </div>
        
        <p>Implicit interactions were prioritised over explicit one's to keep the experiences simple and direct and prevent more complexity then in interaction with an unaugmented sheet of paper.</p>
        
        <p>When designing the generative AI interface the focus shifted from communicating feelings of an extension of self towards a muse inspiring one's work. The goal was to gain understanding of what a tool should feel like to maximise learning and prevent off-loading.</p>
        
        <h2>"Maths & Questions" Prototype</h2>
        
        <p>"Maths & Questions" explores a contextual interaction through paper and meaningful and calm embedding of the AIs output into perception. Once a question mark or equal sign are detected in the user's field of view its position is detected and the picture is sent to a LLM to get an answer or result. Once a response is received it is augmented on the paper in the user's hand-writing.</p>

        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/mathquestions.mp4" alt="Maths & Questions Prototype by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
        </div>

        <p>To determine if there is any equal sign or question mark written by the user, optical character recognition with a Python wrapper for <a target="_blank" rel="noreferrer" href="https://github.com/straussmaximilian/ocrmac">Apple's Vision Framework API</a> by Maximilian Strauss is used.</p>
          
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/pythonconsole.mp4" alt="Output of GPT-4o on the Python Console by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
        </div>

        <p>Once an equal sign or question mark is detected, a raycast is performed from the center of the field of view camera through the center of the detection's bounding box onto the scene model. The hit point of the raycast on the scene model represents the position of the sign in world space.</p>
          
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/paper/spatialanchor.jpg" alt="Spatial Anchor set through a Raycast onto the Scence Modle by Lukas Moro."></img>
          </div>
        </div>

        <p>As the interaction is fully contextual and there is no direct intervention by the user a subtle animation of the user's handwriting was chosen as a paradigm for the augmentation of suggestions. This effect was achieved through a line-renderer component with all characters of the user's handwriting pre-configured once the response is received the animation starts character by character as if it is already written onto the paper by a friendly ghost.</p>
          
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/linerenderer.mp4" alt="Line Renderer Handwriting Setup in Unity by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
        </div>
        
        <h2>"Mark & Comment" Prototype</h2>
          
        <p>"Mark & Comment" explores an embodied interaction with an agent through paper. If the user is reading a printed out copy of a text and highlights parts the highlights are automatically saved to a digital version of the document. The user can speak out loud comments on the highlighted parts and the transcribed comments are then automatically saved to the highlights.</p>
          
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/markcomment.mp4" alt="Mark & Comment Prototype by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
        </div>

        <p>To understand when the user is actively highlighting text the prototype has a collider volume positioned in the place of the paper. If the pre-dominant hand's pinky's finger tip is entering this collider voice recording is triggered for spoken comments. Once the pinky's finger tip leaves the collider again and the user stops speaking the recording is send to Whisper API for transcription. Also a message is sent from the Unity application to the server running the image processing pipeline, where the current frame is captured for processing which text was highlighted.</p>
          
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/collider.mp4" alt="Collider Setup in Unity by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
        </div>
        
        <p>In a first attempt an optical character recognition pipeline with OpenCV and Tesseract was used to make the highlights more recognisable and then transcribe them via Tesseract. This turned out to be unreliable for skewed perspective and angled text.</p>
          
        <div className="grid">
          <div className="row">
            <img className="col" src="img/work/paper/pipeline.gif" alt="OpenCV Processing Pipeline by Lukas Moro."></img>
          </div>
        </div>
          
        <p> The final approach used the OpenCV processing pipeline but then send an API request to GPT-4o instead. The system prompt: "If you see highlighted text answer only with the text otherwise return an empty answer.", was used to detect the highlighted text. Finally the text was sent back to the client and compared with the digital version to position the highlights.</p>

        <h2>"Draw & Dream" Prototype</h2>
        
        <p>"Draw & Dream" explores how image diffusion could feel like if the interface to it is on physical paper. The user can adjust the stylistic "lens" of the difussion model through spoken prompts. Then their artwork is used as an input into StreamDiffusion where the stylistic "lense" is applied to the drawn image with ControlNet. The resulting video feed is streamed back to the Unity application and rendered to an interface element in front of the paper.</p>
          
        <div className="grid">
          <div className="row">
            {/* <video className="col" src="img/work/paper/drawdreamlong.mp4" alt="Draw & Dream Prototype by Lukas Moro." autoPlay muted loop playsInline></video> */}
            <video className="double-col" src="img/work/paper/drawdream.mp4" alt="Draw & Dream Prototype by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
          {/* <div className="row">
            <video className="centered-col" src="img/work/paper/drawdreamlong.mp4" alt="Draw & Dream Prototype by Lukas Moro." autoPlay muted loop playsInline></video>
          </div> */}
        </div>

        <p>For feeding the drawn image to StreamDiffusion an image processing pipeline was implemented in Python. It uses OpenCV for processing the camera feed from Quest's casting. Than finds four-sided contours of the paper through canny edge detection. Once the paper is located it initialises keypoints and descriptors via an ORB (Oriented FAST and Rotated BRIEF) feature detection. It then uses Brute-Force Matcher (BFMatcher) to match features between consecutive frames.</p> 
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/paperpythonoutput3.mp4" alt="Unskewing of the Perspective of a Sheet of Paper with Python by Lukas Moro." autoPlay muted loop playsInline></video>          
          </div>
        </div>
        
        
        <p>This allows for tracking the paper's movement by comparing the features of the current frame to the features of the previously detected last "good" frame. It then uses homography between the frames to apply a perspective warp that skews the perspective to be always from orthographic birds-eye view. The ORB, BFMatcher and homography approach was chosen as it turnes out to be extremely reliable even with partial occlusion of the paper through hands, pens or brushes. This view is then streamed into Touch Designer with ultra-low latency via Spout.</p>
          
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/paperpythonoutput1.mp4" alt="Unskewing of the Perspective of a Sheet of Paper with Python by Lukas Moro." autoPlay muted loop playsInline></video>
            <video className="col" src="img/work/paper/paperpythonoutput2.mp4" alt="Unskewing of the Perspective of a Sheet of Paper with Python by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
        </div>

        <p>The image diffusion is performed on a RTX4080 via <a href="">Dot Simulate's</a> TouchDesigner plugin for the StreamDiffusion pipeline by <a href="https://github.com/cumulo-autumn/StreamDiffusion">Akio Kodeira</a> et al. which allows "real-time" interactive generation through Stable Diffusion. The image feed from Python is fed into the pipeline as image input and via a "Scribble" <a href="https://github.com/lllyasviel/ControlNet">ControlNet</a> for adding conditional control by the drawing on the paper.</p>
          
        <div className="grid">
            <div className="row">
              <video className="col" src="img/work/paper/drawdreamtouchdesigner.mp4" alt="Stream Diffusion, ControlNet & Touchdesigner Setup by Lukas Moro." autoPlay muted loop playsInline></video>
            </div>
        </div>

        <p>The stylistic "lens" can be adjusted via spoken prompts that are transcribed with <a href="">Wit.ai</a> in Unity and then send to TouchDesigner. The prompts are inputed on the fly, so that the image output reacts immediately when someone starts describing the desired "lens". The generated images are sent to Unity via NDI and rendered to a quad with a custom shader and a rendertexture.</p>
        
        <div className="grid">
          <div className="row">
            <video className="col" src="img/work/paper/drawdreamwitai.mp4" alt="Interface for Wit.ai in Unity by Lukas Moro." autoPlay muted loop playsInline></video>
          </div>
        </div>
        
        <h2>Outcome & Learning</h2>

        <p>The prototypes show how AI can be brought into the physical world through a contextual understanding of our surroundings and space. The possibility of interfacing computation directly through physical objects opens up question about the surfacing of information into the perception of the user. Three different approaches are explored in the prototypes.</p>
          
        <ul className="dotted-list">
          <li>Delivering Q&A fashion help through an interface that suggest fusion with the AI.</li>
          <li>Embedding the information into the physical object through a digital twin.</li>
          <li>Using the AI as a muse but seperate entity from the own creation.</li>
        </ul>

        <p>Those three approaches differ in their framing of human AI relation. The first one suggests an integration or "merging" with the AI for supplementing our own intelligence. The second one leverages ML/AIs capabilities to understand the world and use it as an assistant that gives the physical world computational traits. The third prototype suggests an interaction where GenAI is not the tool but rather a muse helping to see one's work through different stylistic lenses for inspiring it further.</p>
        
        <div className="bottom-work"></div>

      </div>
    
    </div>
  
  );
}

export default Paper;
