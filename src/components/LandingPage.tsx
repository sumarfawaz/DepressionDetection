import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

const LandingPage = () => {
  return (
    <section id="landingSection" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-12 text-left">
            <h3 id="landingSubHeading">Welcome to EmoAssist</h3>
            <h1 id="landingHeading">Break free into yourself</h1>
            <br />
            <Link id="getStarted" to="/login">
              Get Started Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 513"
                color="white"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  fill="white"
                />
              </svg>
            </Link>
            <Chatbot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
