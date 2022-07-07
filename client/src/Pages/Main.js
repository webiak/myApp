import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import User from "../components/User";
import Admin from "../components/Admin";

export default function Main() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  const logOut = () => {
    Axios.get("http://localhost:3001/logout").then((response) => {
      console.log(response);  
    } )

    navigate("/login");

};

  return (
    <div>
      {role == "user" && <User />}
      {role == "admin" && <Admin />}
      <button onClick={logOut}> LogOut </button>
    </div> 
  );
}