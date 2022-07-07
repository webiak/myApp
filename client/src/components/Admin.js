import {React, scrollView} from "react";
import { useState,useEffect } from "react";
import Axios from "axios";
import '../Pages/form.css';

export default function Admin() {

  const [druzinyList, setDruzinyList] = useState([]);
  const nazov = useState("");
  const [novyNazov,setNovyNazov] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/vypis").then((response) => {
      setDruzinyList(response.data);
    });
  }, []);

  const deleteDruzina = () =>{
    Axios.delete('http://localhost:3001/delete');
  }

  const updateDruzina = (druzina) =>{
    Axios.put("http://localhost:3001/update",druzina);
    setNovyNazov("");
  }

  return (
    <div scrollView>

      {druzinyList.map((val) => {
        return(
          <div className="card">
          <h1>
            {val.nazov}
          </h1>
          <button onClick={ () =>{deleteDruzina()}}>Delete</button>
          <input type="text" id="update"
            onChange={(event) => {
              setNovyNazov(event.target.value);
            }}
          />
          <button onClick={() =>{updateDruzina(val.nazov)}} >Update</button> <br /><br />
          </div>
        );

      })}

    </div>
  );
}
