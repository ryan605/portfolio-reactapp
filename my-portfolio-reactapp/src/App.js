// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import './App.css';
import Home from './components/home';
import Project from './components/projects';
import Navbar from './components/navbar';


function App() {
  let Component
 switch (window.location.pathname){
  case "/home":
    Component = Home
   break
   case "/project":
    Component = Project
    break
    case "/login":
      Component = Login
      break
 }
  return (
  <div>
    <Navbar/>
    <Component/>
  </div>
  );
}

export default App;
