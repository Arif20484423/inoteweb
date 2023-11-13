import React, { useContext, useState } from "react"
import {useNavigate} from "react-router-dom";
import Notecontext from "../context/Notecontext"

function Login(){
    const context=useContext(Notecontext);
    let {setAlertf,setAlertm,showalert}=context;
    let navigate=useNavigate();
     const [email,setEmail]=useState("");
     const [pass,setPass]=useState("");

     const log=async (nam)=>{
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify({email:email,password:pass})
      });
        const json=await response.json();
        console.log(json);
        if(json.success){
            setAlertf("block")
            setAlertm("Alert : you are logged in ")
            showalert()
            localStorage.setItem("token",json.token);
            navigate('/')
        }
        else{
            setAlertf("block")
            setAlertm("Alert : Invalid Credentials ")
            showalert()
        }
      }

    function handlesubmit(e){
        e.preventDefault();
        console.log(email+" "+pass)
        log();
    }
 return (<div  style={{width:"75vw",height:"75vh",display:"grid",placeItems:"center"}}>
    
    <div className="" style={{}}>
    <h4>Login to Continue</h4>
    <h6>If not registered Signup first </h6>
        <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label" >Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="name@example.com" style={{width:"300px"}}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
  <input type="text"  className="form-control"  onChange={(e)=>setPass(e.target.value)} value={pass}   style={{width:"300px"}}/>
  
</div>
<button type="button" onClick={handlesubmit}  className="mx-2 my-1 btn btn-primary">Login</button>
    </div></div>
 )
}

export default Login