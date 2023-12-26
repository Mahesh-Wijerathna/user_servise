import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/v1/buyers", {
      name: name,
      email: email,
      password: password,
      phone: "123-456-7890"
    }).then((response) => {
      console.log(response);
      window.location.href = "/";
    }).catch((error) => {
      

      if (error.response) {
        
        console.log("error.response");
        console.log(error.response.data.toJSON());
        console.log(error.response.status.toJSON());
        console.log(error.response.headers.toJSON());
      } else if (error.request) {
        console.log("error.request");
        
        console.log(error.request.toJSON());
      } else {
        console.log("other eror");
        console.log('Error', error.message.toJSON());
      }
      // console.log(error.config);
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
};

export default Home;