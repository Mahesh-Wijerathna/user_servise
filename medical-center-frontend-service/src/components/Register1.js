import React, { useState } from 'react';
import axios from "axios";
import './Register.css';
//import imageSrc from './image/image5.jpg';
const imageSrc = '/images/image5.jpg';



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
        <div className="Reg">
            <h2>Register as a Tourist</h2>
            <h3 className="subtext1">By registering you will be able to avail our services</h3>
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} className="form-control"
                placeholder="Enter Name"/>
                </label>
                <br />
                <label className="form-label">
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} className="form-control"
                placeholder="Enter E-mail"/>
                </label>
                <br />
                <label className="form-label">
                    Country:
                    <input type="text" value={country} onChange={handleCountryChange} className="form-control"
                placeholder="Enter Country"/>
                </label>
                <br />
                <label className="form-label">
                    Phone Number:
                    <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} className="form-control"
                placeholder="Enter Contact Number"/>
                </label>
                <br />
                <label className="form-label">
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} className="form-control"
                placeholder="Enter Username"/>
                </label>
                <br />
                <label className="form-label">
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="form-control"
                placeholder="Enter Password"/>
                </label>
                <br />

                <button type="submit" className="submitbutton">Register</button>
            </form>

            <div className="image-container">
        <img src={imageSrc} alt="Your Image" className="corner-image" />

      </div>


        </div>
    );
};

export default Register;
