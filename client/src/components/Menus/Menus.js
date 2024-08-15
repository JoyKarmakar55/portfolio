import React from 'react';
import './Menus.css';
import { FcHome,FcAbout,FcEngineering,FcVoicePresentation,FcBusinessContact,FcGraduationCap,FcMindMap  } from "react-icons/fc";

const Menus = ({toggle}) => {
  return (
    <>
    {
        toggle ? (<>
            <div className="navbar-profile-pic">
            <img src='DP1.jpg' alt='DP'></img>
        </div>
        <div className="nav-items">
            <div className="nav-item">
                <div className="nav-link">
                    <FcHome size={30}/>
                    HOME
                </div>
            
                <div className="nav-link">
                    <FcAbout size={30}/>
                   ABOUT
                </div>
            
                <div className="nav-link">
                <FcGraduationCap size={30} />
                    EDUCATION
                </div>
            
                <div className="nav-link">
                    <FcMindMap size={30}/>
                    SKILLS
                    
                </div>
                <div className="nav-link">
                    <FcEngineering size={30}/>
                    PROJECTS
                </div>
                <div className="nav-link">
                    <FcVoicePresentation size={30}/>
                    TESTIMONIALS
                </div>            
                <div className="nav-link">
                    <FcBusinessContact size={30}/>
                    CONTACT
                </div>
            </div>
        </div>
        </>) : (<>

        </>)
    }
    </>
  )
}

export default Menus