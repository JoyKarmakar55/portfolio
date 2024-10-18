import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import "./Contact.css";

export const Contact=()=> {
  return (
    <>
      <div className="container-fuild contact mt-4 mb-5" id="contact">
        <div className="card border-0 card0 m-4 ">
          <div className="row m-2 ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card1">
                <div className="row border-line">
                  <img src="contact.jpeg" alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card card2 border-0 d-flex px-4 py-3">
                <div className="row mt-3">
                  <div className="row mb-4">
                    <h4>
                      contact with{" "}
                      <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACIkm7gB236oKc2uYyPNs0GIwCInDuw1qF8&keywords=joy%20karmakar&origin=RICH_QUERY_SUGGESTION&position=0&searchId=bb61002e-9404-49f8-9bb2-7ba78664b3a1&sid=GdN&spellCorrectionEnabled=false">
                        
                        <FaLinkedin color="blue" size={50} className="mx-2" />
                      </a>
                      <a href="https://github.com/Joykarmakar55">
                        
                        <FaGithub color="black" size={50} className="mx-2" />
                      </a>
                      <a href="/">
                        
                        <FaFacebookSquare
                          color="blue"
                          size={50}
                          className="mx-2"
                        />
                      </a>
                      {/* <FaFacebookSquare
                        color="blue"
                        size={50}
                        className="mx-2"
                      /> */}
                      <a href="https://www.instagram.com/__joykarmakar__/">
                        
                        <IoLogoInstagram
                          size={50}
                          color="black"
                          className="mx-2 insta"
                        />
                      </a>
                    </h4>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <h6 className="or text-center">OR</h6>
                    <div className="line" />
                  </div>

                  <div className="row px-3 ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="mb-3 mt-2 input"
                    ></input>
                  </div>

                  <div className="row px-3 ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="mb-3 input"
                    ></input>
                  </div>

                  <div className="row px-3 ">
                    <textarea
                      type="text"
                      name="name"
                      placeholder="Write Your Message"
                      className="mb-3 textinput"
                    ></textarea>
                  </div>
                  <div className="row px-3 ">
                    <button className="button" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
