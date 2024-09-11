import React,{ useState,useContext} from "react";
import mockData from "../api/MockDataAPI";
import {carModel} from './chooseCar.js';

function TradeField() {
    const [tradeValue,SetTradeValue]= useState(0)
    const chosenCar = useContext(carModel)
    console.log("🚀 ~ TradeField ~ chosenCar:", chosenCar)

    const currCar = mockData.find(car => car.vehicleName === chosenCar);
    console.log("🚀 ~ TradeField ~ currCar:", currCar)

    const currMSRP = currCar ? currCar.msrp : 0;
    console.log("🚀 ~ TradeField ~ currMSRP:", currMSRP)

    const numericTradeVal=parseFloat(tradeValue) 
    console.log("🚀 ~ TradeField ~ numericTradeVal:", numericTradeVal)

    return(
        <div className="tradeField">
            <p>Trade-in Value</p>
            $<input type="text" value={tradeValue} onChange={(e)=>{ SetTradeValue(e.target.value)}} className="inputFields"/>
            {numericTradeVal>(currMSRP*0.25)? <p>Trade-in value cannot be greater than 1/4 of MSRP value</p>:null}
            <p>What's my car worth?</p>
        </div>
    )
}

export default TradeField;