

import React, { useState } from "react";
import axios from "axios";




function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://automatic-space-system-v6v6pxwv66wrhpvx6-4000.app.github.dev/api/v1/tourist", {
      
    
    
      
    }).then((response) => {
      console.log("then worked");
      console.log(response);
      window.location.href = "/";
    }).catch((error) => {
      console.log();
      console.log("catch worked");
      console.log(error);
    });

    setEmail("");
    setPassword("");
  };
  return (

    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login here 🚪</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>

  );












}

export default App;
