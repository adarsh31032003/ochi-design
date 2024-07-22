import React from "react";
import "../styles/Card.css";
import { gsap } from "gsap";

export default function Card({
  clientname,
  username,
  longDescription,
  imgName,
  serviceData,
  setIsOpen,
  isOpen,
  openOrNot,
}) {
  const smallToBig = (clientname) => {
    gsap.to(`#bottomUnderline-${clientname}`, {
      width: "100%",
      delay: 0.5,
      duration: 0.5,
    });

    setTimeout(() => {
      gsap.to(`#topUnderline-${clientname}`, {
        x: "0%",
      });

      gsap.to(`#bottomUnderline-${clientname}`, {
        width: "0%",
      });
    }, 1000);
  };

  const bigToSmall = (clientname) => {
    gsap.to(`#topUnderline-${clientname}`, {
      x: "100%",
      duration: 0.5,
    });

    smallToBig(clientname);
  };

  return (
    <div id="cartContainer">
      <div id="cardHead">
        <div className="smallWidth">
          <div
            id="clientNameHead"
            onMouseEnter={() => bigToSmall(clientname.split(" ").join(""))}
          >
            {clientname}

            <div id="underlines">
              <div
                className="upperLine"
                id={`topUnderline-${clientname.split(" ").join("")}`}
              ></div>
              <div
                className="lowerLine"
                id={`bottomUnderline-${clientname.split(" ").join("")}`}
              ></div>
            </div>
          </div>
        </div>
        <p
          className={`midWidth ${
            isOpen.open & (isOpen.clientname === clientname)
              ? "showService"
              : "hideService"
          }`}
        >
          Services
        </p>
        <p className="bigWidth">{username}</p>
        <p
          className="readBtn"
          style={{ opacity: openOrNot ? "0.3" : "1" }}
          onClick={() => {
            if (!isOpen.open) {
              setIsOpen({
                clientname: clientname,
                open: true,
              });
            } else {
              if (isOpen.clientname === clientname) {
                setIsOpen({
                  clientname: "",
                  open: false,
                });
              } else {
                setIsOpen({
                  clientname: clientname,
                  open: true,
                });
              }
            }
          }}
        >
          read
        </p>
      </div>

      <div
        id="cardBody"
        className={`${openOrNot ? "heightFull" : "heightZero"} `}
      >
        <div className="emptyBody smallWidth"></div>

        <p id="serviceMobile">Services</p>
        <div className="emptyBody midWidth">
          {serviceData.map((service) => {
            return (
              <div className="serviceBtnCtn">
                <div className="serviceBtn">{service}</div>
                <div className="serviceBtnArrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="#f1f1f1"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        <div className="emptyBody bigWidth">
          <p id="mobileClientname">{clientname}</p>
          <img src={`/images/${imgName}`} />
          <p className="longDesc">{longDescription}</p>
        </div>
        <div className="extraWidth"></div>
      </div>
    </div>
  );
}
