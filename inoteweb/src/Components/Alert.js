import React,{useContext} from "react";
import Notecontext from "../context/Notecontext";
function Alert(){
    const context=useContext(Notecontext);
    let {alertf,alertm}=context;
    return (
        <div style={{height:"30px"}}>
      <div class="alert alert-primary" style={{fontSize:"10px",padding:"8px",borderRadius:"0px",display:alertf}} role="alert">
  {alertm}
</div></div>
    )
}

export default Alert;