import React,{useState,useEffect} from "react";

let projectUrl = "http://localhost:9292/projects"
function Project(){


    const [newProjects, setProjects] = useState([])
   useEffect(() =>{
    fetch(projectUrl)
         .then((response)=>response.json())
         .then((data)=>{
          setProjects(data)
         })
        
   },[])

   function handleDestroy(id){
    fetch(projectUrl/id)
   }

    let project;
    if (newProjects && newProjects.length > 0) {
      project = newProjects.map((value, index) => {
        return (
          <div className="card text-bg-light ms-2 mt-2 col-2" key={index}>
            <div className="card-body">
              <h5 className="card-title">{value.project_name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">description</h6>
              <p className="card-text">{value.description}</p>
              <a href={value.image_url} className="card-link text-dark">
                {value.image_url}
              </a>
              <a href={value.repo_url} className="card-link text-dark">
                {value.repo_url}
              </a>
              <p className="words">created_at: {value.created_at}</p>
              <p className="words">updated_at: {value.updated_at}</p>
              <button onClick={()=>handleDestroy(value.id)}></button>
            </div>
          </div>
        );
      });
    }
    return(
        <div className="row">
            <h2>ALREADY EXISTING PROJECTS</h2>
            {project}
            <h2>CREATE YOUR PROJECT</h2>
        </div>
    )
}
export default Project