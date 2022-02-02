import React, { useState } from "react";

const App=()=>{
    
    const yello="yellow"
    const [bg,setbg]= useState(yello);
    const [bgn,setbgn]=useState('saad')
    const name=()=>{
         setbgn("Muhammad SaAd")
    };
    const bgchange=()=>{
      const purpl="purple"
         setbg(purpl)
    }; 
return(
    <>
    <div style={{ backgroundColor : bg}}className="card">
    <button onClick={bgchange} onDoubleClick={name}>{bgn} </button>
    </div>
    </>
);
};

export default App;
