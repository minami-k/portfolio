import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./components/main/Main";
import AboutMe from "./components/aboutMe/AboutMe.js";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";
import Nav from "./components/nav/Nav.js";
import "./style.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/mysite" element={<Main />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
