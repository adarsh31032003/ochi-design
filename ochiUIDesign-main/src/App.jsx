import React, { useEffect, useRef, useState } from "react";
import LoaderScreen from "./components/LoaderScreen";
import Marquee from "./components/Marquee";
import "./styles/App.css";
import About from "./components/About";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import EyeComponent from "./components/EyeComponent";
import FeaturedProjects from "./components/FeaturedProjects";
import "./styles/FeaturedProjects.css";

function App() {
  const locoScroll = new LocomotiveScroll();
  const [showSection, setShowSection] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const menuDropdownRef = useRef(null);
  const navHeadRef = useRef(null);
  const navHeadRightRef = useRef(null);
  const bgLoaderRef = useRef(null);
  const bookmarkRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowSection(true);
      bgLoaderRef.current.style.height = "120vh";
      bookmarkRef.current.style.opacity = "1";
      navHeadRightRef.current.style.opacity = "1";
      navHeadRef.current.style.opacity = "1";
    }, 3500);
  }, []);

  function animateTop(realId, dummyId) {
    gsap.to(realId, {
      top: "-30px",
      duration: 0.3,
    });

    gsap.to(dummyId, {
      top: "0px",
      duration: 0.3,
    });
  }

  function animateDown(realId, dummyId) {
    gsap.to(dummyId, {
      top: "30px",
      duration: 0.3,
    });

    gsap.to(realId, {
      top: "0px",
      duration: 0.3,
    });
  }

  const openBtnClicked = () => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    setHamburgerClicked(true);

    menuDropdownRef.current &&
      menuDropdownRef.current.classList &&
      menuDropdownRef.current.classList.remove("reverse");
  };

  const closeBtnClicked = () => {
    document.getElementsByTagName("body")[0].style.overflow = "unset";

    menuDropdownRef.current.classList.add("reverse");
  };

  return (
    <div className="text-white overflowAnimate">
      <nav id="navHead" ref={navHeadRef}>
        <div id="ochiLogoHead">ochi</div>

        <div ref={navHeadRightRef} id="navHeadRight">
          <div id="mainNavigation">
            <div
              onMouseEnter={() => animateTop("#realService", "#dummyService")}
              onMouseLeave={() => animateDown("#realService", "#dummyService")}
            >
              <p id="realService">Services</p>
              <p id="dummyService">Services</p>
            </div>
            <div
              onMouseEnter={() => animateTop("#realWork", "#dummyWork")}
              onMouseLeave={() => animateDown("#realWork", "#dummyWork")}
            >
              <p id="realWork">Our work</p>
              <p id="dummyWork">Our work</p>
            </div>
            <div
              onMouseEnter={() => animateTop("#realAbout", "#dummyAbout")}
              onMouseLeave={() => animateDown("#realAbout", "#dummyAbout")}
            >
              <p id="realAbout">About us</p>
              <p id="dummyAbout">About us</p>
            </div>
            <div
              onMouseEnter={() => animateTop("#realInsights", "#dummyInsights")}
              onMouseLeave={() =>
                animateDown("#realInsights", "#dummyInsights")
              }
            >
              <p id="realInsights">Insights</p>
              <p id="dummyInsights">Insights</p>
            </div>
          </div>

          <div
            id="contactUs"
            onMouseEnter={() => animateTop("#realContact", "#dummyContact")}
            onMouseLeave={() => animateDown("#realContact", "#dummyContact")}
          >
            <p id="realContact">Contact us</p>
            <p id="dummyContact">Contact us</p>
          </div>
        </div>

        <svg
          onClick={() => openBtnClicked()}
          id="hamburger"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </nav>

      {hamburgerClicked && (
        <div id="menuDropdown" ref={menuDropdownRef}>
          <div id="mobileNav">
            <div id="ochiLogoHead">ochi</div>

            <svg
              onClick={() => closeBtnClicked()}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </div>

          <div id="mobileDropdownBody">
            <p>Services</p>
            <p>Our work</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>

          <div id="mobileDropdownFooter">
            <div id="mobileDropdownFooterLeft">
              <div>
                <p>S:</p>
                <p>Instagram</p>
                <p>Behance</p>
                <p>Facebook</p>
                <p>Linkedin</p>
              </div>

              <div id="lastFooter">
                <div>
                  <p>L:</p>
                  <p>202-1965 W 4th Ave</p>
                  <p>Vancouver, Canada</p>
                </div>

                <br />

                <div>
                  <p>30 Chukarina St</p>
                  <p>Lviv, Ukraine</p>
                </div>
              </div>
            </div>
            <div>
              <p>E:</p>
              <p>hello@ochi.design</p>
            </div>
          </div>
        </div>
      )}

      <LoaderScreen
        ref={{
          bgLoaderRef: bgLoaderRef,
          bookmarkRef: bookmarkRef,
        }}
      />

      {showSection && (
        <>
          <Marquee />
          <About />
          <EyeComponent />
          <FeaturedProjects locoScroll={locoScroll} />
        </>
      )}
    </div>
  );
}

export default App;
