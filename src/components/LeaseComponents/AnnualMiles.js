import React,{useEffect, useState} from "react";


function AnnualMilesField({mileage,setMileage}) {
    const [miles,setMiles]= useState(12000)
    const mileages = [10000, 12000, 15000];
    useEffect(()=>{
        setMileage(miles)
    },[miles,setMileage])
    
    return(
        <div className="annualMilesField">
            <h3>Annual Miles</h3>
            <select type="number" value={miles} onChange={(e)=>{ setMiles(e.target.value)}} className="inputFields">
                {mileages.map(mileage=>(
                    <option key={mileage} value={mileage}>{mileage}</option>
                ))}
            </select>
        </div>
    )
}

export default AnnualMilesField;