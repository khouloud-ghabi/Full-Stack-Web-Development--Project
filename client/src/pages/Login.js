import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = () => {
    const data = { userName: userName, password: password };
    axios.post("http://localhost:3001/auth/login", data)
      .then((response) => {
       if(response.data.error){
        alert(response.data.error);
       } else{
        sessionStorage.setItem("accessToken",response.data);
       }
      });  
  };

  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={login}> Login </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
