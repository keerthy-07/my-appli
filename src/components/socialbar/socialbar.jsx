import "./socialbar.css"
import { useState, useEffect } from "react";
import {FaGithub,FaLinkedinIn,FaInstagram,FaYoutube} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

  
const SocialBar = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setHide(true);
      } else {
        setHide(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

     <div className={`social-bar ${hide ? "hide" : ""}`}>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/keerthi-vasan-a34aa2420?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.instagram.com/itz_______vasan404?igsh=ZjVrczFxcjh2bzBv"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a href="mailto:keerthivasankannan76@gmail.com">
        <MdEmail />
      </a>

      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};
export default SocialBar;