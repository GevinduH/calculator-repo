import React,{useEffect, useState} from "react";


function APRfield({aprValue,setAprValue}) {
    const [APR,SetAPR]= useState(0)
    useEffect(()=>{
        setAprValue(APR)
    },[APR,setAprValue])
    return(
        <div className="APRfield">
            <p>Estimated APR</p>
            <input type="text" value={APR} onChange={(e)=>{ SetAPR(e.target.value)}} className="inputFields"/> %
        </div>
    )
}

export default APRfield;