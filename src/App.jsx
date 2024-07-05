import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ChoosUs from "./components/ChoosUs";
import Classes from "./components/Classes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <section className="relative">
    <Navbar />
    <Hero />
    <ChoosUs/>
    <Classes />
    </section>
     
    </>
  );
}

export default App;
