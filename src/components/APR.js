import React,{useState} from "react";


function APRfield() {
    const [APR,SetAPR]= useState(0)
    return(
        <div className="APRfield">
            <p>Estimated APR</p>
            <input type="text" value={APR} onChange={(e)=>{ SetAPR(e.target.value)}} className="inputFields"/> %
        </div>
    )
}

export default APRfield;