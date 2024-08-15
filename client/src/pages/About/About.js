import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 about-pic">
            <img className="img-fluid" src="DP2.jpg" alt="DP"></img>
          </div>
          <div className="col about-content">
            <h1>ABOUT ME</h1>
            <p>
              Hello, I'm Joy Karmakar, a dedicated B.Tech student majoring in
              Computer Science and Engineering at MCKV Institute of Engineering.
              With a focus on Full Stack Web Development and expertise in the
              MERN stack, I've undergone intensive training to create dynamic
              and scalable web applications. My academic journey, coupled with a
              passion for creative problem-solving, fuels my commitment to
              making a meaningful impact in the technology landscape. Eager to
              contribute my skills and collaborate on innovative projects, I
              believe in the transformative power of web development. Explore my
              portfolio to discover projects that showcase my dedication and
              proficiency. Let's connect and explore how we can create something
              exceptional together!<br></br><br></br>🙏🏻Thank You for visiting.<br></br><br></br>If you have anything to ask feel free to contact 📩.
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
