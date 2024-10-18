import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../Assets/Docs/JOY KARMAKAR_CSE(DS)_2024_.pdf'

export const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home" >
        <div className="container-fluid home-content">
        <h1>Hello 👋🏻 I'm Joy Karmakar</h1>
          <h1>I'm a dedicated</h1>
          <h3>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "MERN Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="home-buttons">
              <button className="btn btn-hire" >Hire Me</button>
              <a className="btn btn-cv" href={Resume} download="Joy Karmakar.pdf" >My Resume</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
