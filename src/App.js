import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar from './NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import Habitats from './Habitats/Habitats';
import AboutUs from './AboutUs/AboutUs';
import Animals from './Animals/Animals';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBvMcLjt7eA2vOPaIPh_wh6Zbr20osI5LE",
//   authDomain: "lionnet-c5128.firebaseapp.com",
//   projectId: "lionnet-c5128",
//   storageBucket: "lionnet-c5128.appspot.com",
//   messagingSenderId: "404862648826",
//   appId: "1:404862648826:web:697a83c57a6bcb1a44e443",
//   measurementId: "G-8NTH1TC2WB"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <NavBar exact path="/" component={HomePage}/>
          <NavBar exact path="/habitats" component={Habitats}/>
          <NavBar exact path="/aboutus" component={AboutUs}/>
          <NavBar exact path="/animals" component={Animals}/>
        </Switch>
      </Router>
    </>
  );
}
