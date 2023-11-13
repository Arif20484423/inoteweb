import react,{useEffect} from "react";
import {Link,useLocation,useNavigate} from "react-router-dom"

function Navbar(){
   const location=useLocation();
   const navigate=useNavigate();
  //  useEffect(()=>{
  //   console.log(location.pathname)
  //  },[location])
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')

  }
    return <div>
        <nav className="navbar navbar-expand-lg  " style={{backgroundColor:"#7692F8",color:"white"}}>
  <div className="container-fluid" >
    <a className="navbar-brand" href="#" style={{color:"white"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" style={{color:`${location.pathname==='/'?"white":"#D7D5DB"}`}} aria-current="page" to="/" >Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color:`${location.pathname==='/about'?"white":"#D7D5DB"}`}}>About</Link>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a style={{color:"white"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" style={{color:"white"}}>
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            
          </ul>
        </li> */}
        {!localStorage.getItem('token')?<div><Link to="/login"><button type="button" style={{float:"right",border:"2px solid white",backgroundColor:"#7692F8",right: "100px",position: "absolute"}} className=" mx-2 my-1 btn btn-primary">Login</button></Link>
        <Link to="/signup">  <button type="button" style={{float:"right",border:"2px solid white",backgroundColor:"#7692F8",right: "5px",position: "absolute"}} className="mx-2 my-1 btn btn-primary">Signup</button></Link></div>:<button type="button" style={{float:"right",border:"2px solid white",backgroundColor:"#7692F8",right: "5px",position: "absolute"}} className="mx-2 my-1 btn btn-primary" onClick={handleLogout}>Logout</button>}
        
        
        
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={{color:"white"}}>Search</button>
      </form> */}
    </div>
    
  </div>
</nav>
    </div>
}

export default Navbar;