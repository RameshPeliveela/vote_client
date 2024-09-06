import { useRef } from 'react';
import './Sign.css'

import {contexProvider} from '../store/voting-app-store'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

function Signup(){

    let contextObj = useContext(contexProvider)
    let { register } = contextObj;

    let nameElement  = useRef();
    let ageElement = useRef();
    let mobileElement = useRef();
    let emailElement = useRef()
    let addressElement = useRef();
    let constituencyElement = useRef();
    let aadhaarElement = useRef()
    let passwordElemnt = useRef()
    
    const handleOnSignUpSubmit = (event)=>{
        event.preventDefault()
        const name = nameElement.current.value;
        const age = ageElement.current.value;
        const mobile = mobileElement.current.value;
        const email = emailElement.current.value;
        const address = addressElement.current.value;
        const constituency = constituencyElement.current.value;
        const aadhaarNumber = aadhaarElement.current.value;
        const password = passwordElemnt.current.value;
        register(name, age, mobile, email, address, constituency, aadhaarNumber, password)
    }
    return(
        
        <div className="form-container">
        <form  autoComplete='off' method='post' onSubmit={handleOnSignUpSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" ref={nameElement} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" ref={ageElement} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input type="text" className="form-control" id="mobile" ref={mobileElement}/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" ref={emailElement}/>
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">Full Address</label>
                <input type="text" className="form-control" id="address" ref={addressElement} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="constituency" className="form-label">Constituency</label>
                <input type="text" className="form-control" id="constituency" ref={constituencyElement} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="aadhaarNumber" className="form-label">Aadhaar Number</label>
                <input type="number" className="form-control" id="aadhaarNumber" ref={aadhaarElement} required/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" ref={passwordElemnt} required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p style={{margin: '10px', fontSize:'20px'}}>If you already have an account <Link to='/login'className='formText' >Signin</Link></p>
    </div>
  
    )
}

export default Signup;