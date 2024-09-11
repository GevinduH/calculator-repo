import React,{ createContext,useState } from "react";
import mockData from "../api/MockDataAPI";

export const carModel = createContext()

function ChooseCar() {
    const [car,SetCar] = useState(mockData[0]['vehicleName'])
    console.log('car:',car)
    return(
        <carModel.Provider value={car}>
            <div className="chooseCarField">
                <span>Choose the model: </span>
                <select type="number" value={car} onChange={(e)=>{ SetCar(e.target.value)}} className="inputFields">
                    {mockData.map(model=>(
                        <option key={model['vehicleName']} value={model['vehicleName']}>{model['vehicleName']}</option>
                    ))}
                </select>
            </div>
        </carModel.Provider>
    )
}

export default ChooseCar;