import React from "react";
import { Wave } from "react-animated-text";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SiHtml5 } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
const About = () => {
  return (
    <>
      <div className="contact-me">
        <Wave text="Contact Me"></Wave>
      </div>
      <div className="link-logo">
        <ul>
          <li className="git">
            <a href="https://github.com/AbdullahKhan0800">
              <AiFillGithub />
            </a>
          </li>
          <li className="google">
            <a href="www.biatemper0800@gmail.com">
              <FcGoogle />
            </a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/biatemper">
              <AiFillInstagram />
            </a>
          </li>
          <li className="link-in">
            <a href="https://www.linkedin.com/in/bia-temper-66790822b">
              <AiFillLinkedin />
            </a>
          </li>
          <li className="facebook">
            <a href="https://www.facebook.com/biatemper0800">
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
      <div className="about-me-discription">
        Hello, My name is Abdullah Khan. I am a front-end deveoper. I learn
        Html, CSS, Java-Sript, J-Querry, Sanity.io, React.Js, Node.Js and
        MongoDB. I make my this portfolio by my own.
      </div>
      <div className="languages-img">
        <div>
          <SiHtml5 />
        </div>
        <div>
          <DiCss3 />
        </div>
        <div>
          <DiJavascript />
        </div>
        <div>
          <SiJquery />
        </div>
      </div>
      <div className="hello-grid">
        <div>
          <GrReactjs />
        </div>
        <div>
          <DiNodejsSmall />
        </div>
        <div>
          <SiMongodb />
        </div>
      </div>
      <div className="contact-me">Scan the QR for Direct Contact</div>
      <div className="qr-code"></div>
    </>
  );
};

export default About;
