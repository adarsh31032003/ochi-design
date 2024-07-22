import React, { useCallback, useEffect, useRef, useState } from "react";
import "../styles/FeaturedProjects.css";
import { gsap } from "gsap";
import Card from "./Card";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cardDetails = [
  {
    clientname: "Karman Ventures",
    username: "William Barnes",
    longDescription:
      "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
    imgName: "person1.png",
    serviceData: ["investor deck", "sales deck"],
  },
  {
    clientname: "Planetly",
    username: "Nina Walloch",
    longDescription:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.",
    imgName: "person2.png",
    serviceData: [
      "agency",
      "big news deck",
      "branded template",
      "investor deck",
      "product presentation",
      "sales deck",
      "startup pitch",
    ],
  },
  {
    clientname: "Workiz Easy",
    username: "Tomer Levy",
    longDescription:
      "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.",
    imgName: "person3.png",
    serviceData: [
      "company presentation",
      "onboarding presentation",
      "policy deck & playbook",
      "redesign",
      "sales deck",
    ],
  },
  {
    clientname: "Premium Blend",
    username: "Ellen Kim",
    longDescription:
      "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations.",
    imgName: "person4.png",
    serviceData: ["branded template", "illustrations"],
  },
  {
    clientname: "Hypercare Systems",
    username: "Brendan Goss",
    longDescription:
      "The service received from OCHI was absolutely first-class. Their close attention to detail, and deep thought in terms of narrative, flow, and aesthetics, completely exceeded my expectations, which were very high from the outset. Especially loved and appreciated the creation of visuals, animation, and advice around the look and feel that we are after. We will definitely continue working with Ihor and his team. I cannot recommend them highly enough.",
    imgName: "person5.png",
    serviceData: ["investor deck", "startup pitch"],
  },
  {
    clientname: "Officevibe",
    username: "Raff Labrie",
    longDescription:
      "Ochi has an impressive understanding of what’s needed to do an effective presentation. The stakeholders at work said it’s the best most complete PP template they’ve ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!",
    imgName: "person6.png",
    serviceData: ["branded template"],
  },
  {
    clientname: "Orderlion",
    username: "Stefan Strohmer",
    longDescription:
      "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!",
    imgName: "person7.jpg",
    serviceData: [
      "agency",
      "investor deck",
      "product presentation",
      "review",
      "sales deck",
    ],
  },
  {
    clientname: "Black Book",
    username: "Jaci Smith",
    longDescription:
      "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally.",
    imgName: "person8.png",
    serviceData: ["review", "startup pitch"],
  },
  {
    clientname: "Trawa Energy",
    username: "David Budde",
    longDescription:
      "We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company.",
    imgName: "person9.png",
    serviceData: ["branding", "investor deck", "startup pitch"],
  },
];

const FeaturedProjects = () => {
  const [cardHeight, setCardHeight] = useState(undefined);
  const [cards, setCards] = useState([]);
  let [eyeLocation, setEyeLocation] = useState(0);
  const [isOpen, setIsOpen] = useState({
    clientname: "",
    open: false,
  });

  const [animation, setAnimation] = useState(gsap.timeline());
  const questionEyeRef = useRef(null);
  const ref = useRef();
  const [imgOneState, setImgOneState] = useState(false);
  const [imgTwoState, setImgTwoState] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.delayedCall(0.5, () => ScrollTrigger.refresh());
    }
  }, [isOpen.open]);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      gsap.registerPlugin(ScrollTrigger);
      setCards(document.querySelectorAll(".card"));

      ScrollTrigger.create({
        trigger: ".wrapper",
        start: "top top",
        pin: true,
        end: () => `+=${cards.length * cardHeight}`,
        scrub: true,
        animation: animation,
        invalidateOnRefresh: true,
      });

      ScrollTrigger.addEventListener("refreshInit", initCards);
    }
  }, [cardHeight]);

  const questionEyeAnimation = useCallback((event) => {
    if (eyeLocation > -785 && event.deltaY > 0) {
      eyeLocation = eyeLocation - 35;
      if (eyeLocation > -785) {
        questionEyeRef.current;
        questionEyeRef.current.style.transform = `translate(-50%, ${eyeLocation}px)`;
      }
    } else if (event.deltaY < 0 && eyeLocation < 0) {
      eyeLocation = eyeLocation + 35;
      if (eyeLocation < 0) {
        questionEyeRef.current.style.transform = `translate(-50%, ${eyeLocation}px)`;
      }
    }
  });

  const topDownScrollEye = () => {
    if (window.innerWidth > 1024)
      window.addEventListener("wheel", questionEyeAnimation);
  };

  function textUpOne() {
    gsap.to("#rightBrandText", {
      y: "0px",
      duration: 0.5,
      bottom: "-100%",
    });

    gsap.to("#leftBrandText", {
      y: "0px",
      duration: 0.5,
      delay: 0.1,
      opacity: 1,
      bottom: "-20%",
    });
  }

  function textDownOne() {
    gsap.to("#leftBrandText", {
      y: "250px",
      duration: 0.5,
    });
  }

  function textUpTwo() {
    gsap.to("#leftBrandText", {
      y: "250px",
      duration: 0.5,
    });

    gsap.to("#rightBrandText", {
      y: "0px",
      duration: 0.5,
      delay: 0.1,
      opacity: 1,
      bottom: "-20%",
    });
  }

  function textDownTwo() {
    gsap.to("#rightBrandText", {
      y: "0px",
      duration: 0.5,
      bottom: "-100%",
    });
  }

  function initCards() {
    animation.clear();
    if (cardHeight === undefined) {
      setCardHeight(document.querySelectorAll(".card")[0].offsetHeight);
    }

    document.querySelectorAll(".card").forEach((card, index) => {
      if (index > 0) {
        //increment y value of each card by cardHeight
        gsap.set(card, { y: index * cardHeight });
        //animate each card back to 0 (for stacking)
        animation.to(card, { y: 0, duration: index * 0.5, ease: "none" }, 0);
      }
    });
  }

  useEffect(() => {
    document.querySelector("body").addEventListener("mousemove", (event) => {
      if (window.innerWidth > 1024) {
        let eyes = document.querySelectorAll(".whiteQuestionEye");
        eyes.forEach((eye) => {
          let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
          let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
          let radian = Math.atan2(event.clientX - x, event.clientY - y);
          let rotate = radian * (180 / Math.PI) * -1 + 270;
          eye.style.transform = `rotate(${rotate}deg)`;
        });

        let smallWhiteEyes = document.querySelectorAll(".blackQuestionEye");
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
          window.removeEventListener("wheel", questionEyeAnimation);
        }
      });
    });

    observer.observe(ref.current);
  }, []);

  const ballonDownToUp = (id, id1, color = "#fff") => {
    document.querySelector(id).style.height = "12rem";
    gsap.to(id, {
      y: "-50%",
      duration: 0.2,
      overwrite: true,
    });

    gsap.to(id1, {
      color: color,
    });
  };

  const ballonMidToUp = (id, id1, id2, color = "#000") => {
    gsap.to(id, {
      y: "-140%",
      duration: 0.2,
      overwrite: true,

      onComplete: () => {
        document.querySelector(id).remove();

        const divs = document.createElement("div");
        divs.id = id.replace("#", "");
        document.querySelector(id2).appendChild(divs);
      },
    });

    gsap.to(id1, {
      color: color,
    });
  };

  return (
    <div id="featuredProj">
      <h1 id="mainHeading">Featured Projects</h1>

      <div id="projectDetails">
        <div id="leftWhite">
          <div className="listStyle">
            <div className="blackCircle"></div>
            <h2>fyde</h2>
          </div>

          <div
            onMouseEnter={() => {
              setImgOneState(true);
              textUpOne();
            }}
            onMouseLeave={() => {
              setImgOneState(false);
              textDownOne();
            }}
            className={
              imgOneState ? "zoomOutImgContainer imgHolder" : "imgHolder"
            }
          >
            <img
              className={imgOneState ? "zoomImageFeatured" : ""}
              src="/images/fydecrypto.png"
            />
          </div>

          <div className="projectDetailFooter">
            <div
              className="wateryEffect"
              id="wateryEffectParentOne"
              onMouseEnter={() =>
                ballonDownToUp("#ballonOneDown", "#ballonOneUp")
              }
              onMouseLeave={() =>
                ballonMidToUp(
                  "#ballonOneDown",
                  "#ballonOneUp",
                  "#wateryEffectParentOne"
                )
              }
            >
              <div id="ballonOneUp">audit</div>
              <div id="ballonOneDown"></div>
            </div>

            <div
              className="wateryEffect"
              id="wateryEffectParentTwo"
              onMouseEnter={() =>
                ballonDownToUp("#ballonTwoDown", "#ballonTwoUp")
              }
              onMouseLeave={() =>
                ballonMidToUp(
                  "#ballonTwoDown",
                  "#ballonTwoUp",
                  "#wateryEffectParentTwo"
                )
              }
            >
              <div id="ballonTwoUp">copywriting</div>
              <div id="ballonTwoDown"></div>
            </div>

            <div
              className="wateryEffect"
              id="wateryEffectParentThree"
              onMouseEnter={() =>
                ballonDownToUp("#ballonThreeDown", "#ballonThreeUp")
              }
              onMouseLeave={() =>
                ballonMidToUp(
                  "#ballonThreeDown",
                  "#ballonThreeUp",
                  "#wateryEffectParentThree"
                )
              }
            >
              <div id="ballonThreeUp">sales deck</div>
              <div id="ballonThreeDown"></div>
            </div>

            <div
              className="wateryEffect"
              id="wateryEffectParentFour"
              onMouseEnter={() =>
                ballonDownToUp("#ballonFourDown", "#ballonFourUp")
              }
              onMouseLeave={() =>
                ballonMidToUp(
                  "#ballonFourDown",
                  "#ballonFourUp",
                  "#wateryEffectParentFour"
                )
              }
            >
              <div id="ballonFourUp">slides design</div>
              <div id="ballonFourDown"></div>
            </div>
          </div>
        </div>

        <div id="brandText">
          {
            <>
              <h1
                id="leftBrandText"
                className={`${imgOneState ? "opacityZero" : "opacityOne"} `}
              >
                FYDE
              </h1>
              <h1
                id="rightBrandText"
                className={`${imgOneState ? "opacityOne" : "opacityZero"} `}
              >
                VISE
              </h1>
            </>
          }
        </div>

        <div id="rightBlack">
          <div className="listStyle">
            <div className="blackCircle"></div>
            <h2>vise</h2>
          </div>
          <div
            onMouseEnter={() => {
              setImgTwoState(true);
              textUpTwo();
            }}
            onMouseLeave={() => {
              setImgTwoState(false);
              textDownTwo();
            }}
            className={
              imgTwoState ? "zoomOutImgContainer imgHolder" : "imgHolder"
            }
          >
            <img
              className={imgTwoState ? "zoomImageFeatured" : ""}
              src="/images/vise.jpg"
            />
          </div>

          <div className="projectDetailFooter">
            <div
              className="wateryEffect"
              id="wateryEffectParentFive"
              onMouseEnter={() =>
                ballonDownToUp("#ballonFiveDown", "#ballonFiveUp")
              }
              onMouseLeave={() =>
                ballonMidToUp(
                  "#ballonFiveDown",
                  "#ballonFiveUp",
                  "#wateryEffectParentFive"
                )
              }
            >
              <div id="ballonFiveUp">agency</div>
              <div id="ballonFiveDown"></div>
            </div>

            <div
              className="wateryEffect"
              id="wateryEffectParentSix"
              onMouseEnter={() =>
                ballonDownToUp("#ballonSixDown", "#ballonSixUp")
              }
              onMouseLeave={() =>
                ballonMidToUp(
                  "#ballonSixDown",
                  "#ballonSixUp",
                  "#wateryEffectParentSix"
                )
              }
            >
              <div id="ballonSixUp">comapny presentation</div>
              <div id="ballonSixDown"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="clientReviews">
        <h1 id="mainHeading">Clients’ reviews</h1>

        {cardDetails.map((ele) => {
          return (
            <Card
              clientname={ele.clientname}
              username={ele.username}
              longDescription={ele.longDescription}
              key={ele.clientname}
              imgName={ele.imgName}
              serviceData={ele.serviceData}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              openOrNot={isOpen.clientname === ele.clientname}
            />
          );
        })}
      </div>

      <div className="wrapper">
        <div className="cards">
          <div className="card" id="companyLogos">
            <div id="ochiLogo">
              <img src="/images/ochilogo.svg" />

              <div id="copyRightOchi">&#169; 2019-2022</div>
            </div>

            <div id="clutchLogo">
              <div id="clutch">
                <img src="/images/clutch.svg" />

                <div
                  className="wateryEffectCmp"
                  id="wateryEffectParentSeven"
                  onMouseEnter={() =>
                    ballonDownToUp("#ballonSevenDown", "#ballonSevenUp", "#000")
                  }
                  onMouseLeave={() =>
                    ballonMidToUp(
                      "#ballonSevenDown",
                      "#ballonSevenUp",
                      "#wateryEffectParentSeven",
                      "#fff"
                    )
                  }
                >
                  <button id="ballonSevenUp">rating 5.0 on clutch</button>
                  <div id="ballonSevenDown"></div>
                </div>
              </div>

              <div id="businessBootcamp">
                <img src="/images/futuracademy.png" />

                <div
                  className="wateryEffectCmp"
                  id="wateryEffectParentEight"
                  onMouseEnter={() =>
                    ballonDownToUp("#ballonEightDown", "#ballonEightUp", "#000")
                  }
                  onMouseLeave={() =>
                    ballonMidToUp(
                      "#ballonEightDown",
                      "#ballonEightUp",
                      "#wateryEffectParentEight",
                      "#fff"
                    )
                  }
                >
                  <button id="ballonEightUp">business bootcamp alumni</button>
                  <div id="ballonEightDown"></div>
                </div>

                {/* <button>business bootcamp alumni</button> */}
              </div>
            </div>
          </div>

          <div className="card" id="bigQuestion" ref={ref}>
            <p className="mainQuestion">ready</p>
            <p className="mainQuestion">to start</p>
            <p className="mainQuestion">the project?</p>

            <div id="btnCtn">
              <br />

              <div
                onMouseEnter={() =>
                  ballonDownToUp("#ballonNineDown", "#projectBtnCtn")
                }
                onMouseLeave={() =>
                  ballonMidToUp(
                    "#ballonNineDown",
                    "#projectBtnCtn",
                    "#wateryEffectParentNine",
                    "#fff"
                  )
                }
                className="wateryEffect"
                id="wateryEffectParentNine"
              >
                <div className="commonBtnCtn" id="projectBtnCtn">
                  <div id="projectStart">start the project</div>

                  <div id="smallCircleOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="10"
                      height="10"
                      fill="#212121"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </div>
                </div>

                <div id="ballonNineDown"></div>
              </div>

              <br />
              <p id="orText">or</p>
              <br />

              <div
                onMouseEnter={() =>
                  ballonDownToUp("#ballonTenDown", "#projectBtnCtnTwo")
                }
                onMouseLeave={() =>
                  ballonMidToUp(
                    "#ballonTenDown",
                    "#projectBtnCtnTwo",
                    "#wateryEffectParentTen"
                  )
                }
                className="wateryEffect"
                id="wateryEffectParentTen"
              >
                <div className="commonBtnCtn" id="projectBtnCtnTwo">
                  <div id="companyEmail">hello@ochi.design</div>

                  <div id="smallCircleOne">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="10"
                      height="10"
                      fill="#212121"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </div>
                </div>
                <div id="ballonTenDown"></div>
              </div>
            </div>

            <div id="questionEye" ref={questionEyeRef}>
              <div className="whiteQuestionEye">
                <div className="blackQuestionEye"></div>
              </div>

              <div className="whiteQuestionEye" id="whiteQuestionSecEye">
                <div className="blackQuestionEye"></div>
              </div>
            </div>
          </div>

          <div className="card" id="presentationSection">
            <div id="footerLeft">
              <div className="footerLeftMainHeading">
                <p>eye-</p>
                <p>opening</p>
              </div>

              <p className="footerLeftSmallHeading">ochi</p>
            </div>

            <div id="footerRight">
              <div className="footerRightMainHeading">
                <p>presentations</p>
              </div>

              <div className="footerRightOne">
                <p>S:</p>

                <p>Instagram</p>
                <p>Behance</p>
                <p>Facebook</p>
                <p>Linkedin</p>
              </div>

              <div className="footerRightTwo">
                <div>
                  <p>L:</p>
                  <p>202-1965 W 4th Ave</p>
                  <p>Vancouver, Canada</p>

                  <p>30 Chukarina St</p>
                  <p>Lviv, Ukraine</p>
                </div>

                <div>
                  <p>M:</p>
                  <p>Home</p>
                  <p>Services</p>
                  <p>Our work</p>
                  <p>About us</p>
                  <p>Insights</p>
                  <p>Contact us</p>
                </div>
              </div>

              <div className="footerRightThree">
                <div>
                  <p>E:</p>
                  <p>hello@ochi.design</p>
                </div>

                <div id="infoSite">
                  <p id="mobileOchiFooter">ochi</p>

                  <p>&#169; ochi design 2024. Legal Terms</p>
                  <div id="selfIntro">
                    <a href="https://ochi.design/">Ochi clone</a>
                    <p>
                      Made with <span id="heart">&nbsp; &#10084; &nbsp;</span>
                      by{" "}
                      <a
                        id="myname"
                        href="https://www.linkedin.com/in/ryan-crasta/"
                      >
                        Ryan Crasta
                      </a>
                    </p>
                  </div>
                  <p>Website by Obys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
