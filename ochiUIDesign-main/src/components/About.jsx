import "../styles/About.css";
import { useHover } from "@uidotdev/usehooks";

const About = () => {
  const [refHover, hovering] = useHover();
  let styleElem = document.head.appendChild(document.createElement("style"));

  const readMoreBtnEnter = () => {
    styleElem.innerHTML =
      "#readMoreBtn::after{content: ''; width: 20rem; height: 12rem;background-color: #000;position: absolute;left: -3rem;border-radius: 50%;transform: scaleY(1);transform-origin: bottom;transition: all 0.5s;}";
  };

  const readMoreBtnLeave = () => {
    styleElem.innerHTML =
      "#readMoreBtn::after{content: ''; width: 20rem; height: 12rem;background-color: #000;position: absolute;left: -3rem;border-radius: 50%;transform: scaleY(0);transform-origin: top;transition: all 0.5s;}";

    setTimeout(() => {
      styleElem.innerHTML =
        "#readMoreBtn::after{content: ''; width: 20rem; height: 12rem;background-color: transparent;position: absolute;left: -3rem;border-radius: 50%;transform: scaleY(0);transform-origin: bottom;transition: all 0.5s;}";
    }, 500);
  };

  return (
    <div
      id="companyContainer"
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
    >
      <div id="comanyMoto">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </div>

      <div className="horizontalLine"></div>

      <div id="aboutMiddle">
        <div>What you can expect:</div>

        <div id="aboutMiddleRight">
          <div id="aboutdetails">
            <div>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </div>

            <div>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </div>
          </div>

          <div id="socialMediaContainer">
            <div id="titleName">S:</div>
            <div>
              <p>Instagram</p>
              <p>Behance</p>
              <p>Facebook</p>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="horizontalLine"></div>

      <div id="aboutLast">
        <div id="aboutLastLeft">
          <p>Our approach:</p>
          <div
            ref={refHover}
            id="readMoreBtn"
            onMouseEnter={readMoreBtnEnter}
            onMouseLeave={readMoreBtnLeave}
          >
            <div>read more</div>

            <div id="smallCircle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                fill="black"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div id="aboutLastRight" className={hovering ? "zoomOut" : ""}>
          <img
            className={hovering ? "zoomImage" : ""}
            src="/images/boyandgirl.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
