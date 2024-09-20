import React,{ useState,useContext, useEffect} from "react";
import mockData from "../../api/MockDataAPI";
import { AppContext } from "../../ValueProvider";

export default function TradeOrDownPaymentField({componentName,className}) {
    const {car,setMsrp,tradeFieldValue,downPaymentValue,setTradeFieldValue,setDownPaymentValue} = useContext(AppContext)
    const [inputValue,setInputValue]= useState('0')
    const carDetails = mockData.find(carObj => carObj.vehicleName === car);
    const currMSRP = carDetails ? carDetails.msrp : 0;
    const numericTradeVal=parseFloat(inputValue)
    const component = className

    useEffect(()=>{
        className === 'DownPaymentField' ? setInputValue(downPaymentValue): setInputValue(tradeFieldValue)
    },[])

    function handleTradeorDownPayment(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }
    
    useEffect(()=>{
        if (className === 'DownPaymentField') {
            setDownPaymentValue(inputValue)
        }else {
            setTradeFieldValue(inputValue)
        }
            
        setMsrp(currMSRP)
    },[inputValue,currMSRP]) 

    return(
        <div className={className}>
            <h3>{componentName}</h3>
            $<input type="text" value={inputValue} onChange={handleTradeorDownPayment} className="inputFields"/>
            {numericTradeVal>(currMSRP*0.25)? <p className="errorShow"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#BB271A"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>{componentName} cannot be greater than 1/4 of MSRP value</p>:null}
            {component==='tradeField'? <p>What's my car worth?</p>:null}
        </div>
    )
}
