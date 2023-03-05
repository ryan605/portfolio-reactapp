import React from "react";
import background from "/home/langat/development/code/mode_3/portfolio-reactapp/my-portfolio-reactapp/src/components/work.jpeg"


function Home({setProject}){
    console.log(setProject)

    // const project = newProject.map(
    //     (value)=>{
    //         return(
    //             <div className="card text-bg-light ms-2 mt-2 col-2">
    //             <div className="card-body">
    //                 <h5 className="card-title">{value.project_name}</h5>
    //                 <h6 className="card-subtitle mb-2 text-muted">description</h6>
    //                 <p className="card-text">{value.description}</p>
    //                 <a href="/projects" className="card-link text-dark">{value.image_ur}</a>
    //                 <a href="/projects" className="card-link text-dark">{value.repo_url}</a>
    //                 <p className="words">created_at:{value.created_at}</p>
    //                 <p className="words">updated_at:{value.updated_at}</p>
    //             </div>
    //         </div>
    //         )
    //     }
    // )

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
        {/* <div className="row ms-2">
            {project}
        </div>
        <h1>CREATE YOUR PROJECT</h1> */}
    </div>
    )
}
export default Home
///home/langat/development/code/mode_3/portfolio-reactapp/my-portfolio-reactapp/work.jpeg