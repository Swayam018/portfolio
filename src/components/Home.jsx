
import {  motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/logo1.png";

const Home = ({ ratio }) => {

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1} >
            Hi, I Am <br /> <motion.h2 {...animations.h1}>Swayam Sarthak Swain</motion.h2>
          </motion.h1>
          <motion.h3 {...animations.h1}>
            I'm a web Developer and Mobile App Developer with experience over 1 year 
          </motion.h3>

          <Typewriter
            options={{
              strings: ["Web Developer", "A Designer","Mobile Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              cursorClassName:"Typewriter__cursor",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:swayamsarthakswain018@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={me} alt="Abhishek" />
      </section>
    </div>
  );
};

export default Home;
