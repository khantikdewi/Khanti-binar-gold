import { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Home from "../Home/Home";

const HomePages = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
    </div>
  );
};

export default HomePages;
