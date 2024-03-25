import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home.js";
import NavBar from "./components/Navbar/NavBar.js";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails/ProjectDetails";
import Contact from "./components/Contact/Contact";

import { projectsData } from "./components/constants/projectsData.js";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<Projects projectsData={projectsData} />}
          />
          <Route
            path="/projects/:id"
            element={<ProjectDetails projectsData={projectsData} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
