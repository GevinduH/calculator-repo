import React, { useContext } from "react";
import mockData from "../../api/MockDataAPI";
import { AppContext } from "../../context.js";


export default function ChooseCar() {
    const setCar = useContext(AppContext)
    console.log("🚀 ~ ChooseCar ~ setCar:", setCar)
    function handleCarChange(e:React.ChangeEvent<HTMLSelectElement>) {
        // setCar(e.target.value)
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



