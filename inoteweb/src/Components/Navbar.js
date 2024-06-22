import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#7692F8", color: "white" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: `${location.pathname === "/" ? "white" : "#D7D5DB"}`,
                  }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {!localStorage.getItem("token") ? (
                <div>
                  <Link to="/login">
                    <button
                      type="button"
                      style={{
                        float: "right",
                        border: "2px solid white",
                        backgroundColor: "#7692F8",
                        right: "100px",
                        position: "absolute",
                      }}
                      className=" mx-2 my-1 btn btn-primary"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <button
                      type="button"
                      style={{
                        float: "right",
                        border: "2px solid white",
                        backgroundColor: "#7692F8",
                        right: "5px",
                        position: "absolute",
                      }}
                      className="mx-2 my-1 btn btn-primary"
                    >
                      Signup
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  type="button"
                  style={{
                    float: "right",
                    border: "2px solid white",
                    backgroundColor: "#7692F8",
                    right: "5px",
                    position: "absolute",
                  }}
                  className="mx-2 my-1 btn btn-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
