import { useRef } from "react"
import {contexProvider} from '../store/voting-app-store'
import { useContext } from 'react' 
import { Link } from 'react-router-dom';
function LoginPage(){
    let contextObj = useContext(contexProvider)
    let {login} = contextObj;

    const aadhaarElement = useRef();
    const passwordElement = useRef();
    function handleOnsubmit(event){
        event.preventDefault();
        const aadhaarNumber = aadhaarElement.current.value;
        const password = passwordElement.current.value;
        login(aadhaarNumber, password)
    }
    return(
<div className="form-container">
<form onSubmit={handleOnsubmit}>
  <div className="mb-3">
    <label htmlFor="aadhaarNumber" className="form-label">AadhaarNumber</label>
    <input type="number" className="form-control" id="aadhaarNumber" ref={aadhaarElement}/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" ref={passwordElement}/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
<p style={{margin: '10px', fontSize:'20px'}}>Click here to register <Link className='formText' to='/signup'>Signup</Link></p>
</div>
    )
}

export default LoginPage
