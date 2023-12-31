import React, { useEffect } from "react";
import AboutCard from "./AboutCard";

import ContestImg from "../images/WhatDoWeDo/Contests.png";
import HackathonsImg from "../images/WhatDoWeDo/Hackathons.png";
import BootCampsImg from "../images/WhatDoWeDo/Bootcamps.png";
import Meetups from "../images/WhatDoWeDo/Meetups.png";

export default function About({ navbar }) {
  useEffect(() => {
    const navBar = navbar.current;
    const childElement1 = document.body.children[1].children[1].children[0];
    window.addEventListener("scroll", () => {
      if (childElement1.getBoundingClientRect().bottom <= navBar.clientHeight) {
        navBar.style.backdropFilter = "blur(10px)";
      } else {
        navBar.style.backdropFilter = "";
      }
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const particularEventSection1div1 = document.getElementsByClassName(
      "particularEventSection1div1"
    )[0];
    let particularEventSection1div1WidthHold = 0;
    // particularEventSection1div1.addEventListener("click", () => {
    //   particularEventSection1div1WidthHold =
    //     particularEventSection1div1WidthHold == 0 ? 1 : 0;
    // });
    window.addEventListener("mousemove", (mouse) => {
      if (particularEventSection1div1WidthHold === 0) {
        particularEventSection1div1.style.width =
          window.innerWidth - mouse.x + "px";
      }
    });
  }, []);
  return (
    <>
      <div className="aboutBackground">
        <div className="particularEventSection1">
          <div className="particularEventSection1div1">
            <div className="particularEventSection1div1heading">
              <div className="particularEventSection1div1headingText">
                Get things done <br />
                with your
                <svg
                  style={{
                    height: "1.7em",
                    position: "relative",
                    bottom: "-47px",
                  }}
                  viewBox="0 0 310 199"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="team-t"
                    d="M49.5816 21C40.9734 55.1254 18.5305 115.69 37.899 141.822"
                    stroke="#F84F39"
                    strokeWidth="10"
                    strokeLinecap="round"
                    pathLength="1"
                  ></path>
                  <path
                    className="team-e"
                    d="M9 92.0179C32.0577 99.089 59.727 88.3287 70.7947 71.1123C81.8624 53.8958 51.7336 67.423 46.8146 95.7072C41.8957 123.991 57.5749 129.525 79.7103 117.228"
                    stroke="#F84F39"
                    strokeWidth="10"
                    strokeLinecap="round"
                    pathLength="1"
                  ></path>
                  <path
                    className="team-am"
                    d="M112.299 74.1868C83.707 69.8827 70.7947 120.917 80.94 117.228C91.0854 113.539 113.221 74.4943 114.143 67.7307C115.065 60.9671 107.994 127.681 114.143 127.373C120.292 127.066 128.593 117.535 137.201 101.549C145.809 85.5619 145.502 69.5753 149.806 67.7307C154.11 65.886 153.495 127.373 155.647 127.373C157.799 127.373 177.782 68.3455 181.779 69.2678C185.776 70.1901 181.164 117.228 183.931 117.228C186.698 117.228 218.979 77.5686 229.432 79.7207C239.885 81.8727 230.354 103.086 286 103.086"
                    stroke="#F84F39"
                    strokeWidth="10"
                    strokeLinecap="round"
                    pathLength="1"
                  ></path>
                </svg>
                at SCC
              </div>
            </div>
            <div className="particularEventSection1div1carousel">
              <div className="particularEventSection1div1carouselImageCards">
                <img
                  alt=""
                  src="./images/AboutPageImages/30daysChallenge.jpg"
                />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/bootcamp.jpg" />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/hackverse.jpg" />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/oath_to_code.jpg" />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/POTD.jpg" />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img
                  alt=""
                  src="./images/AboutPageImages/30daysChallenge.jpg"
                />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/bootcamp.jpg" />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/hackverse.jpg" />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/oath_to_code.jpg" />
              </div>
              <div className="particularEventSection1div1carouselImageCards">
                <img alt="" src="./images/AboutPageImages/POTD.jpg" />
              </div>
            </div>
          </div>
          <div className="particularEventSection1div2">
            <video
              src="./images/pic 11.mp4"
              className="particularEventSection1div2Video"
              muted
              autoPlay
              loop
            ></video>
          </div>
        </div>

        <div className="secondSec">
          <div className="aboutSCCIntroContainer">
            <div className="aboutSCCIntroContainerText">
              <h2 className="whatis">What is SCC ?</h2>
              <b>SIET CODING CLUB (SCC)</b>
              is a club, or a committee for the students committed to Tech. We
              believe in working together as a whole, to achieve the greater
              good, that is touching the boundary of perfection when it comes to
              this field. We are a team of students of SIET, striving towards
              growth, and success by excelling in the field of Computer Science.
            </div>
            <div className="aboutSCCIntroContainerImage">
              <img
                alt=""
                src="https://i.ytimg.com/vi/_ITiwPMUzho/maxresdefault.jpg"
              />
            </div>
          </div>
        </div>
        <div className="secondSecContainer">
          <div className="heading">
            <h1>What do we do</h1>
          </div>
          <div className="fourth">
            <AboutCard
              title="Hackthon"
              imgSrc={ContestImg}
              description="SCC provides various coding contests to enhance and boost up the skills of the students. The winners of the contest gets awarded with prizes and certificates. Coding contest, generally have a set of programming questions which are to be solved by the contestants by writing a  computer program. The programs have to be effective  and efficient. These competitions provide a challenging environment where participants can solve complex problems within a given time limit."
            />
            <AboutCard
              title="Hackthon"
              imgSrc={HackathonsImg}
              description="SCC also provides hackathons. A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve or build new projects together. 
              Previous year SCC provided a hackthon called hackverse to bring people together, and make them able to work as a team on a web development project and the winner team also got awarded with prizes and certificates"
            />
            <AboutCard
              title="Hackthon"
              imgSrc={BootCampsImg}
              description="SCC also had bootcamp. A bootcamp is a specialized, intensive training program designed to rapidly increase or significantly affect a participant's knowledge, abilities, or both. Importantly, bootcamp tasks provide participants with a wide range of practical skills depending on the topic, the level of intensity, and the length of time.
              SCC Bootcamp is basically for providing knowledge that are related to programming"
            />
            <AboutCard
              title="Hackthon"
              imgSrc={Meetups}
              description="SCC also organize meet-up session  to socialize and collaborate around the common goal of sharing information.
              Meetup is about connecting people with something in common
              While meet-up like these have nothing to do with students subjectual knowledge, but it is very  important for overall learning and practical experience of a student for ongoing and upcoming technology for their better future."
            />
          </div>
        </div>
        <div className="accordionContainer">
          <div className="heading5">FAQ</div>
          <ul id="accordion">
            {/* <li>
              <label htmlFor="first">
                <p> Where will the contest take place?</p>
              </label>
              <input type="radio" name="accordion" id="first" />
              <div className="content1">
                <p>
                  This contest is an online contest and will take place in Geeks
                  for Geeks.
                </p>
              </div>
            </li> */}
            <li>
              <label htmlFor="second">
                <p> Is there any fee to participate in this contest?</p>
              </label>
              <input type="radio" name="accordion" id="second" />
              <div className="content1">
                <p>No, it is free of cost.</p>
              </div>
            </li>
            <li>
              <label htmlFor="third">
                <p> How do I participate in this contest?</p>
              </label>
              <input type="radio" name="accordion" id="third" />
              <div className="content1">
                <p>
                  To participate in this challenge, do the following:
                  <br />
                  a. Register for the challenge
                  <br />
                  b. Visit the challenge page on start date/time
                  <br />
                  c. Click Participate in Challenge
                </p>
              </div>
            </li>

            <li>
              <label htmlFor="four">
                <p>
                  {" "}
                  How does the online judge determine whether a solution is
                  correct?
                </p>
              </label>
              <input type="radio" name="accordion" id="four" />
              <div className="content1">
                <p>
                  An online judge is a code checker and not a human being. The
                  code checker or "judge" tests your code automatically.
                  Therefore, you must write your code accordingly. For each
                  problem, based on the specifications mentioned in the problem
                  statement, there will be one or more input files and
                  corresponding (correct) output files. The program that you
                  create is run on each of the input files and the corresponding
                  output must match the (correct) output files in order. Your
                  program will be marked incorrect in the following cases:
                  Output files (generated by running your code) do not match the
                  pre-generated output files Output files (generated by running
                  your code) matches all the pre-generated output files,
                  however, it is not in the order in which the pre-generated
                  output files are arranged.
                </p>
              </div>
            </li>
            <li>
              <label htmlFor="five">
                <p> How many times can I submit a solution?</p>
              </label>
              <input type="radio" name="accordion" id="five" />
              <div className="content1">
                <p>
                  You can make as many submissions as you want until the time
                  runs out, the best submission will be considered for the
                  evaluation but every wrong submission will led to 5% penalty.
                </p>
              </div>
            </li>

            <li>
              <label htmlFor="six">
                <p>
                  Are the programming questions restricted to specific
                  languages?
                </p>
              </label>
              <input type="radio" name="accordion" id="six" />
              <div className="content1">
                <p>
                  Yes, the programming questions are restricted to some
                  languages. You can answer only in C++, Java and Python.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
