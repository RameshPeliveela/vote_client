import {contexProvider} from '../store/voting-app-store'
import { useContext } from 'react'
function ProfilePage(){
    let contextObj = useContext(contexProvider)
    let { profile } = contextObj;
    
    return(
        <div>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Email: {profile.email}</p>
            <p>Mobile:{profile.mobile}</p>
            <p>Aadhaar Number:{profile.aadhaarNumber}</p>
            <p>Address: {profile.address}</p>
            <p>Constituency:{profile.constituency}</p>
            
        </div>
    )
}

export default ProfilePage;