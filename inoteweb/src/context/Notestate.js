import React, { useState } from "react";
import Notecontext from "./Notecontext";

const Notestate = (props) => {
  const [notes, setNotes] = useState([]);
  const [alertf, setAlertf] = useState("none");
  const [alertm, setAlertm] = useState("");
  const showalert = () => {
    setTimeout(() => {
      setAlertf("none");
    }, 3000);
  };
  const getnotes = async () => {
    const response = await fetch(
      "https://inoteweb.onrender.com/api/notes/getnotes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const json = await response.json();

    console.log(json);
    setNotes(json);
  };

  const addNote = async (title, desc) => {
    const response = await fetch(
      "https://inoteweb.onrender.com/api/notes/addnote",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title: title, desc: desc }),
      }
    );

    getnotes();
  };
  const deleteNote = async (id) => {
    const response = await fetch(
      `https://inoteweb.onrender.com/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    getnotes();
  };
  const editNote = async (id, title, desc) => {
    const response = await fetch(
      `https://inoteweb.onrender.com/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, desc }),
      }
    );

    getnotes();
  };
  return (
    <Notecontext.Provider
      value={{
        notes,
        setNotes,
        addNote,
        deleteNote,
        editNote,
        getnotes,
        alertf,
        setAlertf,
        alertm,
        setAlertm,
        showalert,
      }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
