import {createContext} from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
export let contexProvider = createContext()

function VotingAppFunction({children}){
    let [userState, setUserState] = useState('logout')
    let [allCandidates, setAllCandidates] = useState([]);
    let [token, setToken] = useState('');
    let [profile, setProfile] = useState({});
    let [candidates, setCandidates] = useState([])
    const navigate = useNavigate()

    const getData = async ()=>{             
        const response = await axios.get('https://vote-server-yf9j.onrender.com/'); 
        setAllCandidates(response.data)      
    }
    const getToken = ()=>{
        const value = Cookies.get('TokenId')
        if(value){
            setToken(value)
            setUserState('login')
        }
    }  
    useEffect(()=>{
        getData();
        getToken();
    }, [])
    
    const register = async (name, age, mobile, email, address, constituency, aadhaarNumber, password)=>{
        const formData = {
            name,
            age,
            mobile,
            email,
            address,
            constituency,
            aadhaarNumber,
            password
        }
        
        const response = await axios.post('https://vote-server-yf9j.onrender.com/user/signup', formData);
        if(response.status === 201){
            navigate('/login')
        }
        else{
            alert("PLease try again")
        }                
    }

    
    const login = async (aadhaarNumber, password)=>{
        const formData = {
            aadhaarNumber,
            password
        }
        try{
            const response = await axios.post('https://vote-server-yf9j.onrender.com/user/signin', formData)
            if(response.status === 200){
                const {Token} = response.data
                Cookies.set('TokenId', Token);
                setUserState('login')
                setToken(Token)
                navigate('/')
            }
        }
        catch(err){
            alert(err.response.data.Error)
        }
    }

    const handleOnProfile = async ()=>{
        try{
            const response = await axios.get('https://vote-server-yf9j.onrender.com/user/profile/', {
                headers:{
                    'Authorization': token
                },
            });
            const data = response.data.user;
            setProfile(data)
        }
        catch(err){
            alert(err.response.data.Error)
        }
    }

    const handleOnSignup = ()=>{
        Cookies.remove('TokenId');
        setToken('');
        setUserState('logout');
        setProfile({});
    }

    const handleOnMyVote = async ()=>{
        try{
            const response = await axios.get('https://vote-server-yf9j.onrender.com/user/candidates', {
                headers:{
    
                    'Authorization': token
                },
            })
            setCandidates(response.data)
        }
        catch(err){
            alert(err.response.data.Error)
        }
    }

    const handleOnCastingVote = async (candidateId)=>{
        try{
            const response = await axios.post(`https://vote-server-yf9j.onrender.com/user/vote/${candidateId}`, {},
                {
                headers:{
                  'Authorization':token
              }
          })
        }
        catch(err){
            alert(err.response.data.Error)
        }
          
    }
    return(
        <contexProvider.Provider value={{allCandidates: allCandidates, register: register, login:login, userState:userState, handleOnProfile:handleOnProfile, profile:profile, handleOnSignup:handleOnSignup, token:token, handleOnMyVote:handleOnMyVote, candidates:candidates, handleOnCastingVote:handleOnCastingVote}}>

            {children}
        </contexProvider.Provider>
    )
}

export default VotingAppFunction;
