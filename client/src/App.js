import './App.css';
import axios from "axios";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
       axios.get("http://localhost:3001/Posts").then((response)=>{
          console.log("response");
       })
  },[])
  return (
    <div className="App">
     
     
    </div>
  );
}

export default App;
