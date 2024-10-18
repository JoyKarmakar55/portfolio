import React from "react";
import "./Internship.css";
// import dp1 from "../../../public/DP1.jpg"
import { RiHomeOfficeFill } from "react-icons/ri";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export const Internship = () => {
  return (
    <>
      <div className="container-fluid text-center" id="internship">
        <div className="col-12 col-lg-12 col-md-12 col-sm-12 internship">
          <h1 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  internshiph1">
            Internships
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: " #006D77", color: "#fff" }}
              icon={<RiHomeOfficeFill />}
            >
              <h3 className="vertical-timeline-element-title heading">
                Full Stack Development With MERN Stack
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
                Ardent Computech Private Limited
              </h4>
              {/* <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p> */}
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: " #006D77", color: "#fff" }}
              icon={<RiHomeOfficeFill />}
            >
              <h3 className="vertical-timeline-element-title heading">
                Deep Learning Using Tensorflow & Keras
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
              Ardent Computech Private Limited
              </h4>
              {/* <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p> */}
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: " #006D77", color: "#fff" }}
              icon={<RiHomeOfficeFill />}
            >
              <h3 className="vertical-timeline-element-title heading ">
               IT Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
                Company Name
              </h4>
              {/* <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p> */}
            </VerticalTimelineElement>



          </VerticalTimeline>
          <br></br>
        </div>
      </div>
    </>
  );
};
