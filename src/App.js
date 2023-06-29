import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home/Home.js';
import NavBar from './components/Navbar/NavBar.js';
import Footer from './components/Footer/Footer';

import { Routes, Route } from 'react-router-dom';

import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails';
import Contact from './components/Contact/Contact';

import weatherAppImg from './assets/weatherAppPreview.jpg';
import workoutAppImg from './assets/workoutAppPreview.png'

function App() {

  const projectsData = [
    [
        {
            id: 0,
            title: "Weather App",
            shortDescription: "Check current weather in choosen city",
            description: "WeatherApp is an application that allows you to check current weather with many details in choosen city. Using Weather app you can also check the 5-day weather forecast for any city that you serached for.",
            badges: [
                "React",
                "Bootstrap",
                "Axios",
                "Api"
            ],
            imgUrl: weatherAppImg,
            repoUrl: "https://github.com/bBravee/weather-app-react",
            height: 400
        },
    ],
    [
        {   id: 2,
            title: "Workout App",
            shortDescription: "App that improves your training routine",
            description: "Workout-app is a mobile application built with React Native that aims to help people with their training routines. The app allows users to choose a body part they want to train, select from a list of exercises generated based on the chosen body part, filter exercises by difficulty, add exercises to their favorites, and view complete instructions on how to perform the selected exercise",
            badges: [
                "React-native",
                "Expo",
                "Api"
            ],
            imgUrl: workoutAppImg,
            repoUrl: "https://github.com/bBravee/workout-app",
            height: 300
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

// Dowiedzieć się czemu projectData gdy jest importowany i przekazany jako props to w komponencie ma wartości undefined