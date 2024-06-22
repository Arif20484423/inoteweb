import React, { useContext, useState, useRef, useEffect } from "react";
import Notecontext from "../context/Notecontext";
import Note from "./Note";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
function Addnote() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [utitle, setTitleu] = useState("");
  const [udesc, setDescu] = useState("");
  let ref = useRef(null);
  let refclose = useRef(null);
  let idref = useRef("");
  const [loading, setLoading] = useState(false);
  let context = useContext(Notecontext);
  let { notes, addNote, getnotes, editNote, setAlertf, setAlertm, showalert } =
    context;
  const handleClick = (event) => {
    event.preventDefault();
    setLoading((loading) => true);
    addNote(title, desc);
    setLoading((loading) => false);
    setAlertf("block");
    setAlertm("Alert: Note Added successfully");
    showalert();
    setTitle("");
    setDesc("");
  };
  const Updatenote = (idpara) => {
    ref.current.click();
    console.log(idpara);
    idref.current = idpara;
    console.log(idref.current);
  };
  const handleupdate = () => {
    ref.current.click();
    editNote(idref.current, utitle, udesc);
    setAlertf("block");
    setAlertm("Alert: Note updated successfully");
    showalert();
    setTitleu("");
    setDescu("");
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnotes();
    } else {
      navigate("/login");
    }
  }, []);
  return !loading ? (
    <div>
      <button
        ref={ref}
        type="button"
        style={{ display: "none" }}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="m-0">Title</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="1"
                style={{ width: "100%" }}
                onChange={(event) => {
                  setTitleu(event.target.value);
                }}
                value={utitle}
              ></textarea>
              <p className="m-0">Description</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="1"
                style={{ width: "100%" }}
                onChange={(event) => {
                  setDescu(event.target.value);
                }}
                value={udesc}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                refclose={refclose}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={utitle.length < 5 || udesc.length < 5}
                type="button"
                className="btn btn-primary"
                onClick={handleupdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <textarea
            style={{ display: "block", width: "70%" }}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            name="title"
            value={title}
            rows="1"
            cols="70"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>

          <textarea
            style={{ display: "block", width: "70%" }}
            name="desc"
            onChange={(event) => {
              setDesc(event.target.value);
            }}
            rows="3"
            cols="70"
            value={desc}
          ></textarea>
        </div>

        <button
          disabled={title.length < 5 || desc.length < 5}
          onClick={handleClick}
          className="btn btn-primary"
        >
          Submit
        </button>
        <h4>Your Notes</h4>
        <div className="container  ">
          <div className="row ">
            {notes?.map((note) => {
              return (
                <Note
                  key={note._id}
                  id={note._id}
                  title={"" + note.title}
                  updatenote={Updatenote}
                  note={note}
                  desc={note.desc}
                />
              );
            })}
          </div>
        </div>
      </form>
    </div>
  ) : (
    <Loading />
  );
}
export default Addnote;
