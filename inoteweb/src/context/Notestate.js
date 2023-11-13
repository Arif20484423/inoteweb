import React,{useState} from "react";
import Notecontext from "./Notecontext";

 const Notestate=(props)=>{
  const [notes,setNotes]= useState([]);
  const [alertf,setAlertf]=useState("none");
  const [alertm,setAlertm]=useState("");
  const showalert=()=>{
    setTimeout(() => {
      setAlertf("none");
    }, 3000);
  }
    const getnotes=async ()=>{
    // console.log('trying')
    const response = await fetch("https://inoteweb.onrender.com/api/notes/getnotes", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  // console.log('got')
  const json=await response.json();
  // console.log("here to go");
  console.log(json); // parses JSON response into native JavaScript objects
  setNotes(json);
  }
  
   
    const addNote=async (title,desc)=>{
      const response = await fetch("https://inoteweb.onrender.com/api/notes/addnote", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({"title":title,"desc":desc}),
    });

    getnotes();
    }
    const deleteNote=async (id)=>{
      const response = await fetch(`https://inoteweb.onrender.com/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    getnotes();
    }
    const editNote=async (id,title,desc)=>{
      
      const response = await fetch(`https://inoteweb.onrender.com/api/notes/updatenote/${id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify({title,desc}),
      });
  
      getnotes();
    }
    return <Notecontext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getnotes,alertf,setAlertf,alertm,setAlertm,showalert}}>
        {props.children}
    </Notecontext.Provider>
 };

export default Notestate



