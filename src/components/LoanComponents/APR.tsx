import React,{useEffect, useState} from "react";


function APRfield({aprValue,setAprValue}) {
    const [APR,setAPR]= useState(0)
    function handleAPR(e) {
        setAPR(e.target.value)
    }

    useEffect(()=>{
        setAprValue(APR)
    },[APR,setAprValue])
    return(
        <div className="APRfield">
            <h3>Estimated APR</h3>
            <input type="text" value={APR} onChange={handleAPR} className="inputFields"/> %
        </div>
    )
}

export default APRfield;