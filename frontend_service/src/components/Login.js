import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("https://automatic-space-system-v6v6pxwv66wrhpvx6-4000.app.github.dev/api/v1/tourist/login", {
            username: username,
            password: password,
    })//then and catch
    .then((response) => {
      console.log("then worked");
      console.log(response);
      //
    }).catch((error) => {
      
      if (error.response) {
        
        console.log("error in response");
        console.log(error.response.data);
      } else if (error.request) {
        
        console.log("error in request");
        console.log(error.request);
      } else {
        
        console.log("error in something else");
        console.log(error.message);
      }
    })

    console.log(response);


    dispatch(
      login(response.data)
    );

    //  setuser name and password to empty string
    setUsername("");
    setPassword("");

    // redirect to the logout page
    window.location = "/logout";
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
