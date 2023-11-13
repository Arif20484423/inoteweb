import React, {useContext,useState,useRef ,useEffect}  from "react";
import Notecontext  from "../context/Notecontext";
import Addnote from "./Addnote"
import Note from "./Note";
function Home() { 
  
    return (<div>
    <h4 className="mt-3">Add a Note</h4>
    <Addnote/>
</div>)
    
    
 }

 export default Home;