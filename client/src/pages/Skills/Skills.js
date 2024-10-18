import React from "react";
import "./Skills.css";
import { SkillList } from "../../utilities/SkillList";

export const Skills = () => {
  return (
    <>
      <div className="container-fluid skills text-center" id="skills">
        <h1 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">SKILLS</h1>
        <h2 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">🧑🏻‍💻Includes Programming Languages, Fameworks, Databases, Front End and Back End tools and APIs.</h2>
      </div>
      <div className="container-fluid skillcards">
      <div className="row">
        {SkillList.map((skill)=>(
          <div key={skill._id} className="col-lg-4 col-md-4 col-sm-6">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                    <skill.icon className="skill-icon"/>
                    </div>
                    <div className="media-body">
                      <h4>{skill.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Skills;
