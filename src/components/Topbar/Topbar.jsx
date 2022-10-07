import "./topbar.scss";
import { Link } from "react-router-dom";
import { LinkData } from "../../data";
import { useState } from "react";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <Link to="/">
            <h1 className="logo">BCR.</h1>
          </Link>
        </div>
        <div className="topbar-right">
          {LinkData.map((d) => (
            <ul className="item-container">
              <li>
                <a className="topbar-menu" href={d.href}>
                  {d.label}
                </a>
              </li>
            </ul>
          ))}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
