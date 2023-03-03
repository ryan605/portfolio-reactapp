import React,{useEffect,useState} from 'react';
import Login from './components/login';
import './App.css';
import Home from './components/home';
import Project from './components/projects';
import Navbar from './components/navbar';
import NotFound from './components/notFound';
import Signup from './components/signup';


function App() {


  let projectUrl = "http://localhost:5000/projects"

  const [newProjects, setProjects] = useState([])
     useEffect(() =>{
      fetch(projectUrl)
           .then((response)=>response.json())
           .then((data)=>{
            setProjects(data)
           })
     },[])



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
    // case "/signup":
    // Component = Signup
    //   break
    default:
      Component = NotFound;
 }
  return (
  <div>
    <Navbar/>
    <Component/>
    <Project newProject={newProjects}/>
  </div>
  );
}

export default App;
