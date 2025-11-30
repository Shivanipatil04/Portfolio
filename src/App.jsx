import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar";
import FloatingMenu from "./components/FloatingMenu/FloatingMenu";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Sidebar />
      <FloatingMenu />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
