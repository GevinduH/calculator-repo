import React from "react";
import ZipcodeField from "../common/ZipcodeInput"
import CreditScoreField from "../common/CreditScore"
import TradeOrDownPaymentField from "../common/TradeOrDownPaymentFields"
import MonthsField from "../common/MonthsField"
import LeasePayment from "./LeasePayment"
import InfoCard from "../common/InfoCard"
import AnnualMilesField from "./AnnualMiles";

function LeaseTab({downPaymentValue,setdownPaymentValue,tradeFieldValue,settradeFieldValue,taxes,setTaxes,leaseTerms,setLeaseTerms,mileage,setMileage,creditScoreValue,setCreditScoreValue}) {
    return (
        <>
            <div className='showContent'>
                <TradeOrDownPaymentField componentName={'Down Payment'} className={'DownPaymentField'} tradeOrDownPaymentvalue={downPaymentValue} setTradeOrDownPaymentValue={setdownPaymentValue}/>
                <TradeOrDownPaymentField componentName={'Trade-in Value'} className={'tradeField'} tradeOrDownPaymentvalue={tradeFieldValue} setTradeOrDownPaymentValue={settradeFieldValue}/>
                <ZipcodeField taxes={taxes} setTaxes={setTaxes}/>
                <MonthsField termsArr={[24, 36, 48]} defaultTerm={36} terms={leaseTerms} setTerms={setLeaseTerms}/>
                <AnnualMilesField mileage={mileage} setMileage={setMileage} />
                <CreditScoreField setCreditScoreValue={setCreditScoreValue}/>
            </div>

            <div className='showContent allInfo'>
            <InfoCard/>
            <LeasePayment />
            </div>
        </>
    )
}

export default LeaseTab;