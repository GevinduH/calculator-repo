import ZipcodeField from "../common/ZipcodeInput"
import CreditScoreField from "../common/CreditScore"
import TradeOrDownPaymentField from "../common/TradeOrDownPaymentFields"
import MonthsField from "../common/MonthsField"
import LeasePayment from "./LeasePayment"
import InfoCard from "../common/InfoCard"
import AnnualMilesField from "./AnnualMiles";

function LeaseTab({setdownPaymentValue,settradeFieldValue,setTaxes,setLeaseTerms,setMileage,setCreditScoreValue}) {
    return (
        <>
            <div className='showContent'>
                <TradeOrDownPaymentField componentName={'Down Payment'} className={'DownPaymentField'} setTradeOrDownPaymentValue={setdownPaymentValue}/>
                <TradeOrDownPaymentField componentName={'Trade-in Value'} className={'tradeField'} setTradeOrDownPaymentValue={settradeFieldValue}/>
                <ZipcodeField setTaxes={setTaxes}/>
                <MonthsField termsArr={[24, 36, 48]} defaultTerm={36} setTerms={setLeaseTerms}/>
                <AnnualMilesField setMileage={setMileage} />
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