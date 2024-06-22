import React, { useContext } from "react";
import NoteContext from "../context/Notecontext";
import "./styles.css";
function Note(props) {
  let context = useContext(NoteContext);
  let { deleteNote, setAlertf, setAlertm, showalert } = context;

  return (
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
    </div>
  );
}
export default Note;
