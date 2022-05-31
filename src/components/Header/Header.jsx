import HeaderSocials from "./HeaderSocials";
import CTA from "./CTA";
// import ME from "../../assets/me3.png";
import ME from "../../assets/me4.png";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Cześć, nazywam się</h5>
        <h1 className="title">Arkadiusz Zygan</h1>
        <h5 className="text-light">FrontendDeveloper</h5>
        <CTA />
        <HeaderSocials />

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
