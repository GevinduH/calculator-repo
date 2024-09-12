import React,{useEffect, useState} from "react";


function APRfield({aprValue,setAprValue}) {
    const [APR,SetAPR]= useState(0)
    useEffect(()=>{
        setAprValue(APR)
    },[APR,setAprValue])
    return(
        <div className="APRfield">
            <h3>Estimated APR</h3>
            <input type="text" value={APR} onChange={(e)=>{ SetAPR(e.target.value)}} className="inputFields"/> %
        </div>
    )
}

export default APRfield;