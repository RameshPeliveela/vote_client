import './header.css'
import { IoPersonCircle } from "react-icons/io5";
import {contexProvider} from '../store/voting-app-store'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

function Header(){
  let contextObj = useContext(contexProvider)
  let { userState, handleOnProfile, handleOnSignup, handleOnMyVote } = contextObj;
  
    return(
    <header className="p-3 text-bg-dark headContainer">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
          <li onClick={()=>{ handleOnMyVote()}}><Link to="/my-vote" className="nav-link px-2 text-white">MyVote</Link></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end profile-container">
        <div className="dropdown text-end">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <IoPersonCircle className='profile-picture'/>
          </a>
          <ul className="dropdown-menu text-small">
            <li onClick={()=>{handleOnProfile()}}><Link className="dropdown-item" to="/profile">Profile</Link></li>
            <li><hr className="dropdown-divider"/></li>

            {userState === 'logout' && <li><Link className="dropdown-item" to="/signup">Signup/Signin</Link></li>}
            {userState === 'login' && <li onClick = {()=>{handleOnSignup();}}><Link className="dropdown-item" to="/">signout</Link></li>}
          </ul>
        </div>
        </div>
      </div>
    </div>
  </header>
    )
}

export default Header;