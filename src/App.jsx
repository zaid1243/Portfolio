import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* BACKGROUND FIX */}
      {/* <div className="fixed top-0 -z-10 h-full w-full pointer-events-none"> */}
      <div className="fixed top-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* ✅ IMPORTANT: IDs + scroll offset */}
        <div
          id="home"
          className="scroll-mt-24"
          onClick={() => console.log("hero clicked")}
        >
          <Hero />
        </div>

        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>

        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        <div id="technologies" className="scroll-mt-24">
          <Technologies />
        </div>

        <div id="education" className="scroll-mt-24">
          <Education />
        </div>

        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
