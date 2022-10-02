import "./global.scss";
// import Home from "./pages/Home/Home";
// import Topbar from "./components/Topbar/Topbar";
import HomePages from "./pages/HomePages/HomePages";
import { Routes, Route } from "react-router-dom";
import CarList from "./pages/CarList/CarList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="car-list" element={<CarList />} />
    </Routes>
  );
}

export default App;
