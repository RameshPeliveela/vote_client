import {contexProvider} from '../store/voting-app-store'
import { useContext } from 'react'
import './Homepage.css'
function HomePage(){ 
    let contextObj = useContext(contexProvider)
    let { allCandidates } = contextObj;
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
 <table className="table candidates-container">
  <thead>
    <tr>
      <th scope="col">S.NO.</th>
      <th scope="col">Candidate Name</th>
      <th scope="col">Party</th>
      <th scope="col">Constituency</th>
      <th scope="col">Votes</th>
    </tr>
  </thead>
  <tbody>
    {allCandidates.map((candidate, index)=>(
            <tr key={index+1}>
            <th scope="row">{index+1}</th>
            <td>{candidate.name}</td>
            <td>{candidate.party}</td>
            <td>{capitalizeFirstLetter(candidate.constituency)}</td>
            <td>{candidate.voteCount}</td>
          </tr>
    ))}
  </tbody>
</table>
    )
}

export default HomePage
