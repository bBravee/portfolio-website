import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home/Home.js';
import NavBar from './components/Navbar/NavBar.js';
import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
