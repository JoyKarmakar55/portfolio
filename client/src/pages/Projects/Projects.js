import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <div className="container-fluid projects text-center" id="project">
        <h1 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          PROJECTS
        </h1>
        <h2 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          Explore some of the exciting projects I've worked on to get a glimpse
          of my skills and creativity in action. Each project reflects my
          dedication to delivering high-quality solutions and showcases my
          expertise in Full Stack Web Development.
        </h2>
        <div className="row" id="ads">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xl-6 p-4">
            <div className="card rounded">
              <div className="card-image ">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="project1.jpg"
                  className="img-fluid mb-4 project my-4"
                  alt="project1"
                ></img>
                <div className="card-image-overlay m-auto">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">NodeJS</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">ecommerce website</h5>
                  </div>
                  <a href="https://github.com/Joykarmakar55" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* project2 */}

          <div className="col-md-12 col-lg-12 col-sm-12 col-xl-6 p-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="project2.jpg"
                  className="img-fluid mb-4 my-4 project"
                  alt="project1"
                ></img>
                <div className="card-image-overlay m-auto">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">ExpressJS</span>
                  <span className="card-detail-badge">ReactJS</span>
                  <span className="card-detail-badge">NodeJS</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">jobportal website</h5>
                  </div>
                  <a href="https://github.com/Joykarmakar55" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
