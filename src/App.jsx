import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ChoosUs from "./components/ChoosUs";
import Classes from "./components/Classes";
import Banner from "./components/Banner";
import OurPlan from "./components/OurPlan";
import Gallery from "./components/Gallery";
import OurTeam from "./components/OurTeam";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <section className="relative">
    <Navbar />
    <Hero />
    <ChoosUs/>
    <Classes />
    <Banner />
    <OurPlan />
    
    </section>
    <Gallery />
    <OurTeam />
     
    </>
  );
}

export default App;
