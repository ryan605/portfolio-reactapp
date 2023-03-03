import React from "react";
import background from "/home/langat/development/code/mode_3/portfolio-reactapp/my-portfolio-reactapp/src/components/work.jpeg"


function Home(){
    return(
     <div  style={{
        backgroundImage: `url(${background})`,
        height: '88vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <center>
            <h2>WELCOME TO YOUR VIRTUAL STORAGE ROOM</h2>
            <h2>BUILD YOUR PROJECT AND WE KEEP IT</h2>  
        </center>
        <span></span>
        <h2>ALREADY EXISTING PROJECTS</h2>
        <div className="card text-bg-light ms-2 mt-2 col-2">
            <div className="card-body">
                <h5 className="card-title">projectname</h5>
                <h6 className="card-subtitle mb-2 text-muted">description</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link text-dark">image url</a>
                <a href="/projects" className="card-link text-dark">repo_url</a>
                <p className="words">created_at:</p>
                <p className="words">updated_at:</p>
            </div>
        </div>
    </div>
    )
}
export default Home
///home/langat/development/code/mode_3/portfolio-reactapp/my-portfolio-reactapp/work.jpeg