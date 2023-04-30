import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home/Home.js';
import NavBar from './components/Navbar/NavBar.js';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
