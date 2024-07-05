import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ChoosUs from "./components/ChoosUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <section className="relative">
    <Navbar />
    <Hero />
    <ChoosUs/>

    </section>
     
    </>
  );
}

export default App;
