import React from "react";
import "../styles/Marquee.css";

const Marquee = () => {
  return (
    <div
      data-scroll={window.innerWidth > 1024 ? true : false}
      data-scroll-section={window.innerWidth > 1024 ? true : false}
      data-scroll-speed={window.innerWidth > 1024 ? "-0.2" : "0"}
      className="marqueeContainer"
      id="greenMarquee"
    >
      <h1>
        <span>
          we are ochi we are ochi we are ochi we are ochi we are ochi we are
          ochi we are ochi we are ochi we are ochi
        </span>
      </h1>
    </div>
  );
};

export default Marquee;
