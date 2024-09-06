import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import VotingAppFunction from './store/voting-app-store.jsx'
import { Outlet } from "react-router-dom";

function App() {
  
  return (  
    <VotingAppFunction>
        <Header></Header>
        <Outlet></Outlet>
        
        <Footer></Footer> 
    </VotingAppFunction>
    
  )
}

export default App
