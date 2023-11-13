import React, { useContext, useEffect, useState, useRef } from "react";
import NoteContext from "../context/Notecontext";
function Note(props) {
  let context = useContext(NoteContext);
  let {
    addNote,
    deleteNote,
    editNote,
    getnotes,
    setAlertf,
    setAlertm,
    showalert,
  } = context;

  return (
    <div className="card mx-1 my-1 col-lg-2 col-md-3 col-sm-4 ">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <i
          className="fa-solid fa-trash mx-2"
          onClick={() => {
            deleteNote(props.id);
            setAlertf("block");
    setAlertm("Alert: Note deleted successfully");
    showalert();
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square mx-2"
          onClick={() => {
            props.updatenote(props.id);
          }}
        ></i>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
}
export default Note;
