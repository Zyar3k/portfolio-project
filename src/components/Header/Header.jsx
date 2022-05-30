import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import ME from "../../assets/me3.png";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Cześć, nazywam się</h5>
        <h1 className="title">Arkadiusz Zygan</h1>
        <h5 className="text-light">FrontendDeveloper</h5>

        <div className="cta">
          <a download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="header__socials">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Zyar3k" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
