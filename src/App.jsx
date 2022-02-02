import React, { useState } from "react";

const App=()=>{
    
    const yello="grey"
    const [bg,setbg]= useState(yello);
    const [bgn,setbgn]=useState('saad')
    const name=()=>{
         setbgn("Muhammad SaAd")
    };
    const bgchange=()=>{
      const purpl="aqua"
         setbg(purpl)
    }; 
return(
    <>
    <div className="cards">
    <ul><li><h1>Single Click To Change Back grond Color</h1></li>
    <li><h1>Double Click To Change Button Name</h1></li>
    </ul>
    </div>
    <div style={{ backgroundColor : bg}}className="card">
    
    
    
    <button onClick={bgchange} onDoubleClick={name}>{bgn} </button>
    </div>
    </>
);
};

export default App;
