import React from "react";
import mockData from "../../api/MockDataAPI";


function ChooseCar({car, setCar}) {
    function handleCarChange(e) {
        setCar(e.target.value)
    }
    return(
            <div className="chooseCarField">
                <h1>Choose the model: </h1>
                <select  onChange={handleCarChange} className="inputFields">
                    {mockData.map(model=>(
                        <option key={model['vehicleName']} value={model['vehicleName']}>{model['vehicleName']}</option>
                    ))}
                </select>
            </div>
    )
}

export default ChooseCar;