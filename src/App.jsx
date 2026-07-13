import Background from "./components/background/Background/Background";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certificates from "./components/sections/Certificates";
import Gallery from "./components/sections/Gallery";
import Achievements from "./components/sections/Achievements";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";


function App() {

  return (
    <>
      <Background />

      <Navbar />

      <Hero />

      <About />

      <Skills/>

      <Projects/>

      <Experience/>

      <Certificates/>

      <Gallery/>

      <Achievements/>
      <Testimonials/>
      <Contact/>

      <Footer/>
    </>
  );

}

export default App;