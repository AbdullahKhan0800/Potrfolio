import React from "react";
import { Wave } from "react-animated-text";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <h1 className="Main-hone-start">My Projects</h1>
      <h2 className="Main-htwo-start">
        <Wave text="Welcome To My Projects Page!" />
      </h2>

      <div className="specific-w-h">
        <div className="flex-around">
          <div className="sir-name">
            <a href="">ProPakistan-clone</a>
          </div>
          <div className="git-hub-logo">
            <a href="">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="description">
          This is my project that I made with Html and CSS. This website have a
          clean code and i make it by my own.
        </div>
      </div>
      <div className="specific-w-h">
        <div className="flex-around">
          <div className="sir-name">
            <a href="https://github.com/AbdullahKhan0800/My-CV.git">My-CV</a>
          </div>
          <div className="git-hub-logo">
            <a href="https://github.com/AbdullahKhan0800/My-CV.git">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="description">
          This is my cv or resume that I made on html and Css. In this I use the
          table, flex and many more html and css classes.
        </div>
      </div>
      <div className="specific-w-h">
        <div className="flex-around">
          <div className="sir-name">
            <a href="https://github.com/AbdullahKhan0800/White-suite-NewsLetter.git">
              White-suite-NewsLetter
            </a>
          </div>
          <div className="git-hub-logo">
            <a href="https://github.com/AbdullahKhan0800/White-suite-NewsLetter.git">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="description">
          This is my one page project in which I make a news add letter for the
          brand, in this I use the animation of css and many more of html and
          css. Ya I know this is a very little code having only one page but
          this is made by me.
        </div>
      </div>
      <div className="specific-w-h">
        <div className="flex-around">
          <div className="sir-name">
            <a href="https://github.com/AbdullahKhan0800/todos-menu-clone.git">
              Todos-Menu-Clone
            </a>
          </div>
          <div className="git-hub-logo">
            <a href="https://github.com/AbdullahKhan0800/todos-menu-clone.git">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="description">
          This is the todos returent menu that I made on html and css in this I
          use many CSS and Html class this is not way to much better I try it to
          make as menu like todos.
        </div>
      </div>
      <div className="specific-w-h">
        <div className="flex-around">
          <div className="sir-name">
            <a href="https://github.com/AbdullahKhan0800/diamond-website.git">
              Diamond-Website
            </a>
          </div>
          <div className="git-hub-logo">
            <a href="https://github.com/AbdullahKhan0800/diamond-website.git">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="description">
          This is a diamond rings website that I clone by my one..In this I use
          css and Html and a bunch of classes of this. This is clone of website
          that I made.
        </div>
      </div>
      <div className="specific-w-h">
        <div className="flex-around">
          <div className="sir-name">
            <a href="https://github.com/AbdullahKhan0800/My-fiver-profile.git">
              My-fiver-profile
            </a>
          </div>
          <div className="git-hub-logo">
            <a href="https://github.com/AbdullahKhan0800/My-fiver-profile.git">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="description">
          This is my fiver account gig that I also made on html and css a way
          more before{" "}
        </div>
      </div>
    </>
  );
};

export default Projects;
