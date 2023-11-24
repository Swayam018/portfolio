import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="portfolioimage"
        />

        <h2>Swayam Sarthak Swain</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/swayam018/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/tony18._/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Swayam018" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
