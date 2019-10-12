import React from "react";
import "./index.scss";
import postVideo from "../../../image/banner.mp4";

const Section = () => {
  return (
    <div className="section">
      <section className="poster">
        <video loop autoPlay className="poster-video">
          <source src={postVideo} />
        </video>
        <div className="poster-logo">
          <p className="logo-text-first">BAD B0Y</p>
          <p className="logo-text-second">CAROLINA HERRERA</p>
          <p className="logo-text-third">NEW YORK</p>
        </div>
        <div className="poster-watch">
          <div className="watch-underline-top"></div>
          <span>WATCH THE FILM</span>
          <div className="watch-underline-bottom"></div>
        </div>
      </section>
    </div>
  );
};

export default Section;
