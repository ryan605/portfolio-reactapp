import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import './App.css';
import Home from './components/home';
import Project from './components/projects';
import Navbar from './components/navbar';
import Signup from './components/signup';
import ProjectItem from './components/projectitem';



function App() {  
  return (
  <div>
     <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/project" element={<Project/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path='/project/new'element={<ProjectItem/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
