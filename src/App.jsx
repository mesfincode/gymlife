import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <section className="relative">
    <Navbar />
    <Hero />

    </section>
     
    </>
  );
}

export default App;
