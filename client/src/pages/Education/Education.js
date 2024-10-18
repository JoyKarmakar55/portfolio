import React from "react";
import "./Education.css"
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Education = () => {
  return (
    <>
      <div className="container-fluid text-center" id="education">
        <div className="col-12 col-lg-12 col-md-12 col-sm-12 education ">
          <h1 className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center educationh1">
          EDUCATION
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: " rgb(108, 17, 111)", color: "#fff" }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title head" >
                West Bengal Board Of Secondary Education
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
                Serampore Boys High School
              </h4>
              {/* <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p> */}
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: " rgb(108, 17, 111)", color: "#fff" }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title head" >
                West Bengal Board Of Higher Secondary Education
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
                Serampore Boys High School
              </h4>
              {/* <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p> */}
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: " rgb(108, 17, 111)", color: "#fff" }}
              icon={<IoMdSchool />}
            >
              <h3 className="vertical-timeline-element-title head" >
                B.Tech In Computer Science & Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-3">
                MCKV Institute Of Engineering
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
