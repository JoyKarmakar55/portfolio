import React from "react";
import "./Menus.css";
import {
  FcHome,
  FcAbout,
  FcEngineering,
  FcVoicePresentation,
  FcBusinessContact,
  FcGraduationCap,
  FcMindMap,
} from "react-icons/fc";
import { Link } from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="DP1.jpg" alt="DP"></img>
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcHome size={30} />
                  HOME
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcAbout size={30} />
                  ABOUT
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcGraduationCap size={30} />
                  EDUCATION
                </Link>
              </div>

              <div className="nav-link">
                <Link to="internship" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcVoicePresentation size={30} />
                  INTERNSHIPS
                </Link>
              </div>

              <div className="nav-link">
                <Link to="skills" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcMindMap size={30} />
                  SKILLS
                </Link>
              </div>
              <div className="nav-link">
                <Link to="project" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcEngineering size={30} />
                  PROJECTS
                </Link>
              </div>

              <div className="nav-link">
                <Link to="contact" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcBusinessContact size={30} />
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
           <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcHome size={30} />
              
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcAbout size={30} />

                </Link>
              </div>

              <div className="nav-link">
                <Link to="education" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcGraduationCap size={30} />
          
                </Link>
              </div>

              <div className="nav-link">
                <Link to="internship" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcVoicePresentation size={30} />
         
                </Link>
              </div>

              <div className="nav-link">
                <Link to="skills" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcMindMap size={30} />
                 
                </Link>
              </div>
              <div className="nav-link">
                <Link to="project" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcEngineering size={30} />
              
                </Link>
              </div>

              <div className="nav-link">
                <Link to="contact" smooth={true} offset={50} duration={100} activeClass="active" spy={true}>
                  <FcBusinessContact size={30} />
              
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
