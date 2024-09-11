import React,{useState} from "react";


function AnnualMilesField() {
    const [miles,SetMiles]= useState(12000)
    const mileages = [10000, 12000, 15000];
    if (miles<0) throw new Error("Value of the Annual Miles field should be a positive number")
    
    return(
        <div className="annualMilesField">
            <p>Annual Miles</p>
            <select type="number" value={miles} onChange={(e)=>{ SetMiles(e.target.value)}} className="inputFields">
                {mileages.map(mileage=>(
                    <option key={mileage} value={mileage}>{mileage}</option>
                ))}
            </select>
        </div>
    )
}

export default AnnualMilesField;