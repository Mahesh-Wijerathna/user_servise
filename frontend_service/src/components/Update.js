import React, { useState } from 'react';
import axios from "axios";

const Update = () => {
    // get user with id with axios from backend
    //const old_user = axios.get('http://localhost:4000/api/v1/tourist/60a6f8b3f6b5a30015b6c5b0');

    // user id as use effect
    const userID = "658bac9c06df01560979fb10";
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        // axios with id as variable    template 
        //await axios.put(`http://localhost:4000/api/v1/tourist/${old_user._id}`, {

        await axios.put(`https://automatic-space-system-v6v6pxwv66wrhpvx6-4000.app.github.dev/api/v1/tourist/`+ {userID}, {
            
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

    alert("update successful \n   Rest is under implementation");
    };

    return (
        <div>
            <h2>Update Page</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br/>
                <label htmlFor="country">Country:</label>
                <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <br/>

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br/>

                
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>

                <button type="button" onClick={handleUpdate}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
