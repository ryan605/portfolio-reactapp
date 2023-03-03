import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar bg-body-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">PORTFOLIO</a>
         <div className="navbar">
                <a className="nav-link active" href="/home">Projects</a>
                <a className="nav-link active" href="/login">Logout</a>
        </div>
        </div>
      </nav>
    )
}