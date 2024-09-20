import React,{useContext, useEffect, useState} from "react";
import { AppContext } from "../../ValueProvider";


export default function APRfield() {
    const {aprValue,setAprValue} = useContext(AppContext)
    function handleAPR(e: React.ChangeEvent<HTMLInputElement>) {
        setAprValue(parseInt(e.target.value))
    }

    useEffect(()=>{
        setAprValue(aprValue)
    },[aprValue])
    return(
        <div className="APRfield">
            <h3>Estimated APR</h3>
            <input type="text" value={aprValue} onChange={handleAPR} className="inputFields"/> %
        </div>
    )
}
