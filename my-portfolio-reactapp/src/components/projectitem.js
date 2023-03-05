import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem(){

    let projectUrl = "http://localhost:9292/projects"

    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[repourl, setRepoUrl] = useState('')
    const history = useNavigate();

    function handleSubmit (e){
        e.preventDefault()
        if(name!==""){
            const projectData = {name,description,repourl}
            console.log(projectData)
            fetch(projectUrl,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(projectData)
            }).then((response)=>{
                history('/project')
            })
        }else{
            alert('name required')
        }

    }

    function getProjectName(e){
        setName(e.target.value)
    }
    function getProjectDescription(e){
        setDescription(e.target.value)
    }
    function getRepoUrl(e){
        setRepoUrl(e.target.value)
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '0 auto'
    }

    const inputStyle = {
        marginBottom: '1rem'
    }


    return(
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="InputName" className="form-label">{`Blog Name`}</label>
            <input type="text" value={name} onChange={getProjectName} className="form-control" id="InputName"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">{`Blog Content`}</label>
            <textarea value={description} className="form-control" onChange={getProjectDescription} id="descriptionFormControlTextarea1" rows="14"></textarea>
            <small value={repourl} className="form-control"onChange={getRepoUrl}></small>
        </div>
        <button type="submit" className="btn btn-primary">{`Create Blog`}</button>
    </form>
    
    )
}
export default ProjectItem