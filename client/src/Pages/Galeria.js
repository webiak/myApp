import React from 'react'
import '../Pages/gal.css';
import DR20 from '../images/dr2020.jpg';
import DR18 from '../images/dr2018.jpg';
import DR22 from '../images/dr2022.jpg';
import T22 from '../images/tim2022.jpg';

function Galeria() {
    
    

  return (
    <div className="gal">
    <h3>Druzina roka 2018</h3>
        <img src={DR18} height={400} width={600} /><br /><br />
    <h3>Druzina roka 2020</h3>
        <img src={DR20} height={400} width={600} /><br /><br />
    <h3>Druzina roka 2022</h3>
        <img src={DR22} height={400} width={600} /><br /><br />

        <h3>Tim 2022</h3>
        <img src={T22} height={400} width={600} /><br /><br />
    </div>
    
  )
}

export default Galeria