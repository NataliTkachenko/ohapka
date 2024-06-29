import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";
import About from "./pages/About";
import MainPage from "./pages/mainPage";
import Bukety from "./pages/Bukety/index";
import Plants from "./pages/Plants/index";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bukety" element={<Bukety />} />
        <Route path="/plants" element={<Plants />} />
      </Routes>
      <Footer />
      <NavBarMobile />
    </>
  );
};

export default App;
