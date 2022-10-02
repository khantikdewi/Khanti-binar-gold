import "./topbar.scss";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <Link to="/">
            <h1 className="logo">BCR.</h1>
          </Link>
        </div>
        <div className="topbar-right">
          <div className="item-container">
            <a className="topbar-menu" href="#ourServices">
              Our Services
            </a>
          </div>
          <div className="item-container">
            <a className="topbar-menu" href="#whyUS">
              Why Us
            </a>
          </div>
          <div className="item-container">
            <a className="topbar-menu" href="#testimonials">
              Testimonials
            </a>
          </div>
          <div className="item-container">
            <a className="topbar-menu" href="#faqSection">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
