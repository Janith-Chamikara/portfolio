import { FC } from "react";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Skils from "./components/skils/Skils";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";


const App: FC = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col w-[100vw] h-[800px]">
        <Hero />
        <Skils />
        <Projects />
        <Contact/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
