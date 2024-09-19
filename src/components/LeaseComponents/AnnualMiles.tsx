import {useContext, useEffect, useState} from "react";
import { AppContext } from "../../ValueProvider";


export default function AnnualMilesField() {
    const {setMileage} = useContext(AppContext)
    const [miles,setMiles]= useState<number>(12000)
    const mileages:number[] = [10000, 12000, 15000];
    function handleMileage(e:React.ChangeEvent<HTMLSelectElement>) {
        setMiles(parseInt(e.target.value))
    }

    useEffect(()=>{
        setMileage(miles)
    },[miles])
    
    return(
        <div className="annualMilesField">
            <h3>Annual Miles</h3>
            <select value={miles} onChange={handleMileage} className="inputFields">
                {mileages.map(mileage=>(
                    <option key={mileage} value={mileage}>{mileage}</option>
                ))}
            </select>
        </div>
    )
}
