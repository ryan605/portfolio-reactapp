import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">PORTFOLIO</a>
        <div className="navbar">
                <a className="nav-link active" href="/project">Projects</a>
                <a className="nav-link active" href="/login">Login</a>
        </div>
        </div>
      </nav>
    )
}