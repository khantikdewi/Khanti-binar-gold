import "./global.scss";
import HomePages from "./pages/HomePages/HomePages";
import { Routes, Route } from "react-router-dom";
import CarList from "./pages/CarList/CarList";
import CarDetail from "./pages/CarDetail/CarDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/car-list" element={<CarList />} />
      <Route path="/car-list/:id" element={<CarDetail />} />
    </Routes>
  );
}

export default App;
