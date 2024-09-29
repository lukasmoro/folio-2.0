import React from 'react';
import DayDate from "./DayDate.jsx";

function Paper() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          "Feels Like Paper!" · Interfacing Artificial Intelligence through Paper.
        </h1>
        <p className="spacer">⌘</p>
        <img
            className="banner"
            src="img/banner/presencebanner.jpg"
            alt="banner of paper"
          />
        <ul className="tools">
          <li className="tool">UNITY</li>
          <li className="tool">C#</li>
          <li className="tool">URP</li>
          <li className="tool">TCP/IP</li>
          <li className="tool">META PRESENCE PLATFORM</li>
          <li className="tool">TOUCHDESIGNER</li>
          <li className="tool">STABLE DIFFUSION</li>
          <li className="tool">STREAM DIFFUSION</li>
          <li className="tool">PYTHON</li>
          <li className="tool">OPENCV</li>
          <li className="tool">TESSERACT</li>
          <li className="tool">APPLE VISION FRAMEWORK</li>
          <li className="tool">OPENAI API</li>
          <li className="tool">QUEST 3</li>
        </ul>
        <ul className='process'>
        <li>Duration: 2 Weeks, Summer 2024</li>
          <li>Collaboration Partner: None</li>
          <li>Team: Individual Work</li>
          <li>Contribution: Idea, Design & Developement</li>
        </ul>
        <h2>In-Short</h2>
        <p>
          "Feels Like Paper!" is a series of prototypes about augmenting physical paper through AI. Various ML and LLMs are used to infuse physical paper and ink with properties of the digital world without compromising on their physical traits. 
        </p>
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
        <h2>Inspiration</h2>
          <p>The main inspiration for this project stems from Apple's "Math Notes" feature, "Dynamicland" by Bret Victor and "Inkbase: Programmable Ink" by Ink & Switch.</p>
          <div className="grid">
            <div className="row">
              <img className='infographic' src="img/work/paper/infographicpaper.png" alt="Spatial Anchor"></img>
            </div>
          </div>
        <h2>Design</h2>
          <p>Designing the prototypes contextual implicit interaction was prioritised over explicit interaction to keep the interactions simple and direct, not more complex then with an unaugmented sheet of paper.</p>
        <h2>"Maths & Questions" Prototype</h2>
          <p>"Maths & Questions" explores a contextual interaction with an agent through paper. Once a question mark or equal sign are detected in the user's field of view its position is detected and the picture is sent to a LLM to get an answer or result. Once a response is received it is augmented on the paper in the user's hand-writing.</p>
          <div className="grid">
            <div className="row">
              <video className="col" src="img/work/paper/mathquestions.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
          <p>To determine if there is any equal sign or question mark written by the user optical character recognition through Apple's Vision Framework API is used.</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="Python Console"></img>
            </div>
          </div>
          <p>Once an equal sign or question mark is detected, a raycast is performed from the center of the field of view camera through the center of the detection's bounding box onto the scene model. The hit point of the raycast on the scene model represents the position of the sign in world space.</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="Spatial Anchor"></img>
            </div>
          </div>
          <p>As the interaction is fully contextual and there is no direct intervention by the user a subtle animation of the user's handwriting was chosen as a paradigm for the augmentation of suggestions. This effect was achieved through a line-renderer component with all characters of the user's handwriting pre-configured once the response is received the animation starts character by character as if it is already written onto the paper by a friendly ghost.</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="Line Renderer"></img>
            </div>
          </div>
        <h2>"Mark & Comment" Prototype</h2>
          <p>"Mark & Comment" explores an embodied interaction with an agent through paper. If the user is reading a printed out copy of a text and highlights parts the highlights are automatically saved to a digital version of the document. The user can speak out loud comments on the highlighted parts and the transcribed comments are then automatically saved to the highlights.</p>
          <div className="grid">
            <div className="row">
            <video className="col" src="img/work/paper/markcomment.mp4" autoPlay muted loop playsInline></video>
            </div>
        </div>
          <p>In a first attempt an optical character recognition pipeline with OpenCV and Tesseract was used to make the highlights more recognisable and then transcribe them via Tesseract this turned out to be unreliable for skewed perspective and angled text.</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="CV Image Processing Pipeline"></img>
            </div>
          </div>
          <p> The final approach used the processing pipeline but then send an API request to GPT-4o. With the system prompt: "".</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="Python Console"></img>
            </div>
          </div>
        <h2>"Draw & Dream" Prototype</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ex incidunt, modi doloremque eligendi saepe? Fugit eligendi obcaecati quis reprehenderit consequatur placeat magnam magni, perferendis minima debitis nulla earum ratione.</p>
          <p>ADD VIDEO: "Draw" Prototype</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis neque, doloremque, pariatur temporibus error minus fugit voluptate dolorum maxime sequi quaerat tenetur. Recusandae vero non architecto quidem deleniti tenetur?</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="Stream Diffusion & Touchdesigner"></img>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat porro doloribus neque aut veniam harum explicabo similique, molestias minima sapiente quo possimus tenetur! Debitis provident ratione qui similique tenetur!</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="Sky Box Mapping & Shader"></img>
            </div>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cumque dolorem sunt, porro, similique omnis atque asperiores quam repellat, dolore reiciendis? Perspiciatis nulla sit, vel rem molestias accusantium delectus quia!</p>
          <div className="grid">
            <div className="row">
              <img className="col" src="" alt="Python Console"></img>
            </div>
          </div>
        <h2>Outcome & Learning</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, doloremque nostrum maxime rem accusamus, vel saepe consectetur ullam soluta obcaecati sed recusandae optio vitae error esse cumque reiciendis, reprehenderit repellendus.</p>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Paper;
