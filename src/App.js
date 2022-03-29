import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe.js";
import Skill from "./components/skill/Skill";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";
import Nav from "./components/nav/Nav.js";

function App() {
  return (
    <div>
      {/*       <Nav/>
       */}
      <AboutMe />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
