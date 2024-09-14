import React from "react"
import ZipcodeField from "../Common/ZipcodeInput"
import CreditScoreField from "../Common/CreditScore"
import TradeOrDownPaymentField from "../Common/TradeOrDownPaymentFields"
import MonthsField from "../Common/MonthsField"
import APRfield from "./APR"
import LoanPayment from "./LoanPayment"
import InfoCard from "../Common/InfoCard"

function LoanTab({taxes,setTaxes,creditScoreValue,setCreditScoreValue,tradeFieldValue,settradeFieldValue,loanTerms,setLoanTerms,downPaymentValue,setdownPaymentValue,aprValue,setAprValue}) {
    return (
        <>
            <div className='showContent'>
                <ZipcodeField taxes={taxes} setTaxes={setTaxes} />
                <CreditScoreField creditScoreValue={creditScoreValue} setCreditScoreValue={setCreditScoreValue}/>
                <TradeOrDownPaymentField p={'Trade-in Value'} className={'tradeField'} value={tradeFieldValue} setValue={settradeFieldValue}/>
                <MonthsField termsArr={ [12, 24, 36, 48, 72, 84]} defaultTerm={24} terms={loanTerms} setTerms={setLoanTerms} />
                <TradeOrDownPaymentField p={'Down Payment'} className={'DownPaymentField'} value={downPaymentValue} setValue={setdownPaymentValue}/>
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