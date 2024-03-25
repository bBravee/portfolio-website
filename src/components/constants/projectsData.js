import weatherAppImg from "../../assets/weatherAppPreview.jpg";
import weatherAppImg2 from "../../assets/weatherAppPreview2.jpg";

import workoutAppImg from "../../assets/workoutAppImg.png";
import workoutAppImg2 from "../../assets/workoutAppImg2.png";

export const projectsData = [
  {
    id: 0,
    title: "Weather App",
    shortDescription: "Check current weather in choosen city",
    description:
      "WeatherApp is an application that allows you to check current weather with many details in choosen city. Using Weather app you can also check the 5-day weather forecast for any city that you serached for.",
    badges: ["React", "Bootstrap", "Axios", "Api"],
    imgUrl: [weatherAppImg, weatherAppImg2],
    repoUrl: "https://github.com/bBravee/weather-app-react",
    height: 400,
  },
  {
    id: 2,
    title: "Workout App",
    shortDescription: "App that improves your training routine",
    description:
      "Workout-app is a mobile application built with React Native that aims to help people with their training routines. The app allows users to choose a body part they want to train, select from a list of exercises generated based on the chosen body part, filter exercises by difficulty, add exercises to their favorites, and view complete instructions on how to perform the selected exercise",
    badges: ["React-native", "Redux", "Expo", "Api"],
    imgUrl: [workoutAppImg, workoutAppImg2],
    repoUrl: "https://github.com/bBravee/workout-app",
    height: 300,
  },
];
