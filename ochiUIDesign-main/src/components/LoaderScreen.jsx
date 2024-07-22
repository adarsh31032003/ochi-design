import React, { forwardRef, useEffect, useState } from "react";
import "../styles/LoaderScreen.css";
import { gsap } from "gsap";

const LoaderScreen = forwardRef((props, ref) => {
  function onScroll(scroll, direction) {
    if (direction === 1) {
      gsap.to("#navHead", {
        top: "-110px",
        duration: 0,
      });
    } else if (direction === -1) {
      gsap.to("#navHead", {
        top: "0px",
        duration: 0,
      });
    }
  }

  const [timer, setTimer] = useState(20);

  function startTimer() {
    setInterval(() => {
      setTimer((t) => {
        if (t <= 99) {
          return t + 1;
        } else {
          return 100;
        }
      });
    }, 50);
  }

  useEffect(() => {
    startTimer();
    gsap.to("#scrollDownText", {
      y: "80px",
      duration: 2,
      delay: 5,
      repeat: -1,
    });

    gsap.to("#pushRight", {
      duration: 1,
      marginRight: "0.5rem",
      width: window.innerWidth <= 600 ? "5rem" : "10rem",
      delay: 4,
    });
  }, []);

  document.addEventListener("wheel", (e) => {
    onScroll(window.scrollY, e.deltaY < 0 ? -1 : 1);
  });

  return (
    <div
      id="bgLoader"
      ref={ref.bgLoaderRef}
      data-scroll-section={window.innerWidth > 1024 ? true : false}
      data-scroll={window.innerWidth > 1024 ? true : false}
      data-scroll-speed={window.innerWidth > 1024 ? "-0.7" : "0"}
    >
      <div className="loaderContainer">
        <div style={{ height: "100%" }}>
          <main>
            <div>
              <h1>we create</h1>
              <div id="middleText">
                <div id="pushRight"></div>
                <h1>eye-opening</h1>
              </div>
              <h1>presentations</h1>
            </div>

            <div id="bookmark" ref={ref.bookmarkRef}>
              <p id="legend">W.</p>
              <p id="award">Site of the day</p>
            </div>
          </main>

          <footer>
            <div className="footerContainer">
              <div className="loadingText">Loading</div>

              <div id="timerCtn">
                <div className="timer">{timer}</div>
                <div className="timer">%</div>
              </div>
            </div>

            <div className="footerContainerTwo">
              <p>For public and private companies</p>

              <p>From the first ptch to IPO</p>

              <div id="projectStartHead">
                <div id="projectStartBtn">Start the project</div>

                <div id="projectStartCircle">
                  <div id="projectStartCirclBlack"></div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="black"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </div>

              <div id="scrollDown">
                <p id="scrollDownText">Scroll down</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
});

export default LoaderScreen;
