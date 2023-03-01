import React from "react";

function Login(){
    return(
        <div className="container mt-4 cols-2">      
        <div className="row">
        <form >
          <label htmlFor="InputName" className="form-label"> Username:  </label>
          <input className="form-control" type="text" />
          <br />
          <label htmlFor="InputName" className="form-label"> Password:</label>
          <input className="form-control" type="password"  />
          <br/>
          <a href="/login">
          <button className="btn btn-primary" type="submit">Login</button>
          </a>
        </form>
      </div>
      {/* <p className="press">Login</p> */}
    </div>
    )
}
export default Login