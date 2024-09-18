import React from "react"
import ZipcodeField from "../common/ZipcodeInput"
import CreditScoreField from "../common/CreditScore"
import TradeOrDownPaymentField from "../common/TradeOrDownPaymentFields"
import MonthsField from "../common/MonthsField"
import APRfield from "./APR"
import LoanPayment from "./LoanPayment"
import InfoCard from "../common/InfoCard"

function LoanTab({taxes,setTaxes,setCreditScoreValue,tradeFieldValue,settradeFieldValue,loanTerms,setLoanTerms,downPaymentValue,setdownPaymentValue,aprValue,setAprValue}) {
    return (
        <>
            <div className='showContent'>
                <ZipcodeField taxes={taxes} setTaxes={setTaxes} />
                <CreditScoreField setCreditScoreValue={setCreditScoreValue}/>
                <TradeOrDownPaymentField componentName={'Trade-in Value'} className={'tradeField'} tradeOrDownPaymentvalue={tradeFieldValue} setTradeOrDownPaymentValue={settradeFieldValue}/>
                <MonthsField termsArr={ [12, 24, 36, 48, 72, 84]} defaultTerm={24} terms={loanTerms} setTerms={setLoanTerms} />
                <TradeOrDownPaymentField componentName={'Down Payment'} className={'DownPaymentField'} tradeOrDownPaymentvalue={downPaymentValue} setTradeOrDownPaymentValue={setdownPaymentValue}/>
                <APRfield aprValue={aprValue} setAprValue={setAprValue} />
            </div>

            <div className='showContent allInfo'>
            <InfoCard/>
            <LoanPayment />
            </div>
        </>
            
        
    )
}

export default LoanTab;