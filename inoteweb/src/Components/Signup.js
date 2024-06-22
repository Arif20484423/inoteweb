import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Notecontext from "../context/Notecontext";
import Loading from "./Loading";
function Signup() {
  const context = useContext(Notecontext);
  let { setAlertf, setAlertm, showalert } = context;
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const log = async (nam) => {
    setLoading((loading) => true);
    const response = await fetch(
      `https://inoteweb.onrender.com/api/auth/createuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: pass }),
      }
    );
    const json = await response.json();
    console.log(json);
    setLoading((loading) => false);
    if (json.success === "user created") {
      setAlertf("block");
      setAlertm("Alert : you are signed up and logged in ");
      showalert();
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      setAlertf("block");
      setAlertm("Alert : User already exists ");
      showalert();
    }
  };

  function handlesubmit(e) {
    e.preventDefault();
    console.log(email + " " + pass);
    log();
  }
  return !loading ? (
    <div
      style={{
        width: "75vw",
        height: "75vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="" style={{}}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="name@example.com"
            style={{ width: "300px" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            style={{ width: "300px" }}
          />
        </div>
        <button
          type="button"
          onClick={handlesubmit}
          className="mx-2 my-1 btn btn-primary"
        >
          Signup
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Signup;
