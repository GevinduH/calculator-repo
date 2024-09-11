import React from "react";
import mockData from "../api/MockDataAPI";


function ChooseCar({car, setCar}) {
    
    return(
            <div className="chooseCarField">
                <span>Choose the model: </span>
                <select  onChange={(e)=>{ setCar(e.target.value)}} className="inputFields">
                    {mockData.map(model=>(
                        <option key={model['vehicleName']} value={model['vehicleName']}>{model['vehicleName']}</option>
                    ))}
                </select>
            </div>
    )
}

export default ChooseCar;