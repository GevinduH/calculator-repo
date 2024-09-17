import React from "react";
import ZipcodeField from "../Common/ZipcodeInput"
import CreditScoreField from "../Common/CreditScore"
import TradeOrDownPaymentField from "../Common/TradeOrDownPaymentFields"
import MonthsField from "../Common/MonthsField"
import LeasePayment from "./LeasePayment"
import InfoCard from "../Common/InfoCard"
import AnnualMilesField from "./AnnualMiles";

function LeaseTab({downPaymentValue,setdownPaymentValue,tradeFieldValue,settradeFieldValue,taxes,setTaxes,leaseTerms,setLeaseTerms,mileage,setMileage,creditScoreValue,setCreditScoreValue}) {
    return (
        <>
            <div className='showContent'>
                <TradeOrDownPaymentField componentName={'Down Payment'} className={'DownPaymentField'} value={downPaymentValue} setValue={setdownPaymentValue}/>
                <TradeOrDownPaymentField componentName={'Trade-in Value'} className={'tradeField'} value={tradeFieldValue} setValue={settradeFieldValue}/>
                <ZipcodeField taxes={taxes} setTaxes={setTaxes}/>
                <MonthsField termsArr={[24, 36, 48]} defaultTerm={36} terms={leaseTerms} setTerms={setLeaseTerms}/>
                <AnnualMilesField mileage={mileage} setMileage={setMileage} />
                <CreditScoreField creditScoreValue={creditScoreValue} setCreditScoreValue={setCreditScoreValue}/>
            </div>

            <div className='showContent allInfo'>
            <InfoCard/>
            <LeasePayment />
            </div>
        </>
    )
}

export default LeaseTab;