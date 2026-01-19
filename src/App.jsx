import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx"
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/project" element={<Project />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;