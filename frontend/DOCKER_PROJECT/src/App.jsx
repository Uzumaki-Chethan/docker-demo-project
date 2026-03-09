import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");

const API=import.meta.env.VITE_API_URL;

  const registerUser=async()=>{
    try{
      const res=await axios.post(`${API}/register`,{
        username,
        email,
        password
      });

      setMessage(res.data.message);

    }catch(err){
      setMessage("Registration Failed");
    }
  }

  const loginUser=async()=>{
    try{
      const res=await axios.post(`${API}/login`,{
        email,
        password
      });

      setMessage(res.data.message);

    }catch(err){
      setMessage("Login Failed");
    }
  }

  return(
    <div className="container">

      <h2>Docker Demo Login App</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={registerUser}>Register</button>
      <button onClick={loginUser}>Login</button>

      <p>{message}</p>

    </div>
  )
}

export default App;