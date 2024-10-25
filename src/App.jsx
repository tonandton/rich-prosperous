import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import WorkingStep from "./components/WorkingStep";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-primary overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <WorkingStep />
        <Pricing />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
