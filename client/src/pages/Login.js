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
        if (response.data.error) {
          alert(response.data.error);
        } else {
          sessionStorage.setItem("accessToken", response.data.accessToken);
        }
      })
      .catch((err) => {
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('Response Error:', err.response.data);
          setError(err.response.data.message);
        } else if (err.request) {
          // The request was made but no response was received
          console.log('Request Error:', err.request);
          setError("No response from server.");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('General Error:', err.message);
          setError("An error occurred.");
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
