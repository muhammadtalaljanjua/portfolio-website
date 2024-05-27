import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";
import Home from "./components/Home/home.component";
import About from "./components/About/About";
import Contact from "./components/Contact/contact.component";
import Projects from "./components/Projects/projects.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
