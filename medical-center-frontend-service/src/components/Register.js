import React, { useState } from 'react';
import axios from "axios";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    // handleUsernameChange
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    // handlePasswordChange
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://automatic-space-system-v6v6pxwv66wrhpvx6-4000.app.github.dev/api/v1/tourist", {
            
            name: name,            
            email: email,
            country: country,
            phoneNumber: phoneNumber,
            username: username,
            password: password
            
      
     
      
    }).then((response) => {
      console.log("then worked");
       
        console.log(name);
        console.log(email);
        console.log(country);
        console.log(phoneNumber);
        console.log(username);
        console.log(password);



      console.log(response);
      window.location.href = "/";
    }).catch((error) => {
      
      if (error.response) {
        
        console.log("error in response");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log("error in request");
        
        console.log(error.request);
        setName(error.request);
      } else {
        console.log("other error");
        console.log('Error', error.message.toJSON());
      }

      // console.log(error.config);
    });
    setName("");
    setCountry("");
    setPhoneNumber("");
    setEmail("");
    setUsername("");
    setPassword("");
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" value={country} onChange={handleCountryChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </label>
                <br />
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

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
