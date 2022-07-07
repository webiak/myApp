import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Parts/Footer"
import "../Pages/log.css"

export default function LogIn() {
  let navigate = useNavigate();

  const [nazovLog, setUsername] = useState("");
  const [hesloLog, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");


  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      nazov: nazovLog,
      heslo: hesloLog,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        navigate("/main");
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
        
      }
      
    });
  }, []);

 return (
  <div >
    <div >
        <h1>Prihlasit sa</h1>
        <label >Nazov druziny</label>
        <input
        id="input"
          type="text"
          placeholder="Zadaj nazov druziny"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={login}> Prihlasenie </button>
      </div>

      <h1>{loginStatus}</h1>
      <Footer/>
      </div>
  );
}
