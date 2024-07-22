import React, { useEffect, useState, useCallback, useRef } from "react";
import "../styles/EyeComponent.css";

const EyeComponent = () => {
  let [eyeLocation, setEyeLocation] = useState(0);
  let ref = useRef(null);
  let myEyeRef = useRef(null);

  const animateEyes = useCallback((event) => {
    if (eyeLocation > -785 && event.deltaY > 0) {
      eyeLocation = eyeLocation - (window.innerWidth <= 600 ? 5 : 25);
      ref.current.style.transform = `translate(-50%, ${eyeLocation}px)`;
    } else if (event.deltaY < 0 && eyeLocation < 0) {
      eyeLocation = eyeLocation + (window.innerWidth <= 600 ? 5 : 30);
      ref.current.style.transform = `translate(-50%, ${eyeLocation}px)`;
    }
  });

  const topDownScrollEye = () => {
    window.addEventListener("wheel", animateEyes);
  };

  useEffect(() => {
    document.querySelector("body").addEventListener("mousemove", (event) => {
      if (window.innerWidth > 1024) {
        let eyes = document.querySelectorAll(".whiteEye");
        eyes.forEach((eye) => {
          let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
          let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
          let radian = Math.atan2(event.clientX - x, event.clientY - y);
          let rotate = radian * (180 / Math.PI) * -1 + 270;
          eye.style.transform = `rotate(${rotate}deg)`;
        });

        let smallWhiteEyes = document.querySelectorAll(".blackEye");
        smallWhiteEyes.forEach((eye) => {
          let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
          let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
          let radian = Math.atan2(event.clientX - x, event.clientY - y);
          let rotate = radian * (180 / Math.PI) * -1 + 270;
          eye.style.transform = `rotate(${rotate}deg)`;
        });
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          topDownScrollEye();
        } else {
          window.removeEventListener("wheel", animateEyes);
        }
      });
    });

    observer.observe(myEyeRef.current);
  }, []);

  return (
    <div
      ref={myEyeRef}
      id="myeye"
      data-scroll={window.innerWidth > 1024 ? true : false}
      data-scroll-speed={window.innerWidth > 1024 ? "-0.7" : "0"}
    >
      <div id="eyeContainer" ref={ref}>
        <div className="whiteEye">
          <div className="blackEye"></div>
        </div>

        <div className="whiteEye" id="secEye">
          <div className="blackEye"></div>
        </div>
      </div>
    </div>
  );
};

export default EyeComponent;
