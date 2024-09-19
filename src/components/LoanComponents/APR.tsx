import React,{useContext, useEffect, useState} from "react";
import { AppContext } from "../../ValueProvider";


export default function APRfield() {
    const {setAprValue} = useContext(AppContext)
    const [APR,setAPR]= useState(0)
    function handleAPR(e: React.ChangeEvent<HTMLInputElement>) {
        setAPR(parseInt(e.target.value))
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
