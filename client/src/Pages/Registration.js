import '../Pages/form.css';
import React, { useEffect, useState } from "react";
import RegForm from '../components/RegForm';

import Footer from "../Parts/Footer"


export default function Registration() {

  const [view, setView] = useState("basic");
  return (
    <div className="form">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Registracia
        </h3>
        </nav>
        <view><RegForm/></view>
    <Footer/>

    </div>
  );
}