import {useContext} from "react";
import { AppContext } from "../../ValueProvider";


export default function AnnualMilesField() {
    const {mileage,setMileage} = useContext(AppContext)
    const mileages:number[] = [10000, 12000, 15000];
    function handleMileage(e:React.ChangeEvent<HTMLSelectElement>) {
        setMileage(parseInt(e.target.value))
    }
    
    return(
        <div className="annualMilesField">
            <h3>Annual Miles</h3>
            <select value={mileage} onChange={handleMileage} className="inputFields">
                {mileages.map(mileage=>(
                    <option key={mileage} value={mileage}>{mileage}</option>
                ))}
            </select>
        </div>
    )
}
