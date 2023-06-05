import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home/Home.js';
import NavBar from './components/Navbar/NavBar.js';
import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';

import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails';

function App() {

  const projectsData = [
    [
        {
            id: 0,
            title: "Weather App",
            description: "WeatherApp is an application that allows you to check current weather with many details in choosen city. Using Weather app you can also check the 5-day weather forecast for any city that you serached for.",
            badges: [
                "react",
                "axios",
                "api"
            ],
            imgUrl: "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            height: 400
        },
        {
            id: 1,
            title: "Workout App",
            description: "An application that aims to help people with their training.",
            badges: [
                "react-native",
                "expo",
                "api"
            ],
            imgUrl: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80",
            height: 300
        },
    ],
    [
        {   id: 2,
            title: "Workout App",
            description: "An application that aims to help people with their training.",
            badges: [
                "react-native",
                "expo",
                "api"
            ],
            imgUrl: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80",
            height: 300
        },
        {
            id: 3,
            title: "Weather App",
            description: "An application that allows you to check the current weather.",
            badges: [
                "react",
                "axios",
                "api"
            ],
            imgUrl: "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            height: 380
        },
        {   id: 4,
            title: "Workout App",
            description: "An application that aims to help people with their training.",
            badges: [
                "react-native",
                "expo",
                "api"
            ],
            imgUrl: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80",
            height: 360
        },
    ]
];

  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects projectsData={projectsData}/>} />
          <Route path="/projects/:id" element={<ProjectDetails projectsData={projectsData} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

// Dowiedzieć się czemu projectData gdy jest importowany i przekazany jako props to w komponencie ma wartości undefined