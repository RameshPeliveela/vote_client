import {contexProvider} from '../store/voting-app-store'
import { useContext, useEffect, useState } from 'react'
function Myvote(){
  let contextObj = useContext(contexProvider)
  let { profile, candidates, handleOnCastingVote } = contextObj;
  const { isVoted } = profile
  
  let [isVotedValue, setisVotedValue] = useState()

  useEffect(()=>{
    setisVotedValue(isVoted)
  }, [isVoted])

  const handleOnClick = async (candidateId)=>{
    const statusCode = await handleOnCastingVote(candidateId);
    if(statusCode === 200){
      setisVotedValue(true)
    }
  }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return(
      <div>
        <table className="table candidates-container">
        <thead>
          <tr>
            <th scope="col">S.NO.</th>
            <th scope="col">Candidate Name</th>
            <th scope="col">Party</th>
            <th scope="col">Constituency</th>
            <th scope="col">Vote Here</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index)=>(
                  <tr key={index+1}>
                  <th scope="row">{index+1}</th>
                  <td>{candidate.name}</td>
                  <td>{candidate.party}</td>
                  <td>{capitalizeFirstLetter(candidate.constituency)}</td>
                  <td><button className ={`btn btn-primary ${isVotedValue && 'disabled'}`} onClick={()=>{handleOnClick(candidate._id)}}>Vote</button></td>
                </tr>
          ))}
        </tbody>
      </table>

      {isVotedValue && <div className="alert alert-primary" role="alert">
                       Yov Have Casted Your Vote
                      </div>}
      </div>
    )
}

export default Myvote;
