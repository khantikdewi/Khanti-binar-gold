import "./global.scss";
import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar/Topbar";



function App() {
  return (
    <div className="app" id="app">
      <Topbar/>
      <Home/>
      
    </div>
  );
}

export default App;
