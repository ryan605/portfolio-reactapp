import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/login">PORTFOLIO</a>
        <div className="navbar">
                <a className="nav-link active" href="/project">Projects</a>
                <a className="nav-link active" href="/login">Login</a>
                <a className="nav-link active" href="/signup">Signup</a>
        </div>
        </div>
      </nav>
    )
}