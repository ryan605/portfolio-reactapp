import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className="navbar bg-body-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">PORTFOLIO</NavLink>
         <div className="navbar">
                <NavLink className="nav-link active" to="/project">Projects</NavLink>
                <NavLink className="nav-link active" to="/login">Logout</NavLink>
                <NavLink className="nav-link active" to="/project/new">create</NavLink>
                <NavLink to="/signup">signup</NavLink>
        </div>
        </div>
      </nav>
    )
}