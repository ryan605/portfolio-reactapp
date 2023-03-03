import React,{useState } from "react"


function Signup(props){

  const[emailaddress, setEmail] = useState('')
  const[password, setPassword] = useState ('')

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailaddress, password }),
    });
    const data = await res.json();
    localStorage.setItem('token', data.token);
   console.log(`data`)
    }
    catch(err){
      console.log(err)
    }
  }
    return(
      <div>
        <form  onSubmit={handleSubmit}>
        <label>
          EMAIL ADDRESS
          <input type="text"value={emailaddress} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          PASSWORD:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
        CONFORM PASSWORD:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <br/>
        <button type="submit">SIGN UP</button>
        {/* <button className="press" onClick={()=>props.onformSwitch('Login')}><a href="#">Already have an account? Sign in</a></button> */}
      </form>
      
        </div>
    )
    
}
export default Signup