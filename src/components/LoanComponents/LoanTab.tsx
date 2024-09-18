import React from "react"
import ZipcodeField from "../common/ZipcodeInput"
import CreditScoreField from "../common/CreditScore"
import TradeOrDownPaymentField from "../common/TradeOrDownPaymentFields"
import MonthsField from "../common/MonthsField"
import APRfield from "./APR"
import LoanPayment from "./LoanPayment"
import InfoCard from "../common/InfoCard"

function LoanTab({setTaxes,setCreditScoreValue,settradeFieldValue,setLoanTerms,setdownPaymentValue,setAprValue}) {
    return (
        <>
            <div className='showContent'>
                <ZipcodeField setTaxes={setTaxes} />
                <CreditScoreField setCreditScoreValue={setCreditScoreValue}/>
                <TradeOrDownPaymentField componentName={'Trade-in Value'} className={'tradeField'} setTradeOrDownPaymentValue={settradeFieldValue}/>
                <MonthsField termsArr={ [12, 24, 36, 48, 72, 84]} defaultTerm={24} setTerms={setLoanTerms} />
                <TradeOrDownPaymentField componentName={'Down Payment'} className={'DownPaymentField'} setTradeOrDownPaymentValue={setdownPaymentValue}/>
                <APRfield setAprValue={setAprValue} />
            </div>

            <div className='showContent allInfo'>
            <InfoCard/>
            <LoanPayment />
            </div>
        </>
            
        
    )
}

export default LoanTab;