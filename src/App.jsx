import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ChoosUs from "./components/ChoosUs";
import Classes from "./components/Classes";
import Banner from "./components/Banner";
import OurPlan from "./components/OurPlan";
import Gallery from "./components/Gallery";
import OurTeam from "./components/OurTeam";
import Address from "./components/Address";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
